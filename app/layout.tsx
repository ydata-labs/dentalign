import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/plugins/all.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/barfiller.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Dentalign - Moderne Tandkliniek & Mondzorg",
        template: "%s | Dentalign Tandkliniek",
    },
    description:
        "Dentalign biedt uitgebreide tandheelkundige zorg inclusief mondzorg, cosmetische tandheelkunde en algemene tandheelkundige behandelingen. Maak vandaag nog een afspraak voor een stralende, gezonde glimlach.",
    keywords: [
        "tandkliniek",
        "cosmetische tandheelkunde",
        "tandzorg",
        "tanden bleken",
        "tandimplantaten",
        "beugels",
        "invisalign",
        "tandheelkundige diensten",
        "orthodontie",
        "preventieve zorg",
        "dental clinic",
        "cosmetic dentistry",
        "dental care",
        "teeth whitening",
        "dental implants",
        "braces",
        "dental services",
    ],
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
        locale: "nl_BE",
        alternateLocale: "en_US",
        url: "https://dentalign.be",
        siteName: "Dentalign",
        title: "Dentalign - Moderne Tandkliniek & Mondzorg",
        description:
            "Dentalign biedt uitgebreide tandheelkundige zorg inclusief mondzorg, cosmetische tandheelkunde en algemene tandheelkundige behandelingen. Maak vandaag nog een afspraak voor een stralende, gezonde glimlach.",
        images: [
            {
                url: "/assets/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Dentalign Tandkliniek",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dentalign - Moderne Tandkliniek & Mondzorg",
        description:
            "Dentalign biedt uitgebreide tandheelkundige zorg inclusief mondzorg, cosmetische tandheelkunde en algemene tandheelkundige behandelingen.",
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl">
            <body className={`${figtree.className}`}>{children}</body>
        </html>
    );
}
