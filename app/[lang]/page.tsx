import Layout from "@/components/layout/Layout";
import AboutUs from "@/components/sections/AboutUs";
import Banner from "@/components/sections/Banner";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonial from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";
import Subscribe from "@/components/sections/Subscribe";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";

export default function Home() {
    return (
        <>
            <Layout>
                <Banner />
                <AboutUs />
                <Services />
                <Work />
                <BeforeAfter />
                {/* <Testimonial /> */}
                <Contact />
                {/* <Blog /> */}
                {/* <Subscribe /> */}
            </Layout>
        </>
    );
}
