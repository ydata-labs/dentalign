import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/plugins/all.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/barfiller.css";

import "/public/assets/css/style.css";
import "/public/assets/css/custom-polish.css";
import "/public/assets/css/announcement-modal.css";

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
        default: "Tandarts Maasmechelen - Moderne Tandartspraktijk",
        template: "%s | Tandartspraktijk Maasmechelen",
    },
    description:
        "Moderne tandartspraktijk in Maasmechelen ✓ Professionele tandheelkundige zorg ✓ Cosmetische tandheelkunde ✓ Implantaten ✓ Afspraak binnen 24u ✓ Spoeddienst beschikbaar",
    keywords: [
        "tandartspraktijk Maasmechelen",
        "moderne tandarts Limburg",
        "tandarts voor het hele gezin",
        "esthetische tandheelkunde Maasmechelen",
        "preventieve tandzorg",
        "tandarts nabij centrum Maasmechelen",
        "tandartspraktijk Maasmechelen",
        "cosmetische tandheelkunde",
        "tandimplantaten België",
        "tanden bleken Maasmechelen",
        "spoedtandarts",
        "tandarts spoeddienst",
        "wortelkanaalbehandeling",
        "kronen en bruggen",
    ],
    authors: [{ name: "Tandartspraktijk Maasmechelen" }],
    creator: "Tandartspraktijk Maasmechelen",
    publisher: "Tandartspraktijk Maasmechelen",
    category: "Healthcare",
    applicationName: "Tandartspraktijk Maasmechelen",
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
        url: "https://dentalign.be",
        siteName: "Tandartspraktijk Maasmechelen",
        title: "Professionele Tandarts in Maasmechelen",
        description:
            "Uw vertrouwde tandartspraktijk in Maasmechelen. Moderne tandheelkundige zorg met 15+ jaar ervaring. Implantaten, cosmetische tandheelkunde en spoeddienst.",
        images: [
            {
                url: "/assets/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Tandartspraktijk Maasmechelen - Moderne Tandheelkundige Zorg",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Moderne Tandartspraktijk Maasmechelen",
        description:
            "Professionele tandheelkundige zorg in Maasmechelen. Implantaten, cosmetische tandheelkunde. Maak vandaag nog een afspraak!",
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
