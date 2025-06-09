import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/testimonial/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Patient Testimonials - Dentalign Dental Clinic",
    description:
        "Read what our patients say about their experience at Dentalign. Real stories and reviews from our satisfied patients about our dental care services.",
    openGraph: {
        title: "Patient Testimonials - Dentalign Dental Clinic",
        description:
            "Read what our patients say about their experience at Dentalign. Real stories and reviews from our satisfied patients about our dental care services.",
        url: "https://dentalign.be/testimonial",
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Our Testimonials"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Our Testimonials"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
