"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames } from "@/app/i18n/settings";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (locale: string) => {
        const currentPath = pathname;
        const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${locale}`);
        router.push(newPath);
    };

    return (
        <div className="language-switcher">
            <select
                onChange={e => handleLanguageChange(e.target.value)}
                value={pathname.split("/")[1]}
                className="form-select"
                aria-label="Select language"
            >
                {locales.map(locale => (
                    <option key={locale} value={locale}>
                        {localeNames[locale]}
                    </option>
                ))}
            </select>
        </div>
    );
}
