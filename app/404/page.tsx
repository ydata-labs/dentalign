import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/404/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pagina Niet Gevonden",
    description:
        "De pagina die u zoekt kon niet worden gevonden. Ga terug naar de homepage of neem contact met ons op voor hulp.",
    keywords: [
        "pagina niet gevonden",
        "tandartspraktijk maasmechelen",
        "homepage",
        "contact",
        "hulp",
    ],
    openGraph: {
        title: "Pagina Niet Gevonden - Tandartspraktijk Maasmechelen | 404 Error",
        description:
            "De pagina die u zoekt kon niet worden gevonden. Ga terug naar de homepage of neem contact met ons op voor hulp.",
        url: "https://dentalign.be/404",
        locale: "nl_BE",
        alternateLocale: "en_US",
    },
    alternates: {
        canonical: "https://dentalign.be/404",
        languages: {
            "nl-BE": "https://dentalign.be/404",
            "en-US": "https://dentalign.be/en/404",
        },
    },
};
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Pagina Niet Gevonden"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Pagina Niet Gevonden"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
