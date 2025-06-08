import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/service-details/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Subscribe from "@/components/sections/Subscribe";
import SectionHeader from "@/components/layout/SectionHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Our Service Details"
                    isGroup={true}
                    linkGroup="/service"
                    pageGroup="Our Service"
                    current="Our Service Details"
                />
                <Section1 left={true} />
                <Section2 />
                <Subscribe />
            </Layout>
        </>
    );
}
