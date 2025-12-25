"use client";
import { useEffect, useState } from "react";

export default function ChristmasModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if modal was already shown this session
        const wasShown = sessionStorage.getItem('christmasModalShown');
        if (wasShown) return;

        // Open modal after a short delay to ensure page is loaded
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('christmasModalShown', 'true');
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="announcement-modal-backdrop"
                onClick={handleClose}
                aria-hidden="true"
                style={{ zIndex: 10000 }}
            />

            {/* Modal */}
            <div
                className="announcement-modal"
                role="dialog"
                aria-modal="true"
                aria-label="Kerstgroet"
                style={{ maxWidth: '800px', zIndex: 10001 }}
            >
                <div className="announcement-modal-content" style={{ padding: 0, overflow: 'hidden' }}>
                    {/* Close button */}
                    <button
                        className="announcement-modal-close"
                        onClick={handleClose}
                        aria-label="Sluiten"
                        type="button"
                        style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'rgba(255, 255, 255, 0.9)',
                            zIndex: 10,
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Christmas Image */}
                    <div style={{ position: 'relative', width: '100%' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/img/dentalign-kerst.jpeg"
                            alt="Prettige Kerstdagen van Dentalign"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
