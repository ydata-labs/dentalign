import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/faq/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions - Dentalign Dental Clinic",
    description:
        "Find answers to common questions about dental procedures, appointments, insurance, and more. Get expert information about your dental care concerns.",
    openGraph: {
        title: "Frequently Asked Questions - Dentalign Dental Clinic",
        description:
            "Find answers to common questions about dental procedures, appointments, insurance, and more. Get expert information about your dental care concerns.",
        url: "https://dentalign.be/faq",
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="FAQ’s"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="FAQ’s"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
