import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/faq/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import FAQSchema from "@/components/seo/FAQSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veelgestelde Vragen | Tandarts Maasmechelen",
    description:
        "FAQ Tandarts Maasmechelen ⭐ Antwoorden op vragen over behandelingen, afspraken, implantaten, Invisalign en spoedzorg ✓ Dentalign ✓ Bel 0494 14 31 15",
    keywords: [
        "tandarts maasmechelen faq",
        "vragen tandarts",
        "tandimplantaten vragen",
        "invisalign vragen",
        "tandarts spoedzorg",
        "kosten tandarts",
        "afspraak maken tandarts",
        "tandarts angst",
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
            <FAQSchema />
            <Layout>
                <SectionHeader
                    title="FAQ's"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="FAQ's"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
