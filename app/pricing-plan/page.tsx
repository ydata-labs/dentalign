import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/pricing-plan/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import Section2 from "@/components/sections/pricing-plan/Section2";
import Section3 from "@/components/sections/about/Section1";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prijzen & Tarieven",
    description:
        "Ontdek onze transparante prijzen en tarieven voor tandheelkundige behandelingen. Bekijk onze betaalbare pakketten voor cosmetische tandheelkunde en preventieve zorg.",
    keywords: [
        "prijzen tandarts maasmechelen",
        "tarieven tandarts",
        "tandheelkundige behandelingen kosten",
        "cosmetische tandheelkunde prijzen",
        "preventieve zorg",
        "betaalbare tandarts",
        "transparante prijzen",
    ],
    openGraph: {
        title: "Prijzen & Tarieven - Tandartspraktijk Maasmechelen | Transparante Prijzen",
        description:
            "Ontdek onze transparante prijzen en tarieven voor tandheelkundige behandelingen. Bekijk onze betaalbare pakketten voor cosmetische tandheelkunde en preventieve zorg.",
        url: "https://dentalijn.be/pricing-plan",
        locale: "nl_BE",
    },
    alternates: {
        canonical: "https://dentalijn.be/pricing-plan",
        languages: {
            "nl-BE": "https://dentalijn.be/pricing-plan",
        },
    },
};
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Prijzen & Tarieven"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Prijzen & Tarieven"
                />
                <Section1 />
                <Section2 />
                <Section3 background="vl-white-bg" />
                <Subscribe />
            </Layout>
        </>
    );
}
