import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/testimonial/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
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
