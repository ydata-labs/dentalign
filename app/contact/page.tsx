import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/contact/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact & Afspraak Maken | Tandarts Maasmechelen",
    description:
        "Afspraak maken bij tandarts Maasmechelen ⭐ Dentalign Tandkliniek ✓ Dokter Haubenlaan 17 ✓ Ook spoedzorg ✓ Direct afspraak ✓ Bel 0494 14 31 15",
    keywords: [
        "afspraak maken tandarts maasmechelen",
        "tandarts spoedzorg maasmechelen",
        "contact tandarts maasmechelen",
        "tandkliniek maasmechelen adres",
        "tandarts dokter haubenlaan",
        "tandarts rijksweg maasmechelen",
        "emergency dentist maasmechelen",
    ],
    openGraph: {
        title: "Contact - Dentalign Tandkliniek | Maak een Afspraak",
        description:
            "Neem contact op met Dentalign tandkliniek. Plan uw afspraak, stel vragen of ontdek onze locatie. Onze vriendelijke medewerkers helpen u graag verder.",
        url: "https://dentalign.be/contact",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/contact",
        languages: {
            "nl-BE": "https://dentalign.be/contact",
            "en-US": "https://dentalign.be/en/contact",
        },
    },
};
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Neem contact op"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Neem contact op"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
