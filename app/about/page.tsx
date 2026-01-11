import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section2Home1 from "@/components/sections/AboutUs";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Over Tandartspraktijk Maasmechelen | Uw Tandarts in Maasmechelen",
    description:
        "Tandartspraktijk Maasmechelen ⭐ Ervaren tandartsen ✓ Moderne kliniek ✓ Patiëntgericht ✓ 15+ jaar expertise ✓ Ook voor tandarts angst ✓ Bel 0494 14 31 15",
    keywords: [
        "tandartspraktijk maasmechelen",
        "tandartsenpraktijk maasmechelen",
        "ervaren tandartsen maasmechelen",
        "tandarts angst",
        "parodontoloog maasmechelen",
        "tandarts zonder patientenstop",
        "dental maasmechelen",
    ],
    openGraph: {
        title: "Over Ons - Tandartspraktijk Maasmechelen | Onze Missie & Visie",
        description:
            "Leer meer over Tandartspraktijk Maasmechelen. Onze ervaren tandartsen en moderne faciliteiten bieden u de beste tandheelkundige zorg. Ontdek onze missie voor uw gezonde glimlach.",
        url: "https://dentalign.be/about",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/about",
        languages: {
            "nl-BE": "https://dentalign.be/about",
            "en-US": "https://dentalign.be/en/about",
        },
    },
};
export default function About() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Over ons"
                    current="Over ons"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                />
                <Section2Home1 />
                <Section1 background="vl-off-white-bg" />
                <Section2 />
                {/* <Section6Home1 /> */}
                {/* <Section4 /> */}
                {/* <Team text_2="text-2" /> */}
                <Subscribe />
            </Layout>
        </>
    );
}
