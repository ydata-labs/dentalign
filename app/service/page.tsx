import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/service-details/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Subscribe from "@/components/sections/Subscribe";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Onze diensten - Dentalign Tandkliniek",
    description:
        "Ontdek ons uitgebreide aanbod: orthodontie, cosmetische tandheelkunde, implantaten en preventieve zorg. Deskundige oplossingen voor uw perfecte glimlach.",
    openGraph: {
        title: "Onze diensten - Dentalign Tandkliniek",
        description:
            "Ontdek ons uitgebreide aanbod: orthodontie, cosmetische tandheelkunde, implantaten en preventieve zorg. Deskundige oplossingen voor uw perfecte glimlach.",
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
