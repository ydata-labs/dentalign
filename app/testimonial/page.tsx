import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/testimonial/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Patiëntbeoordelingen",
    description:
        "Lees wat onze patiënten zeggen over hun ervaring bij Dentalign. Echte verhalen en beoordelingen van onze tevreden patiënten over onze tandheelkundige zorg.",
    keywords: [
        "patiëntbeoordelingen",
        "ervaringen",
        "tevreden patiënten",
        "tandheelkundige zorg",
        "verhalen",
        "beoordelingen",
        "testimonials",
        "patient reviews",
        "experiences",
        "satisfied patients",
        "dental care",
        "stories",
        "reviews"
    ],
    openGraph: {
        title: "Patiëntbeoordelingen - Dentalign Tandkliniek | Ervaringen",
        description:
            "Lees wat onze patiënten zeggen over hun ervaring bij Dentalign. Echte verhalen en beoordelingen van onze tevreden patiënten over onze tandheelkundige zorg.",
        url: "https://dentalign.be/testimonial",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/testimonial",
        languages: {
            "nl-BE": "https://dentalign.be/testimonial",
            "en-US": "https://dentalign.be/en/testimonial",
        },
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Our Testimonials"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Our Testimonials"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
