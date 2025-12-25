import Layout from "@/components/layout/Layout";
import AboutUs from "@/components/sections/AboutUs";
import Banner from "@/components/sections/Banner";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonial from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";
import Subscribe from "@/components/sections/Subscribe";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import ChristmasModal from "@/components/elements/ChristmasModal";
import type { Metadata } from "next";
import AnnouncementModal from "@/components/elements/AnnouncementModal";

export const metadata: Metadata = {
    title: "Tandarts Maasmechelen | Dentalign - Direct Afspraak Mogelijk",
    description:
        "Tandarts Maasmechelen ⭐ Dentalign Tandkliniek ✓ Ook spoedzorg ✓ Ervaren tandartsen ✓ Moderne kliniek ✓ Implantaten ✓ Direct afspraak ✓ Bel 0494 14 31 15",
    keywords: [
        "tandarts Maasmechelen",
        "tandartspraktijk Maasmechelen",
        "tandartsenpraktijk Maasmechelen",
        "tandartsen Maasmechelen",
        "dental Maasmechelen",
        "dentist Maasmechelen",
        "tandkliniek Maasmechelen",
        "tandimplantaten Maasmechelen",
        "tanden bleken Maasmechelen",
        "tandarts spoeddienst Maasmechelen",
        "tandarts angst",
        "tandarts in de buurt",
        "parodontoloog Maasmechelen",
        "tandarts Lanaken",
        "tandarts Maaseik",
        "tandarts Genk",
    ],
    openGraph: {
        title: "Tandarts Maasmechelen | Dentalign Tandkliniek - Direct Afspraak",
        description:
            "Uw vertrouwde tandarts in Maasmechelen. Direct afspraak mogelijk. Ook spoedzorg. Ervaren team, moderne kliniek. Implantaten, cosmetische tandheelkunde.",
        url: "https://dentalign.be",
        type: "website",
        locale: "nl_BE",
        images: [
            {
                url: "/assets/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Dentalign - Tandarts Maasmechelen",
            },
        ],
    },
    alternates: {
        canonical: "https://dentalign.be",
        languages: {
            "nl-BE": "https://dentalign.be",
            "en-US": "https://dentalign.be/en",
        },
    },
};

export default function Home() {
    return (
        <>
            <ChristmasModal />
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
