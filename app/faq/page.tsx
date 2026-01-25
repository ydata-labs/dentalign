import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/faq/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import FAQSchema from "@/components/seo/FAQSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veelgestelde Vragen | Tandarts Maasmechelen",
    description:
        "FAQ Tandarts Maasmechelen ⭐ Antwoorden op vragen over behandelingen, afspraken, implantaten en spoedzorg ✓ Tandartspraktijk Maasmechelen ✓ Bel 0494 14 31 15",
    keywords: [
        "tandarts maasmechelen faq",
        "vragen tandarts",
        "tandimplantaten vragen",
        "tandarts spoedzorg",
        "kosten tandarts",
        "afspraak maken tandarts",
        "tandarts angst",
    ],
    openGraph: {
        title: "Veelgestelde Vragen - Tandartspraktijk Maasmechelen | FAQ",
        description:
            "Vind antwoorden op veelgestelde vragen over tandheelkundige behandelingen, afspraken, verzekering en meer. Krijg deskundige informatie over uw tandheelkundige zorg.",
        url: "https://dentalijn.be/faq",
        locale: "nl_BE",
    },
    alternates: {
        canonical: "https://dentalijn.be/faq",
        languages: {
            "nl-BE": "https://dentalijn.be/faq",
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
