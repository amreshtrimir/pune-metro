import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { PagePopup } from '@/types/cms';

/** Opens the page's published popup after its delay, once per browser session. */
export default function SitePopup({ popup }: { popup: PagePopup }) {
    const [open, setOpen] = useState(false);
    const seenKey = `popup-seen-${popup.version}`;

    useEffect(() => {
        if (sessionStorage.getItem(seenKey)) {
            return;
        }

        const timer = setTimeout(
            () => setOpen(true),
            popup.delay_seconds * 1000,
        );

        return () => clearTimeout(timer);
    }, [seenKey, popup.delay_seconds]);

    const close = () => {
        sessionStorage.setItem(seenKey, '1');
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && close()}>
            {/*
             * The image is the whole popup. It is sized in viewport units because a
             * percentage width collapses to half the screen inside a centred dialog.
             * [&>button] styles the dialog's built-in close button.
             */}
            <DialogContent
                aria-describedby={undefined}
                className="w-max max-w-none border-0 bg-transparent p-0 shadow-none sm:max-w-none [&>button]:-top-3 [&>button]:-right-3 [&>button]:flex [&>button]:size-9 [&>button]:cursor-pointer [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:bg-white [&>button]:text-black [&>button]:opacity-100 [&>button]:shadow-lg [&>button]:hover:bg-neutral-100"
            >
                <DialogTitle className="sr-only">{popup.title}</DialogTitle>
                <picture>
                    {popup.mobile_image_url && (
                        <source
                            media="(orientation: portrait) and (max-width: 1024px)"
                            srcSet={popup.mobile_image_url}
                        />
                    )}
                    <img
                        src={popup.image_url}
                        alt={popup.title}
                        className="max-h-[85dvh] max-w-[min(calc(100vw-2rem),48rem)] rounded-2xl shadow-2xl"
                    />
                </picture>
            </DialogContent>
        </Dialog>
    );
}
