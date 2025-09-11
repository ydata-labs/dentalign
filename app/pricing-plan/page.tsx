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
        "Ontdek onze transparante prijzen en tarieven voor tandheelkundige behandelingen. Bekijk onze betaalbare pakketten voor orthodontie, cosmetische tandheelkunde en preventieve zorg.",
    keywords: [
        "prijzen",
        "tarieven",
        "tandheelkundige behandelingen",
        "orthodontie",
        "cosmetische tandheelkunde",
        "preventieve zorg",
        "betaalbare pakketten",
        "transparante prijzen",
        "pricing",
        "rates",
        "dental treatments",
        "orthodontics",
        "cosmetic dentistry",
        "preventive care",
        "affordable packages",
        "transparent pricing"
    ],
    openGraph: {
        title: "Prijzen & Tarieven - Dentalign Tandkliniek | Transparante Prijzen",
        description:
            "Ontdek onze transparante prijzen en tarieven voor tandheelkundige behandelingen. Bekijk onze betaalbare pakketten voor orthodontie, cosmetische tandheelkunde en preventieve zorg.",
        url: "https://dentalign.be/pricing-plan",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/pricing-plan",
        languages: {
            "nl-BE": "https://dentalign.be/pricing-plan",
            "en-US": "https://dentalign.be/en/pricing-plan",
        },
    },
};
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Pricing Plan"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Pricing Plan"
                />
                <Section1 />
                <Section2 />
                <Section3 background="vl-white-bg" />
                <Subscribe />
            </Layout>
        </>
    );
}
