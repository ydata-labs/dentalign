import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog-details/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import Section2 from "@/components/sections/blog-details/Section2";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: true,
    },
    title: "Blog Details",
    description:
        "Lees gedetailleerde artikelen over tandheelkundige behandelingen en mondgezondheid. Deskundige inzichten van onze tandartsen.",
    keywords: [
        "blog details",
        "tandheelkundige artikelen",
        "behandelingen",
        "mondgezondheid",
        "deskundige inzichten",
        "tandartsen",
        "dental articles",
        "treatments",
        "oral health",
        "expert insights",
        "dentists",
    ],
    openGraph: {
        title: "Blog Details - Dentalign Tandkliniek | Tandheelkundige Artikelen",
        description:
            "Lees gedetailleerde artikelen over tandheelkundige behandelingen en mondgezondheid. Deskundige inzichten van onze tandartsen.",
        url: "https://dentalign.be/blog-left",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/blog-left",
        languages: {
            "nl-BE": "https://dentalign.be/blog-left",
            "en-US": "https://dentalign.be/en/blog-left",
        },
    },
};
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Our Blog Details"
                    isGroup={true}
                    linkGroup="/blog"
                    pageGroup="Our Blog"
                    current="Our Blog Details"
                />
                <Section1 left={true} />
                <Section2 />
                <Subscribe />
            </Layout>
        </>
    );
}
