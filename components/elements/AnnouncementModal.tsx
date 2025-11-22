"use client";
import { useEffect, useState } from "react";
import { WHATSAPP } from "@/util/config";
import Link from "next/link";

export default function AnnouncementModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Open modal after a short delay to ensure page is loaded
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
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
            />

            {/* Modal */}
            <div
                className="announcement-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div className="announcement-modal-content">
                    {/* Close button */}
                    <button
                        className="announcement-modal-close"
                        onClick={handleClose}
                        aria-label="Close announcement"
                        type="button"
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

                    {/* Content */}
                    <div className="announcement-modal-body">
                        <div className="announcement-icon">
                            🎉
                        </div>
                        <h2 id="modal-title" className="announcement-title">
                            Wij openen in januari 2026!
                        </h2>
                        <p className="announcement-text">
                            Reserveer vandaag nog uw afspraak via e-mail of WhatsApp. Wij kijken ernaar uit om u na onze grote opening van dienst te zijn!
                        </p>
                        <div className="announcement-cta">
                            <a
                                href="mailto:info@dentalign.be"
                                className="announcement-button announcement-button-email"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ marginRight: '8px' }}
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                E-mail ons
                            </a>
                            {WHATSAPP && (
                                <a
                                    href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo! Ik wil graag een afspraak reserveren voor na de opening in januari 2026.')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="announcement-button announcement-button-whatsapp"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        style={{ marginRight: '8px' }}
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    WhatsApp
                                </a>
                            )}
                        </div>

                        {/* Vacancy Link */}
                        <div className="announcement-vacancy" style={{
                            marginTop: '20px',
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            borderLeft: '4px solid #007bff'
                        }}>
                            <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>
                                <strong>Kom ons team versterken!</strong> We zoeken tandartsen, assistenten en mondhygiënisten.
                            </p>
                            <Link
                                href="/vacancy"
                                onClick={handleClose}
                                style={{
                                    display: 'inline-block',
                                    marginTop: '8px',
                                    color: '#007bff',
                                    fontWeight: '500',
                                    textDecoration: 'none'
                                }}
                            >
                                Bekijk vacatures →
                            </Link>
                        </div>

                        <p className="announcement-footer">
                            info@dentalign.be
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
