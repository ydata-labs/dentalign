import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/pricing-plan/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import Section2 from "@/components/sections/pricing-plan/Section2";
import Section3 from "@/components/sections/about/Section1";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Pricing Plan"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                    current="Pricing Plan"
                />
                <Section1 />
                <Section2 />
                <Section3 background="vl-white-bg" />
                <Subscribe />
            </Layout>
        </>
    );
}
