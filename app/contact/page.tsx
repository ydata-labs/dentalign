import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/contact/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Neem contact op"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Neem contact op"
                />
                <Section1 />
                <Subscribe />
            </Layout>
        </>
    );
}
