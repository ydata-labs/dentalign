import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/service-details/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Subscribe from "@/components/sections/Subscribe";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tandheelkundige Diensten Maasmechelen | Dentalign",
    description:
        "Tandheelkundige diensten Maasmechelen ⭐ Orthodontie ✓ Invisalign ✓ Implantaten ✓ Cosmetische tandheelkunde ✓ Tanden bleken ✓ Spoedzorg ✓ Bel 0494 14 31 15",
    keywords: [
        "orthodontie maasmechelen",
        "invisalign maasmechelen",
        "tandimplantaten maasmechelen",
        "tanden bleken maasmechelen",
        "cosmetische tandheelkunde maasmechelen",
        "wortelkanaalbehandeling maasmechelen",
        "tandarts spoedzorg maasmechelen",
    ],
    openGraph: {
        title: "Tandheelkundige Diensten Maasmechelen | Dentalign",
        description:
            "Uitgebreide tandheelkundige diensten in Maasmechelen. Orthodontie, implantaten, cosmetische tandheelkunde en meer. Direct afspraak mogelijk.",
        url: "https://dentalign.be/service",
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Onze dienstdetails"
                    isGroup={true}
                    linkGroup="/service"
                    pageGroup="Onze diensten"
                    current="Onze dienstdetails"
                />
                <Section1 left={true} />
                <Section2 />
                <Subscribe />
            </Layout>
        </>
    );
}
