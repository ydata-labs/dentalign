import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2Home1 from "@/components/sections/AboutUs";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import Section6Home1 from "@/components/sections/Testimonial";
import Section4 from "@/components/sections/about/Section4";
import Subscribe from "@/components/sections/Subscribe";
import Team from "@/components/sections/Team";
export default function About() {
    return (
        <>
            <Layout>
                <SectionHeader
                    title="Over ons"
                    current="Over ons"
                    isGroup={false}
                    linkGroup=""
                    pageGroup=""
                />
                <Section2Home1 />
                <Section1 background="vl-off-white-bg" />
                <Section2 />
                {/* <Section6Home1 /> */}
                {/* <Section4 /> */}
                {/* <Team text_2="text-2" /> */}
                <Subscribe />
            </Layout>
        </>
    );
}
