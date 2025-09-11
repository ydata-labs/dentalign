import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/team/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ons Team",
    description:
        "Maak kennis met ons ervaren team van tandheelkundige professionals. Onze deskundige tandartsen en medewerkers zijn toegewijd aan het bieden van uitzonderlijke tandheelkundige zorg en persoonlijke behandelplannen.",
    keywords: [
        "ons team",
        "tandartsen",
        "tandheelkundige professionals",
        "ervaren team",
        "deskundige zorg",
        "persoonlijke behandeling",
        "our team",
        "dentists",
        "dental professionals",
        "experienced team",
        "expert care",
        "personal treatment",
    ],
    openGraph: {
        title: "Ons Team - Dentalign Tandkliniek | Ervaren Tandartsen",
        description:
            "Maak kennis met ons ervaren team van tandheelkundige professionals. Onze deskundige tandartsen en medewerkers zijn toegewijd aan het bieden van uitzonderlijke tandheelkundige zorg en persoonlijke behandelplannen.",
        url: "https://dentalign.be/team",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/team",
        languages: {
            "nl-BE": "https://dentalign.be/team",
            "en-US": "https://dentalign.be/en/team",
        },
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Our Team"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Our Team"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
