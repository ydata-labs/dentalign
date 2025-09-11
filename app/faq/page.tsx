import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/faq/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veelgestelde Vragen",
    description:
        "Vind antwoorden op veelgestelde vragen over tandheelkundige behandelingen, afspraken, verzekering en meer. Krijg deskundige informatie over uw tandheelkundige zorg.",
    keywords: [
        "veelgestelde vragen",
        "FAQ",
        "tandheelkundige behandelingen",
        "afspraken",
        "verzekering",
        "tandzorg",
        "informatie",
        "frequently asked questions",
        "dental treatments",
        "appointments",
        "insurance",
        "dental care",
        "information"
    ],
    openGraph: {
        title: "Veelgestelde Vragen - Dentalign Tandkliniek | FAQ",
        description:
            "Vind antwoorden op veelgestelde vragen over tandheelkundige behandelingen, afspraken, verzekering en meer. Krijg deskundige informatie over uw tandheelkundige zorg.",
        url: "https://dentalign.be/faq",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/faq",
        languages: {
            "nl-BE": "https://dentalign.be/faq",
            "en-US": "https://dentalign.be/en/faq",
        },
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="FAQ’s"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="FAQ’s"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
