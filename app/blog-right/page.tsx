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
    title: "Blog Artikel",
    description:
        "Lees gedetailleerde artikelen over tandheelkundige behandelingen en mondgezondheid. Deskundige inzichten van onze tandartsen.",
    keywords: [
        "tandheelkundige artikelen",
        "behandelingen",
        "mondgezondheid",
        "deskundige inzichten",
        "tandartsen",
    ],
    openGraph: {
        title: "Blog Artikel - Tandartspraktijk Maasmechelen | Tandheelkundige Artikelen",
        description:
            "Lees gedetailleerde artikelen over tandheelkundige behandelingen en mondgezondheid. Deskundige inzichten van onze tandartsen.",
        url: "https://dentalign.be/blog-right",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/blog-right",
        languages: {
            "nl-BE": "https://dentalign.be/blog-right",
            "en-US": "https://dentalign.be/en/blog-right",
        },
    },
};
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Blog Artikel"
                    isGroup={true}
                    linkGroup="/blog"
                    pageGroup="Onze Blog"
                    current="Blog Artikel"
                />
                <Section1 left={false} />
                <Section2 />
                <Subscribe />
            </Layout>
        </>
    );
}
