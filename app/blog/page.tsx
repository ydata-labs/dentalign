import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
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
