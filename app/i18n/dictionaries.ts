import { ValidLocale } from "./settings";

const dictionaries = {
    nl: () => import("./locales/nl/common.json").then(module => module.default),
    en: () => import("./locales/en/common.json").then(module => module.default),
};

export const getDictionary = async (locale: ValidLocale) => {
    return dictionaries[locale]();
};
