"use client";
import Link from "next/link";
import { useState } from "react";
// import "@/node_modules/react-modal-video/css/modal-video.css";
// import ModalVideo from "react-modal-video";

export default function Section1({ left, single }: { left?: boolean; single?: boolean }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= Service Details section start =================*/}
            <section className="vl-service-details-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div
                            className={`col-lg-4 mb-30 ${
                                left ? "" : "order-2"
                            } ${single ? "d-none" : ""}`}
                        >
                            <div className="vl-sidebar">
                                {/* search widget */}
                                <div className="vl-widegt-1 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Zoeken</h4>
                                    <div className="vl-searh-form-wid">
                                        <form action="#">
                                            <input
                                                type="text"
                                                placeholder="Zoeken..."
                                            />
                                            <span>
                                                <i className="fa-regular fa-magnifying-glass" />
                                            </span>
                                        </form>
                                    </div>
                                </div>
                                {/* service widget */}
                                <div className="vl-widegt-2 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">
                                        Onze diensten
                                    </h4>
                                    <div className="vl-service-list">
                                        <ul>
                                            <li>
                                                <Link href="/service">
                                                    Parodontale therapie
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    Kindertandheelkunde
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    Wittere glimlach
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    Tandheelkundige spoedzorg
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* phone widget */}
                                <div className="vl-widegt-3 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">
                                        Hulp nodig? <br /> Neem contact met ons
                                        op
                                    </h4>
                                    <Link
                                        href="tel:+1234567890"
                                        className="phone"
                                    >
                                        <span>
                                            <i className="fa-light fa-phone" />
                                        </span>
                                        +123 456 7890
                                    </Link>
                                </div>
                                {/* social widget */}
                                <div className="vl-widegt-4 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Volg ons</h4>
                                    <div className="vl-sidebar-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-x-twitter" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-instagram" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`col-lg-8 mb-30 ${
                                left ? "" : "order-1"
                            } ${single ? "mx-auto" : ""}`}
                        >
                            <div
                                className={`vl-sidebar-details ${
                                    left ? "ml-80" : "mr-80"
                                } ${single ? "me-0" : ""}`}
                            >
                                {/* thumb */}
                                <div className="vl-thumb-larg mb-32">
                                    <img
                                        className="br-8 w-100"
                                        src="assets/img/service/vl-service-learg-thumb-1.1.png"
                                        alt=""
                                    />
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten1t mb-32">
                                    <h3 className="title">
                                        Wortelkanaalbehandeling
                                    </h3>
                                    <p className="para pt-16">
                                        We bieden een uitgebreid aanbod aan
                                        tandheelkundige diensten om aan de
                                        unieke behoeften van elke patiënt te
                                        voldoen. Van preventieve zorg zoals
                                        controles en reinigingen tot
                                        restauratieve behandelingen zoals
                                        vullingen, kronen en implantaten.
                                    </p>
                                    <p className="para pt-16">
                                        Voor wie zijn glimlach wil verbeteren,
                                        bieden we geavanceerde cosmetische
                                        oplossingen, waaronder tanden bleken en
                                        facings. Ons team levert persoonlijke
                                        zorg in een comfortabele, gastvrije
                                        omgeving met moderne technologie.
                                    </p>
                                </div>
                                {/* icon block */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-deatils-icon-block-flex">
                                            <div className="icon">
                                                <span>
                                                    <img
                                                        src="assets/img/icons/vl-service-details-icon1.1.svg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">
                                                    Geavanceerde tandheelkunde
                                                </h4>
                                                <p className="para">
                                                    Met de nieuwste technologie
                                                    leveren we effectieve en
                                                    comfortabele zorg.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-deatils-icon-block-flex">
                                            <div className="icon">
                                                <span>
                                                    <img
                                                        src="assets/img/icons/vl-service-details-icon1.2.svg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">
                                                    Preventief en restauratief
                                                </h4>
                                                <p className="para">
                                                    Wij richten ons op het
                                                    behouden van mondgezondheid
                                                    en het herstellen van
                                                    functionaliteit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten1t mt-18 mb-32">
                                    <h3 className="title">
                                        Complete tandzorg voor elke behoefte
                                    </h3>
                                    <p className="para pt-16">
                                        Van routinecontroles tot geavanceerde
                                        behandelingen: wij bieden een volledig
                                        spectrum aan zorg om uw glimlach gezond
                                        en mooi te houden. Onze persoonlijke
                                        aanpak zorgt ervoor dat uw wensen met
                                        zorg en expertise worden ingevuld.
                                    </p>
                                </div>
                                {/* video & check box */}
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-service-video-thumb p-relative">
                                            <img
                                                className="w-100 br-8"
                                                src="assets/img/service/vl-service-video-thumb1.1.png"
                                                alt=""
                                            />
                                            <div
                                                className="popup-video vl-play-btn"
                                                onClick={() => setOpen(true)}
                                            >
                                                <span>
                                                    <i className="fa-solid fa-play" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-service-check-list">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Zorg op maat voor elke
                                                    levensfase
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Complete zorg voor elke
                                                    glimlach
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Oplossingen op maat voor uw
                                                    tandheelkundige behoeften
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Uw glimlach, onze expertise
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Deskundige zorg voor alle
                                                    leeftijden
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* service faq */}
                                <div className="vl-faq-service mt-18">
                                    <div
                                        className="accordion"
                                        id="accordionExample"
                                    >
                                        <div className="vl-accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingOne"
                                            >
                                                <button
                                                    className="vl-accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Wat zijn signalen dat ik een
                                                    tandartscontrole nodig heb?
                                                    <span className="vl-faqarrow">
                                                        <i className="fa-regular fa-angle-down" />
                                                    </span>
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="vl-accordion-body">
                                                    <p className="para">
                                                        Bij een tandheelkundig
                                                        noodgeval, zoals een
                                                        uitgeslagen tand of
                                                        hevige pijn, neem
                                                        onmiddellijk contact met
                                                        ons op. We begeleiden u
                                                        verder.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vl-accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingTwo"
                                            >
                                                <button
                                                    className="vl-accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Bieden jullie
                                                    betalingsregelingen of
                                                    werken jullie met
                                                    verzekeringen?
                                                    <span className="vl-faqarrow">
                                                        <i className="fa-regular fa-angle-down" />
                                                    </span>
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="vl-accordion-body">
                                                    <p className="para">
                                                        Bij een tandheelkundig
                                                        noodgeval, zoals een
                                                        uitgeslagen tand of
                                                        hevige pijn, neem
                                                        onmiddellijk contact met
                                                        ons op. We begeleiden u
                                                        verder.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vl-accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingThree"
                                            >
                                                <button
                                                    className="vl-accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Welke opties heb ik voor het
                                                    vervangen van tanden?
                                                    <span className="vl-faqarrow">
                                                        <i className="fa-regular fa-angle-down" />
                                                    </span>
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="vl-accordion-body">
                                                    <p className="para">
                                                        Bij een tandheelkundig
                                                        noodgeval, zoals een
                                                        uitgeslagen tand of
                                                        hevige pijn, neem
                                                        onmiddellijk contact met
                                                        ons op. We begeleiden u
                                                        verder.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vl-accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="heading4"
                                            >
                                                <button
                                                    className="vl-accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse4"
                                                    aria-expanded="false"
                                                    aria-controls="collapse4"
                                                >
                                                    Hoe lang gaat een kroon of
                                                    vulling mee?
                                                    <span className="vl-faqarrow">
                                                        <i className="fa-regular fa-angle-down" />
                                                    </span>
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading4"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="vl-accordion-body">
                                                    <p className="para">
                                                        Bij een tandheelkundig
                                                        noodgeval, zoals een
                                                        uitgeslagen tand of
                                                        hevige pijn, neem
                                                        onmiddellijk contact met
                                                        ons op. We begeleiden u
                                                        verder.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Service Details section End =================*/}
            {/* <ModalVideo channel="youtube" isOpen={isOpen} videoId="wn_wKQ_UR90" onClose={() => setOpen(false)} /> */}
        </>
    );
}
