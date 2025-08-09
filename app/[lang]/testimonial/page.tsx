import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/testimonial/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Subscribe from "@/components/sections/Subscribe";
import { getDictionary } from "../../i18n/dictionaries";
import { ValidLocale } from "../../i18n/settings";
import type { Metadata } from "next";

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: ValidLocale };
}): Promise<Metadata> {
    const dict = await getDictionary(lang);
    return {
        title: `${dict.testimonials} - Dentalign Dental Clinic`,
        description:
            "Read what our patients say about their experience at Dentalign. Real stories and reviews from our satisfied patients about our dental care services.",
        openGraph: {
            title: `${dict.testimonials} - Dentalign Dental Clinic`,
            description:
                "Read what our patients say about their experience at Dentalign. Real stories and reviews from our satisfied patients about our dental care services.",
            url: `https://dentalign.be/${lang}/testimonial`,
        },
    };
}

export default async function Testimonial({
    params: { lang },
}: {
    params: { lang: ValidLocale };
}) {
    const dict = await getDictionary(lang);

    return (
        <Layout>
            <SectionHeader
                title={dict.testimonials}
                isGroup={false}
                linkGroup=""
                pageGroup=""
                current={dict.testimonials}
            />
            <Section1 />
            <Subscribe />
        </Layout>
    );
}
