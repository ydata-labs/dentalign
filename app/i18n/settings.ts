export const defaultLocale = "nl";
export const locales = ["nl", "en"] as const;
export type ValidLocale = (typeof locales)[number];

export const localeNames: Record<ValidLocale, string> = {
    nl: "Nederlands",
    en: "English",
};

export const defaultNS = "common";
export const cookieName = "i18next";

export function getOptions(lng = defaultLocale, ns = defaultNS) {
    return {
        supportedLngs: locales,
        fallbackLng: defaultLocale,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}
