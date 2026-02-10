import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/testimonial/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Patiëntbeoordelingen",
    description:
        "Lees wat onze patiënten zeggen over hun ervaring bij Tandartspraktijk Maasmechelen. Echte verhalen en beoordelingen van onze tevreden patiënten over onze tandheelkundige zorg.",
    keywords: [
        "patiëntbeoordelingen",
        "ervaringen tandarts",
        "tevreden patiënten",
        "tandheelkundige zorg",
        "beoordelingen tandarts maasmechelen",
    ],
    openGraph: {
        title: "Patiëntbeoordelingen - Tandartspraktijk Maasmechelen | Ervaringen",
        description:
            "Lees wat onze patiënten zeggen over hun ervaring bij Tandartspraktijk Maasmechelen. Echte verhalen en beoordelingen van onze tevreden patiënten over onze tandheelkundige zorg.",
        url: "https://dentalijn.be/testimonial",
        locale: "nl_BE",
    },
    alternates: {
        canonical: "https://dentalijn.be/testimonial",
        languages: {
            "nl-BE": "https://dentalijn.be/testimonial",
        },
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Beoordelingen"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Beoordelingen"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
