import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/plugins/all.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/barfiller.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import React from "react";

const figtree = Figtree({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Dentalign - Modern Dental Clinic & Orthodontic Care",
    description:
        "Dentalign offers comprehensive dental care services including orthodontics, cosmetic dentistry, and general dental treatments. Book your appointment today for a brighter, healthier smile.",
    keywords:
        "dental clinic, orthodontics, cosmetic dentistry, dental care, teeth whitening, dental implants, braces, invisalign, dental services",
    authors: [{ name: "Dentalign" }],
    creator: "Dentalign",
    publisher: "Dentalign",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "nl_NL",
        url: "https://dentalign.be",
        siteName: "Dentalign",
        title: "Dentalign - Modern Dental Clinic & Orthodontic Care",
        description:
            "Dentalign offers comprehensive dental care services including orthodontics, cosmetic dentistry, and general dental treatments. Book your appointment today for a brighter, healthier smile.",
        images: [
            {
                url: "/assets/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Dentalign Dental Clinic",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dentalign - Modern Dental Clinic & Orthodontic Care",
        description:
            "Dentalign offers comprehensive dental care services including orthodontics, cosmetic dentistry, and general dental treatments.",
        images: ["/assets/img/og-image.jpg"],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    verification: {
        google: "your-google-site-verification",
    },
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
    const { lang } = await params;

    return (
        <html lang={lang}>
            <body className={`${figtree.className}`}>{children}</body>
        </html>
    );
}
