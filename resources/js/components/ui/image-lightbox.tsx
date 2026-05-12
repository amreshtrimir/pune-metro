import { useEffect, useRef, useState } from 'react';

interface ImageLightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
    const [zoom, setZoom] = useState(1);
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const MIN_ZOOM = 1;
    const MAX_ZOOM = 4;
    const ZOOM_STEP = 0.5;

    const clampZoom = (z: number) => Math.min(Math.max(z, MIN_ZOOM), MAX_ZOOM);

    const zoomIn = () => setZoom((z) => clampZoom(z + ZOOM_STEP));

    const zoomOut = () =>
        setZoom((z) => {
            const next = clampZoom(z - ZOOM_STEP);

            if (next === MIN_ZOOM) {
                setOffset({ x: 0, y: 0 });
            }

            return next;
        });

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoom <= 1) {
            return;
        }

        setDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragging || !dragStart.current) {
            return;
        }

        setOffset({
            x: dragStart.current.ox + (e.clientX - dragStart.current.x),
            y: dragStart.current.oy + (e.clientY - dragStart.current.y),
        });
    };

    const handleMouseUp = () => setDragging(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', onKey);

        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    useEffect(() => {
        const el = containerRef.current;

        if (!el) {
            return;
        }

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();

            setZoom((z) => {
                const delta = e.deltaY < 0 ? 0.2 : -0.2;
                const next = clampZoom(z + delta);

                if (next === MIN_ZOOM) {
                    setOffset({ x: 0, y: 0 });
                }

                return next;
            });
        };

        el.addEventListener('wheel', onWheel, { passive: false });

        return () => el.removeEventListener('wheel', onWheel);
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Controls */}
            <div
                className="absolute top-4 right-4 z-10 flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={zoomOut}
                    disabled={zoom <= MIN_ZOOM}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30 disabled:opacity-30"
                    aria-label="Zoom out"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                </button>
                <span className="w-12 text-center font-montserrat text-sm font-semibold text-white/80">
                    {Math.round(zoom * 100)}%
                </span>
                <button
                    onClick={zoomIn}
                    disabled={zoom >= MAX_ZOOM}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30 disabled:opacity-30"
                    aria-label="Zoom in"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                </button>
                <button
                    onClick={onClose}
                    className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            {/* Image */}
            <div
                ref={containerRef}
                className="relative max-h-screen max-w-screen overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'default' }}
            >
                <img
                    src={src}
                    alt={alt}
                    className="block max-h-[90vh] max-w-[92vw] select-none rounded-xl transition-transform duration-150"
                    style={{
                        transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                        transformOrigin: 'center center',
                    }}
                    draggable={false}
                />
            </div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-montserrat text-xs text-white/50">
                Scroll to zoom · Drag to pan · Esc to close
            </p>
        </div>
    );
}
