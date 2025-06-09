import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/team/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team - Dentalign Dental Clinic",
    description:
        "Meet our experienced team of dental professionals. Our skilled dentists and staff are committed to providing exceptional dental care and personalized treatment plans.",
    openGraph: {
        title: "Our Team - Dentalign Dental Clinic",
        description:
            "Meet our experienced team of dental professionals. Our skilled dentists and staff are committed to providing exceptional dental care and personalized treatment plans.",
        url: "https://dentalign.be/team",
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
