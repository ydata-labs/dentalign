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
    title: "Home",
    description:
        "Welkom bij Dentalign, uw vertrouwde tandkliniek voor professionele tandheelkundige zorg. Ontdek onze diensten: orthodontie, cosmetische tandheelkunde, implantaten en preventieve zorg.",
    keywords: [
        "tandkliniek",
        "orthodontie",
        "cosmetische tandheelkunde",
        "tandimplantaten",
        "preventieve zorg",
        "dental clinic",
        "orthodontics",
        "cosmetic dentistry",
        "dental implants",
        "preventive care",
    ],
    openGraph: {
        title: "Dentalign - Moderne Tandkliniek & Mondzorg | Home",
        description:
            "Welkom bij Dentalign, uw vertrouwde tandkliniek voor professionele tandheelkundige zorg. Ontdek onze diensten: orthodontie, cosmetische tandheelkunde, implantaten en preventieve zorg.",
        url: "https://dentalign.be",
        locale: "nl_BE",
        alternateLocale: "en_US",
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
