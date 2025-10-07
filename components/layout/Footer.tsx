"use client";
import {
    ADDRESS,
    EMAIL,
    FACEBOOK,
    INSTAGRAM,
    LINKEDIN,
    PHONE,
    TWITTER,
    WHATSAPP,
    YOUTUBE,
} from "@/util/config";
import Link from "next/link";
import RenderConditionally from "../elements/RenderConditonally";

export default function Footer() {
    return (
        <>
            {/*================= Footer section start =================*/}
            <section className="vl-footer vl-footer-margin-top-minus vl-off-white-bg pt-240">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-1">
                                <div className="vl-footer-logo">
                                    <Link href="/">
                                        <img
                                            src="assets/img/logo/logo.png"
                                            alt="logo"
                                            width={256}
                                            height={148}
                                        />
                                    </Link>
                                </div>
                                <div className="vl-footer-content">
                                    <p className="pt-24 pb-24 w-75">
                                        Wij zetten ons in voor het bieden van
                                        hoogwaardige, betrokken tandheelkundige
                                        zorg voor patiënten van alle leeftijden,
                                        van preventieve zorg tot behandelingen.
                                    </p>
                                </div>
                                <div className="vl-footer-social">
                                    <ul>
                                        <RenderConditionally
                                            condition={FACEBOOK}
                                        >
                                            <li>
                                                <Link href={FACEBOOK || ""}>
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </RenderConditionally>
                                        <RenderConditionally
                                            condition={LINKEDIN}
                                        >
                                            <Link href={LINKEDIN || ""}>
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
                                        </RenderConditionally>
                                        <RenderConditionally
                                            condition={INSTAGRAM}
                                        >
                                            <li>
                                                <Link href={INSTAGRAM || ""}>
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                        </RenderConditionally>
                                        <RenderConditionally
                                            condition={YOUTUBE}
                                        >
                                            <li>
                                                <Link href={YOUTUBE || ""}>
                                                    <i className="fa-brands fa-youtube" />
                                                </Link>
                                            </li>
                                        </RenderConditionally>
                                        <RenderConditionally
                                            condition={TWITTER}
                                        >
                                            <li>
                                                <Link href={TWITTER || ""}>
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                        </RenderConditionally>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-2">
                                <h3 className="vl-footer-widget-title mb-24">
                                    Snelle links
                                </h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/">Startpagina</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">Over ons</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                Afspraak
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/blog">
                                                News &amp; Blog
                                            </Link>
                                        </li> */}
                                        {/* <li>
                                            <Link href="/service">Service</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-3 ml-40">
                                <h3 className="vl-footer-widget-title mb-24">
                                    Onze diensten
                                </h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/service">
                                                Algemene tandheelkunde
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Cosmetische tandheelkunde
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Tanden bleken</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Implantaten</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Tandverzorging</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-4">
                                <h3 className="vl-footer-widget-title mb-24">
                                    Neem contact op
                                </h3>
                                {/* icon list */}
                                <div className="vl-footer-icon-list">
                                    <ul>
                                        <RenderConditionally condition={PHONE}>
                                            <li>
                                                <Link
                                                    href={`https://wa.me/${WHATSAPP}`}
                                                    target="_blank"
                                                >
                                                    <div>
                                                        <span>
                                                            <img
                                                                src="assets/img/icons/vl-footer-icon-1.1.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                        {PHONE}
                                                    </div>
                                                    <div className="text-muted">
                                                        alleen bericht /
                                                        whatsapp
                                                    </div>
                                                </Link>
                                            </li>
                                        </RenderConditionally>
                                        <RenderConditionally
                                            condition={ADDRESS}
                                        >
                                            <li>
                                                <Link href="/contact">
                                                    <span>
                                                        <img
                                                            src="assets/img/icons/vl-footer-icon-1.2.svg"
                                                            alt=""
                                                        />
                                                    </span>
                                                    {ADDRESS}
                                                </Link>
                                            </li>
                                        </RenderConditionally>
                                        <RenderConditionally condition={EMAIL}>
                                            <li>
                                                <Link href={`mailto:${EMAIL}`}>
                                                    <span>
                                                        <img
                                                            src="assets/img/icons/vl-footer-icon-1.3.svg"
                                                            alt=""
                                                        />
                                                    </span>
                                                    {EMAIL}
                                                </Link>
                                            </li>
                                        </RenderConditionally>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="vl-footer-copyright-text">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p className="para">
                                    © 2025 Dentalign, Inc. Alle rechten
                                    voorbehouden.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copy-right-menu">
                                    <ul>
                                        <li>
                                            <Link href="/contact">Privacybeleid </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                Algemene voorwaarden
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Footer section End =================*/}
        </>
    );
}
