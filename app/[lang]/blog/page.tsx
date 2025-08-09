import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
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
        title: `${dict.ourBlog} - Dentalign Dental Clinic`,
        description:
            "Read our latest articles about dental care, orthodontics, and oral health. Expert insights and tips from our dental professionals.",
        openGraph: {
            title: `${dict.ourBlog} - Dentalign Dental Clinic`,
            description:
                "Read our latest articles about dental care, orthodontics, and oral health. Expert insights and tips from our dental professionals.",
            url: `https://dentalign.be/${lang}/blog`,
        },
    };
}

export default async function Blog({
    params: { lang },
}: {
    params: { lang: ValidLocale };
}) {
    const dict = await getDictionary(lang);

    return (
        <Layout>
            <SectionHeader
                title={dict.ourBlog}
                isGroup={false}
                linkGroup=""
                pageGroup=""
                current={dict.ourBlog}
            />
            <Section1 />
            <Subscribe />
        </Layout>
    );
}
