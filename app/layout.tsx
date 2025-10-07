import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/plugins/all.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/barfiller.css";

import "/public/assets/css/style.css";
import "/public/assets/css/custom-polish.css";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://dentalign.be"),
    title: {
        default: "Dentalign Maasmechelen - Moderne Tandkliniek & Tandarts",
        template: "%s | Dentalign Tandkliniek Maasmechelen",
    },
    description:
        "Tandkliniek Dentalign in Maasmechelen ✓ Professionele tandheelkundige zorg ✓ Orthodontie ✓ Cosmetische tandheelkunde ✓ Implantaten ✓ Afspraak binnen 24u ✓ Spoeddienst beschikbaar",
    keywords: [
        "tandarts Maasmechelen",
        "tandkliniek Maasmechelen",
        "Dentalign",
        "tandheelkunde Limburg",
        "orthodontie Maasmechelen",
        "cosmetische tandheelkunde",
        "tandimplantaten België",
        "tanden bleken Maasmechelen",
        "invisalign Limburg",
        "spoedtandarts",
        "tandarts spoeddienst",
        "preventieve tandzorg",
        "wortelkanaalbehandeling",
        "kronen en bruggen",
        "tandverzorging",
    ],
    authors: [{ name: "Dentalign Tandkliniek" }],
    creator: "Dentalign",
    publisher: "Dentalign Tandkliniek Maasmechelen",
    category: "Healthcare",
    applicationName: "Dentalign",
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
        siteName: "Dentalign Tandkliniek Maasmechelen",
        title: "Dentalign - Professionele Tandarts in Maasmechelen",
        description:
            "Welkom bij Dentalign, uw vertrouwde tandkliniek in Maasmechelen. Moderne tandheelkundige zorg met 15+ jaar ervaring. Orthodontie, implantaten, cosmetische tandheelkunde en spoeddienst.",
        images: [
            {
                url: "/assets/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Dentalign Tandkliniek Maasmechelen - Moderne Tandheelkundige Zorg",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@dentalign",
        creator: "@dentalign",
        title: "Dentalign - Moderne Tandkliniek Maasmechelen",
        description:
            "Professionele tandheelkundige zorg in Maasmechelen. Orthodontie, implantaten, cosmetische tandheelkunde. Maak vandaag nog een afspraak!",
        images: ["/assets/img/og-image.jpg"],
    },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
        ? {
              google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
              yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
              other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
                  ? {
                        "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
                    }
                  : undefined,
          }
        : undefined,
    alternates: {
        canonical: "https://dentalign.be",
        languages: {
            "nl-BE": "https://dentalign.be",
            "en-US": "https://dentalign.be/en",
        },
    },
};

import StructuredData from "@/components/seo/StructuredData";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl" suppressHydrationWarning>
            <head>
                <StructuredData />
            </head>
            <body className={`${figtree.className}`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
