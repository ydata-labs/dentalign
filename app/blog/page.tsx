import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Lees onze nieuwste artikelen over tandzorg en mondgezondheid. Deskundige inzichten en tips van onze tandheelkundige professionals.",
    robots: {
        index: false,
        follow: true,
    },
    keywords: [
        "tandheelkundige blog",
        "tandheelkundige tips",
        "mondgezondheid",
        "tandzorg",
        "tandarts artikelen",
        "deskundige inzichten",
    ],
    openGraph: {
        title: "Blog - Tandartspraktijk Maasmechelen | Tandheelkundige Tips & Nieuws",
        description:
            "Lees onze nieuwste artikelen over tandzorg en mondgezondheid. Deskundige inzichten en tips van onze tandheelkundige professionals.",
        url: "https://dentalign.be/blog",
        locale: "nl_BE",
    },
    alternates: {
        canonical: "https://dentalign.be/blog",
        languages: {
            "nl-BE": "https://dentalign.be/blog",
        },
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Onze Blog"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Onze Blog"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
