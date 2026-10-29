import { useSyncExternalStore } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const HEADER_ACTIONS_ID = 'app-header-actions';

// Calling the callback once after mount re-reads the target, which doesn't exist yet on a hard page load.
const subscribe = (onMount: () => void) => {
    onMount();

    return () => {};
};

/**
 * Renders its children into the right side of the app header.
 */
export function HeaderActions({ children }: { children: ReactNode }) {
    const target = useSyncExternalStore(
        subscribe,
        () => document.getElementById(HEADER_ACTIONS_ID),
        () => null,
    );

    return target ? createPortal(children, target) : null;
}
