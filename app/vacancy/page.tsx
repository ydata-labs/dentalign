import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/vacancy/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vacatures | Tandarts Maasmechelen - Werken bij Tandartspraktijk Maasmechelen",
    description:
        "Werken bij Tandartspraktijk Maasmechelen. Vacatures voor tandarts, tandartsassistent en mondhygiënist. Moderne praktijk met nieuwste technologieën.",
    keywords: [
        "vacature tandarts maasmechelen",
        "tandartsassistent vacature",
        "mondhygiënist vacature",
        "werken tandartspraktijk maasmechelen",
        "tandarts baan limburg",
        "vacature tandheelkunde België",
    ],
    openGraph: {
        title: "Vacatures - Tandartspraktijk Maasmechelen | Werken bij ons",
        description:
            "Word onderdeel van ons team bij Tandartspraktijk Maasmechelen. Wij zoeken tandartsen, tandartsassistenten en mondhygiënisten voor onze moderne praktijk in Maasmechelen.",
        url: "https://dentalijn.be/vacancy",
        locale: "nl_BE",
    },
    alternates: {
        canonical: "https://dentalijn.be/vacancy",
        languages: {
            "nl-BE": "https://dentalijn.be/vacancy",
        },
    },
};

export default function Vacancy() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Vacatures"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Vacatures"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
