import { useCallback, useEffect, useRef, useState } from 'react';

interface ImageLightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}

/** Highest zoom, relative to the fit-to-screen size (so 400% = 4x the size you first see). */
const MAX_ZOOM = 4;
const DOUBLE_TAP_ZOOM = 2.5;
const BUTTON_ZOOM_STEP = 1.5;
const TAP_MOVE_TOLERANCE = 5;
const DOUBLE_TAP_MS = 300;
/** Time constant (ms) of the zoom easing: a wheel notch glides to its target instead of jumping. */
const ZOOM_EASE_MS = 70;
/** Time constant (ms) for the image coasting to a stop after a drag is released. */
const FLING_FRICTION_MS = 260;
const CLOSE_MS = 180;
/** The image opens slightly smaller than fit and eases up to it. */
const ENTER_SCALE = 0.9;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type View = { x: number; y: number; scale: number; fit: number; natW: number; natH: number };

/** Change the scale while keeping the point (ax, ay) fixed on screen. */
function scaleAbout(v: View, next: number, ax: number, ay: number) {
    const ratio = next / v.scale;

    v.x = ax - (ax - v.x) * ratio;
    v.y = ay - (ay - v.y) * ratio;
    v.scale = next;
}

/**
 * Full-screen image viewer. The image is laid out at its natural size and only ever moved with a CSS
 * transform. Pan and zoom state lives in refs and is written to the element once per animation frame,
 * so dragging and zooming never wait on a React re-render or a CSS transition.
 */
export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const view = useRef<View>({ x: 0, y: 0, scale: 0, fit: 0, natW: 0, natH: 0 });
    const target = useRef({ scale: 0, ax: 0, ay: 0 });
    const fling = useRef({ vx: 0, vy: 0, active: false, lastMove: 0 });
    const pointers = useRef(new Map<number, { x: number; y: number }>());
    const gesture = useRef({ startX: 0, startY: 0, moved: false, onImage: false, lastDist: 0 });
    const lastTap = useRef({ time: 0, x: 0, y: 0 });
    const frame = useRef(0);
    const lastTime = useRef(0);
    const closingRef = useRef(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
    const [zoomPercent, setZoomPercent] = useState(100);
    const [closing, setClosing] = useState(false);

    const render = useCallback(() => {
        const img = imgRef.current;
        const box = containerRef.current;
        const v = view.current;

        if (!img || !box || !v.natW) {
            return;
        }

        // Keep the image on screen: centred when smaller than the viewport, otherwise no empty gaps at the edges.
        const scaledW = v.natW * v.scale;
        const scaledH = v.natH * v.scale;

        v.x = scaledW <= box.clientWidth ? (box.clientWidth - scaledW) / 2 : clamp(v.x, box.clientWidth - scaledW, 0);
        v.y = scaledH <= box.clientHeight ? (box.clientHeight - scaledH) / 2 : clamp(v.y, box.clientHeight - scaledH, 0);

        img.style.transform = `translate3d(${v.x}px, ${v.y}px, 0) scale(${v.scale})`;
        img.style.opacity = '1';
        box.style.cursor = v.scale > v.fit * 1.001 ? 'grab' : 'default';

        setZoomPercent(Math.round((v.scale / v.fit) * 100));
    }, []);

    /** One animation loop drives easing, coasting and plain redraws; it stops itself when nothing is moving. */
    const tick = useCallback(
        function step(now: number) {
            frame.current = 0;

            const dt = Math.min(now - lastTime.current, 50);
            const v = view.current;
            const t = target.current;
            const f = fling.current;
            let busy = false;

            lastTime.current = now;

            if (v.scale !== t.scale) {
                const eased = v.scale + (t.scale - v.scale) * (1 - Math.exp(-dt / ZOOM_EASE_MS));

                scaleAbout(v, Math.abs(t.scale - eased) < v.fit * 0.001 ? t.scale : eased, t.ax, t.ay);
                busy = v.scale !== t.scale;
            }

            if (f.active) {
                v.x += f.vx * dt;
                v.y += f.vy * dt;

                const decay = Math.exp(-dt / FLING_FRICTION_MS);

                f.vx *= decay;
                f.vy *= decay;
                f.active = Math.hypot(f.vx, f.vy) > 0.02;
                busy = busy || f.active;
            }

            render();

            if (busy) {
                frame.current = requestAnimationFrame(step);
            }
        },
        [render],
    );

    const kick = useCallback(() => {
        if (!frame.current) {
            lastTime.current = performance.now();
            frame.current = requestAnimationFrame(tick);
        }
    }, [tick]);

    const zoomTo = useCallback(
        (scale: number, ax: number, ay: number) => {
            const v = view.current;
            const t = target.current;

            t.scale = clamp(scale, v.fit, v.fit * MAX_ZOOM);
            t.ax = ax;
            t.ay = ay;
            fling.current.active = false;

            if (prefersReducedMotion()) {
                scaleAbout(v, t.scale, ax, ay);
            }

            kick();
        },
        [kick],
    );

    const zoomFromCentre = useCallback(
        (factor: number) => {
            const box = containerRef.current;

            if (box) {
                zoomTo(target.current.scale * factor, box.clientWidth / 2, box.clientHeight / 2);
            }
        },
        [zoomTo],
    );

    const layout = useCallback(() => {
        const img = imgRef.current;
        const box = containerRef.current;
        const v = view.current;
        const t = target.current;

        if (!img || !box || !img.naturalWidth) {
            return;
        }

        const initial = v.scale === 0;
        const wasFit = initial || t.scale <= v.fit * 1.001;
        const centre = { ax: box.clientWidth / 2, ay: box.clientHeight / 2 };

        v.natW = img.naturalWidth;
        v.natH = img.naturalHeight;
        v.fit = Math.min(1, (box.clientWidth * 0.94) / v.natW, (box.clientHeight * 0.9) / v.natH);

        if (wasFit) {
            t.scale = v.fit;
            Object.assign(t, centre);
            v.scale = initial && !prefersReducedMotion() ? v.fit * ENTER_SCALE : v.fit;
        } else {
            t.scale = clamp(t.scale, v.fit, v.fit * MAX_ZOOM);
            v.scale = clamp(v.scale, v.fit, v.fit * MAX_ZOOM);
        }

        kick();
    }, [kick]);

    const requestClose = useCallback(() => {
        if (closingRef.current) {
            return;
        }

        closingRef.current = true;

        if (prefersReducedMotion()) {
            onClose();

            return;
        }

        setClosing(true);
        closeTimer.current = setTimeout(onClose, CLOSE_MS);
    }, [onClose]);

    useEffect(() => {
        const box = containerRef.current;

        if (!box) {
            return;
        }

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();

            const rect = box.getBoundingClientRect();
            const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
            const speed = e.ctrlKey ? 0.01 : 0.0018; // pinch on a trackpad reports ctrlKey with small deltas

            zoomTo(target.current.scale * Math.exp(-delta * speed), e.clientX - rect.left, e.clientY - rect.top);
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                requestClose();
            } else if (e.key === '+' || e.key === '=') {
                zoomFromCentre(BUTTON_ZOOM_STEP);
            } else if (e.key === '-') {
                zoomFromCentre(1 / BUTTON_ZOOM_STEP);
            } else if (e.key === '0') {
                zoomFromCentre(view.current.fit / target.current.scale);
            }
        };

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';
        box.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', layout);

        // A cached image can finish loading before React attaches onLoad.
        if (imgRef.current?.complete) {
            layout();
        }

        return () => {
            document.body.style.overflow = previousOverflow;
            box.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', layout);
        };
    }, [layout, requestClose, zoomFromCentre, zoomTo]);

    useEffect(
        () => () => {
            cancelAnimationFrame(frame.current);
            // Reset so a StrictMode re-mount (or any re-run) can start the loop again.
            frame.current = 0;
            clearTimeout(closeTimer.current);
            closingRef.current = false;
        },
        [],
    );

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        e.currentTarget.setPointerCapture(e.pointerId);

        // A mouse is a single pointer: drop any stale entry (e.g. released outside the window) so it can't read as a pinch.
        if (e.pointerType === 'mouse') {
            pointers.current.clear();
        }

        pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
        fling.current.active = false;

        const g = gesture.current;

        if (pointers.current.size === 1) {
            g.startX = e.clientX;
            g.startY = e.clientY;
            g.moved = false;
            g.onImage = e.target === imgRef.current;
        } else {
            const [a, b] = [...pointers.current.values()];

            g.moved = true; // a second finger means this is a pinch, not a tap
            g.lastDist = Math.hypot(a.x - b.x, a.y - b.y);
        }

        if (view.current.scale > view.current.fit * 1.001) {
            e.currentTarget.style.cursor = 'grabbing';
        }
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const previous = pointers.current.get(e.pointerId);

        if (!previous) {
            return;
        }

        const current = { x: e.clientX, y: e.clientY };
        const g = gesture.current;
        const v = view.current;
        const f = fling.current;
        const now = performance.now();

        pointers.current.set(e.pointerId, current);

        if (pointers.current.size >= 2) {
            const [a, b] = [...pointers.current.values()];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            const rect = e.currentTarget.getBoundingClientRect();

            if (g.lastDist > 0) {
                const next = clamp(v.scale * (dist / g.lastDist), v.fit, v.fit * MAX_ZOOM);

                scaleAbout(v, next, (a.x + b.x) / 2 - rect.left, (a.y + b.y) / 2 - rect.top);
                target.current.scale = next;
            }

            g.lastDist = dist;
            v.x += (current.x - previous.x) / 2;
            v.y += (current.y - previous.y) / 2;
            kick();

            return;
        }

        if (Math.hypot(current.x - g.startX, current.y - g.startY) > TAP_MOVE_TOLERANCE) {
            g.moved = true;
        }

        if (g.moved) {
            const dx = current.x - previous.x;
            const dy = current.y - previous.y;
            const dt = Math.max(now - f.lastMove, 1);

            // Smoothed release velocity (px per ms) for the coast after letting go.
            f.vx = f.vx * 0.6 + (dx / dt) * 0.4;
            f.vy = f.vy * 0.6 + (dy / dt) * 0.4;
            f.lastMove = now;
            v.x += dx;
            v.y += dy;
            kick();
        }
    };

    const handlePointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!pointers.current.delete(e.pointerId)) {
            return;
        }

        const g = gesture.current;
        const v = view.current;
        const f = fling.current;

        e.currentTarget.style.cursor = v.scale > v.fit * 1.001 ? 'grab' : 'default';

        if (pointers.current.size === 1) {
            // One finger left after a pinch: carry on panning from where it is, without a jump.
            const [remaining] = [...pointers.current.values()];

            g.startX = remaining.x;
            g.startY = remaining.y;
            g.lastDist = 0;
            f.vx = 0;
            f.vy = 0;

            return;
        }

        if (pointers.current.size > 0 || e.type === 'pointercancel') {
            return;
        }

        if (g.moved) {
            // Coast on after a quick drag; a held-still release (no recent movement) stops dead.
            if (performance.now() - f.lastMove < 80 && Math.hypot(f.vx, f.vy) > 0.1 && !prefersReducedMotion()) {
                f.active = true;
                kick();
            }

            f.vx = 0;
            f.vy = 0;

            return;
        }

        // A tap or click without movement.
        if (!g.onImage) {
            requestClose();

            return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const now = Date.now();
        const isDouble = now - lastTap.current.time < DOUBLE_TAP_MS && Math.hypot(x - lastTap.current.x, y - lastTap.current.y) < 30;

        lastTap.current = isDouble ? { time: 0, x: 0, y: 0 } : { time: now, x, y };

        if (isDouble) {
            zoomTo(target.current.scale > v.fit * 1.05 ? v.fit : v.fit * DOUBLE_TAP_ZOOM, x, y);
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 bg-black/90 transition-opacity duration-[180ms] ease-out motion-safe:animate-in motion-safe:duration-200 motion-safe:fade-in ${
                closing ? 'opacity-0' : 'opacity-100'
            }`}
        >
            {/* Pan / zoom surface */}
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-hidden"
                style={{ touchAction: 'none' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerEnd}
                onPointerCancel={handlePointerEnd}
                onLostPointerCapture={handlePointerEnd}
            >
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    onLoad={layout}
                    decoding="async"
                    draggable={false}
                    className="absolute top-0 left-0 max-w-none select-none motion-safe:transition-opacity motion-safe:duration-300"
                    style={{ transformOrigin: '0 0', opacity: 0 }}
                />
            </div>

            {/* Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-black/75 p-1.5 shadow-lg ring-1 ring-white/25">
                <button
                    onClick={() => zoomFromCentre(1 / BUTTON_ZOOM_STEP)}
                    disabled={zoomPercent <= 100}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/20 active:scale-90 disabled:opacity-30"
                    aria-label="Zoom out"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                </button>
                <span className="w-12 text-center font-montserrat text-sm font-semibold text-white tabular-nums">{zoomPercent}%</span>
                <button
                    onClick={() => zoomFromCentre(BUTTON_ZOOM_STEP)}
                    disabled={zoomPercent >= MAX_ZOOM * 100}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/20 active:scale-90 disabled:opacity-30"
                    aria-label="Zoom in"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                </button>
                <button
                    onClick={requestClose}
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/20 active:scale-90"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-1.5 font-montserrat text-xs whitespace-nowrap text-white/90 ring-1 ring-white/15">
                Scroll or pinch to zoom · Drag to pan · Double-click to zoom · Esc to close
            </p>
        </div>
    );
}
