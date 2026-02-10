import AnnouncementModal from "@/components/elements/AnnouncementModal";
import Layout from "@/components/layout/Layout";
import AboutUs from "@/components/sections/AboutUs";
import Banner from "@/components/sections/Banner";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tandarts Maasmechelen | Moderne Tandartspraktijk - Direct Afspraak Mogelijk",
    description:
        "Tandarts Maasmechelen ⭐ Moderne Tandartspraktijk ✓ Ook spoedzorg ✓ Ervaren tandartsen ✓ Moderne kliniek ✓ Implantaten ✓ Direct afspraak ✓ Bel 0494 14 31 15",
    keywords: [
        "tandartspraktijk Maasmechelen",
        "moderne tandarts Limburg",
        "tandarts voor het hele gezin",
        "esthetische tandheelkunde Maasmechelen",
        "preventieve tandzorg",
        "tandarts nabij centrum Maasmechelen",
        "tandartspraktijk Maasmechelen",
        "tandimplantaten Maasmechelen",
        "tanden bleken Maasmechelen",
        "spoedtandarts Limburg",
        "cosmetische tandheelkunde",
        "tandarts Lanaken",
        "tandarts Maaseik",
    ],
    openGraph: {
        title: "Tandarts Maasmechelen | Moderne Tandartspraktijk - Direct Afspraak",
        description:
            "Uw vertrouwde tandarts in Maasmechelen. Direct afspraak mogelijk. Ook spoedzorg. Ervaren team, moderne kliniek. Implantaten, cosmetische tandheelkunde.",
        url: "https://dentalijn.be",
        type: "website",
        locale: "nl_BE",
        images: [
            {
                url: "/assets/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Tandarts Maasmechelen - Moderne Tandartspraktijk",
            },
        ],
    },
    alternates: {
        canonical: "https://dentalijn.be",
        languages: {
            "nl-BE": "https://dentalijn.be",
        },
    },
};

export default function Home() {
    return (
        <>
            <AnnouncementModal />

            <Layout>
                <Banner />
                <AboutUs />
                <Services />
                <Work />
                <BeforeAfter />
                {/* <Testimonial /> */}
                <Contact />
                {/* <Blog /> */}
                {/* <Subscribe /> */}
            </Layout>
        </>
    );
}
