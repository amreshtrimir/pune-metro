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
            <DialogContent
                aria-describedby={undefined}
                className="w-auto bg-white p-2 pt-12 text-black sm:max-w-2xl"
            >
                <DialogTitle className="sr-only">{popup.title}</DialogTitle>
                <img
                    src={popup.image_url}
                    alt={popup.title}
                    className="max-h-[75vh] w-full rounded-md object-contain"
                />
            </DialogContent>
        </Dialog>
    );
}
