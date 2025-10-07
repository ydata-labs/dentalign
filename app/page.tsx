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
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tandarts Maasmechelen - Professionele Tandheelkundige Zorg",
    description:
        "Dentalign Maasmechelen ✓ Ervaren tandarts ✓ 15+ jaar expertise ✓ Orthodontie & Invisalign ✓ Cosmetische tandheelkunde ✓ Tandimplantaten ✓ Spoeddienst 24/7 ✓ Boek nu online",
    keywords: [
        "tandarts Maasmechelen",
        "tandkliniek Maasmechelen",
        "tandheelkunde Limburg",
        "orthodontie Maasmechelen",
        "invisalign Maasmechelen",
        "cosmetische tandarts",
        "tandimplantaten België",
        "tanden bleken Maasmechelen",
        "spoedtandarts Limburg",
        "preventieve tandzorg",
        "wortelkanaalbehandeling",
        "tandarts Lanaken",
        "tandarts Maaseik",
    ],
    openGraph: {
        title: "Dentalign Maasmechelen - Uw Vertrouwde Tandarts",
        description:
            "Professionele tandheelkundige zorg in Maasmechelen. 15+ jaar ervaring, moderne technieken, 24/7 spoeddienst. Orthodontie, implantaten, cosmetische tandheelkunde.",
        url: "https://dentalign.be",
        type: "website",
        locale: "nl_BE",
        images: [
            {
                url: "/assets/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Dentalign Tandkliniek Maasmechelen",
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
