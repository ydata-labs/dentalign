import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/faq/Section1";
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
        title: `${dict.faq} - Dentalign Dental Clinic`,
        description:
            "Find answers to common questions about dental procedures, appointments, insurance, and more. Get expert information about your dental care concerns.",
        openGraph: {
            title: `${dict.faq} - Dentalign Dental Clinic`,
            description:
                "Find answers to common questions about dental procedures, appointments, insurance, and more. Get expert information about your dental care concerns.",
            url: `https://dentalign.be/${lang}/faq`,
        },
    };
}

export default async function FAQ({
    params: { lang },
}: {
    params: { lang: ValidLocale };
}) {
    const dict = await getDictionary(lang);

    return (
        <Layout>
            <SectionHeader
                title={dict.faq}
                isGroup={false}
                linkGroup=""
                pageGroup=""
                current={dict.faq}
            />
            <Section1 />
            <Subscribe />
        </Layout>
    );
}
