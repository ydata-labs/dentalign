import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./app/i18n/settings";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest) {
    let headers = { "accept-language": "en,nl;q=0.5" };
    let languages = new Negotiator({ headers }).languages();
    let locales = ["en", "nl"];
    let defaultLocale = "nl";

    match(languages, locales, defaultLocale);
}
const PUBLIC_FILE = /\.(.*)$/;
export function middleware(request: NextRequest) {
    if (
        request.nextUrl.pathname.startsWith("/_next") ||
        request.nextUrl.pathname.includes("/api/") ||
        PUBLIC_FILE.test(request.nextUrl.pathname)
    ) {
        return;
    }

    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(
        locale =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|api|favicon.ico).*)",
    ],
};
