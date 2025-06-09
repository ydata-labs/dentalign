import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Dentalign Dental Clinic",
    description:
        "Read our latest articles about dental care, orthodontics, and oral health. Expert insights and tips from our dental professionals.",
    openGraph: {
        title: "Blog - Dentalign Dental Clinic",
        description:
            "Read our latest articles about dental care, orthodontics, and oral health. Expert insights and tips from our dental professionals.",
        url: "https://dentalign.be/blog",
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Our Blog"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Our Blog"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
