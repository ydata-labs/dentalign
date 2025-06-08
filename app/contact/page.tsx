import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/contact/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Contact Us"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Contact Us"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
