import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/team/Section1";
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
        title: `${dict.ourTeam} - Dentalign Dental Clinic`,
        description:
            "Meet our experienced team of dental professionals. Our skilled dentists and staff are committed to providing exceptional dental care and personalized treatment plans.",
        openGraph: {
            title: `${dict.ourTeam} - Dentalign Dental Clinic`,
            description:
                "Meet our experienced team of dental professionals. Our skilled dentists and staff are committed to providing exceptional dental care and personalized treatment plans.",
            url: `https://dentalign.be/${lang}/team`,
        },
    };
}

export default async function Team({
    params: { lang },
}: {
    params: { lang: ValidLocale };
}) {
    const dict = await getDictionary(lang);

    return (
        <Layout>
            <SectionHeader
                title={dict.ourTeam}
                isGroup={false}
                linkGroup=""
                pageGroup=""
                current={dict.ourTeam}
            />
            <Section1 />
            <Subscribe />
        </Layout>
    );
}
