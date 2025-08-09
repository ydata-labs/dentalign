import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/service-details/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Subscribe from "@/components/sections/Subscribe";
import SectionHeader from "@/components/layout/SectionHeader";
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
        title: `${dict.ourServices} - Dentalign Dental Clinic`,
        description:
            "Explore our comprehensive dental services including orthodontics, cosmetic dentistry, dental implants, and preventive care. Expert dental solutions for your perfect smile.",
        openGraph: {
            title: `${dict.ourServices} - Dentalign Dental Clinic`,
            description:
                "Explore our comprehensive dental services including orthodontics, cosmetic dentistry, dental implants, and preventive care. Expert dental solutions for your perfect smile.",
            url: `https://dentalign.be/${lang}/service`,
        },
    };
}

export default async function Service({
    params: { lang },
}: {
    params: { lang: ValidLocale };
}) {
    const dict = await getDictionary(lang);

    return (
        <Layout>
            <SectionHeader
                title={dict.ourServices}
                isGroup={true}
                linkGroup={`/${lang}/service`}
                pageGroup={dict.ourServices}
                current={dict.ourServices}
            />
            <Section1 left={true} />
            <Section2 />
            <Subscribe />
        </Layout>
    );
}
