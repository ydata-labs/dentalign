import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Lees onze nieuwste artikelen over tandzorg, orthodontie en mondgezondheid. Deskundige inzichten en tips van onze tandheelkundige professionals.",
    keywords: [
        "blog",
        "tandheelkundige tips",
        "mondgezondheid",
        "orthodontie",
        "tandzorg",
        "artikelen",
        "deskundige inzichten",
        "dental tips",
        "oral health",
        "orthodontics",
        "dental care",
        "articles",
        "expert insights"
    ],
    openGraph: {
        title: "Blog - Dentalign Tandkliniek | Tandheelkundige Tips & Nieuws",
        description:
            "Lees onze nieuwste artikelen over tandzorg, orthodontie en mondgezondheid. Deskundige inzichten en tips van onze tandheelkundige professionals.",
        url: "https://dentalign.be/blog",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/blog",
        languages: {
            "nl-BE": "https://dentalign.be/blog",
            "en-US": "https://dentalign.be/en/blog",
        },
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Our Blog"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Our Blog"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
