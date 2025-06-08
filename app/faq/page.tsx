import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/faq/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
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
