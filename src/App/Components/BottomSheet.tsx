import React, { useEffect, useRef } from "react";

type BottomSheetProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    ariaLabel?: string;
};

function BottomSheet({
    isOpen,
    onClose,
    children,
    ariaLabel = "Bottom sheet",
}: BottomSheetProps): React.JSX.Element | null {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const previouslyFocused = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        closeButtonRef.current?.focus();

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            previouslyFocused?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
            <button
                type="button"
                aria-label="Close bottom sheet"
                tabIndex={-1}
                className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
                onClick={onClose}
            />
            <section
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
                className="relative z-10 max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-glass-border bg-[#091225] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_-16px_60px_rgba(0,0,0,0.5)] motion-safe:animate-[bottom-sheet-enter_240ms_ease-out]"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="Close bottom sheet"
                    onClick={onClose}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-xl text-text-secondary transition-colors hover:bg-surface-tertiary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-vasto-blue"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="pr-12">{children}</div>
            </section>
        </div>
    );
}

export default BottomSheet;
