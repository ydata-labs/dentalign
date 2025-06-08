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
    title: "Dentalign - Modern Dental Clinic & Orthodontic Care",
    description:
        "Dentalign offers comprehensive dental care services including orthodontics, cosmetic dentistry, and general dental treatments. Book your appointment today for a brighter, healthier smile.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${figtree.className}`}>{children}</body>
        </html>
    );
}
