import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/404/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="404 Error"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="404 Error"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
