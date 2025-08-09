"use client";
import Link from "next/link";
import { useState } from "react";
// import "@/node_modules/react-modal-video/css/modal-video.css";
// import ModalVideo from "react-modal-video";

export default function Section1({
    left,
    single,
}: {
    left?: boolean;
    single?: boolean;
}) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= Blog Details section Start =================*/}
            <section className="vl-blog-details pt-100 pb-70">
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
                                {/* rec post widget */}
                                <div className="vl-widegt-rec-post vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">
                                        Recente blogs
                                    </h4>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="#">
                                                <img
                                                    src="assets/img/blog/vl-rec-blog-1.1.png"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img
                                                                    src="assets/img/icons/vl-rec-date-icon1.1.svg"
                                                                    alt=""
                                                                />
                                                            </span>
                                                            10/10/2025
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Voeding voor gezonde tanden
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="">
                                                <img
                                                    src="assets/img/blog/vl-rec-blog-1.2.png"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img
                                                                    src="assets/img/icons/vl-rec-date-icon1.1.svg"
                                                                    alt=""
                                                                />
                                                            </span>
                                                            16/10/2025
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Nazorg na een vulling
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="">
                                                <img
                                                    src="assets/img/blog/vl-rec-blog-1.3.png"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img
                                                                    src="assets/img/icons/vl-rec-date-icon1.1.svg"
                                                                    alt=""
                                                                />
                                                            </span>
                                                            08/10/2025
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Beugel of Invisalign?
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                {/* tag widget */}
                                <div className="vl-tags-widget vl-off-white-bg mb-14">
                                    <h4 className="title pb-24">
                                        Populaire tags
                                    </h4>
                                    <div className="vl-tags-list">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    GezondeGlimlachen
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Mondgezondheid
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    PreventieveZorg
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    StralendeGlimlach
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    TandheelkundeExperts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    TandenBleken
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* auth widget */}
                                <div className="vl-auth-widget vl-off-white-bg mb-15">
                                    <h4 className="title pb-24">
                                        Onze auteurs
                                    </h4>
                                    <div className="vl-auth-box-grid">
                                        <div className="vl-auth-thumb">
                                            <Link href="/team">
                                                <img
                                                    src="assets/img/team/vl-auth-iner1.1.png"
                                                    alt=""
                                                />
                                            </Link>
                                            <Link href="/team">
                                                <img
                                                    src="assets/img/team/vl-auth-iner1.2.png"
                                                    alt=""
                                                />
                                            </Link>
                                            <Link href="/team">
                                                <img
                                                    src="assets/img/team/vl-auth-iner1.3.png"
                                                    alt=""
                                                />
                                            </Link>
                                            <Link href="/team">
                                                <img
                                                    src="assets/img/team/vl-auth-iner1.4.png"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
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
                                {/* thumbnail */}
                                <div className="vl-blog-large-thumb-iner mb-32">
                                    <img
                                        className="w-100 br-8"
                                        src="assets/img/blog/vl-blog-large-thumb1.1.png"
                                        alt=""
                                    />
                                </div>
                                {/* meta */}
                                <div className="vl-blog-meta-list">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img
                                                        className="auth-thumb"
                                                        src="assets/img/team/auth-meta1.1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                Adil Rashid
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img
                                                        className="icon"
                                                        src="assets/img/icons/vl-blog-details-date-icon1.1.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                8/10/2025
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img
                                                        className="icon"
                                                        src="assets/img/icons/vl-tag-1.1.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                Tandheelkunde &amp; kliniek
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img
                                                        className="icon"
                                                        src="assets/img/icons/vl-chat1.1.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                2 reacties
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten2t mb-32">
                                    <h3 className="title">
                                        Tandimplantaten vs. kunstgebitten: wat
                                        past bij u?
                                    </h3>
                                    <p className="para pt-16">
                                        Welkom op ons blog, waar we waardevolle
                                        inzichten, tips van experts en het
                                        laatste nieuws over tandheelkundige zorg
                                        delen. We helpen patiënten met kennis om
                                        weloverwogen beslissingen te nemen over
                                        hun gezondheid.
                                    </p>
                                    <p className="para pt-16">
                                        Ontdek onderwerpen van dagelijkse
                                        mondhygiëne tot geavanceerde
                                        behandelingen—alles om u te helpen een
                                        gezonde, zelfverzekerde glimlach te
                                        bereiken. Blijf verbonden voor updates.
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
                                <div className="vl-sidebar-conten1t mb-32">
                                    <h3 className="title">
                                        Complete tandzorg voor elke behoefte
                                    </h3>
                                    <p className="para pt-16">
                                        Goed geïnformeerd blijven over uw
                                        mondgezondheid is essentieel. In ons
                                        blog vindt u artikelen over preventieve
                                        zorg en de nieuwste ontwikkelingen, van
                                        tips voor dagelijkse routines tot
                                        uitgebreide behandelopties.
                                    </p>
                                </div>
                                {/* check box */}
                                <div className="row">
                                    <div className="col-lg-12 mb-16">
                                        <div className="vl-service-check-lis2t">
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
                                                    Oplossingen op maat voor uw
                                                    tandheelkundige behoeften
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Preventief, restauratief en
                                                    cosmetisch
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
                                {/* video thumb area */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-blog-sm-thumb">
                                            <img
                                                className="w-100"
                                                src="assets/img/blog/vl-blog-sm-thumb-1.1.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-service-video-thum2b p-relative">
                                            <img
                                                className="w-100 br-8"
                                                src="assets/img/blog/vl-blog-sm-video-thumb-1.2.png"
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
                                </div>
                                {/* tags */}
                                <div className="row">
                                    <div className="col-lg-7 mb-30">
                                        <div className="vl-single-tags">
                                            <h4 className="title">
                                                Onze tags:
                                            </h4>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        Tandarts
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        Creatief
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        Ontwikkeling
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 mb-30">
                                        <div className="vl-blog-share">
                                            <h4 className="title">Delen:</h4>
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* blog comments */}
                                <div className="vl-blog-comemts">
                                    <h4 className="title mb-30">
                                        Reacties (2)
                                    </h4>
                                    {/* single comment */}
                                    <div className="vl-single-coments-box mb-30">
                                        <div className="vl-cmnts-flex">
                                            <div className="vl-auth-flex">
                                                <div className="auth">
                                                    <span>
                                                        <img
                                                            src="assets/img/team/vl-auth-iner1.4.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        <Link href="/testimonial">
                                                            Matthew Larson
                                                        </Link>
                                                    </h4>
                                                    <span>8/10/2025</span>
                                                </div>
                                            </div>
                                            <div className="vl-replay">
                                                <h4 className="title">
                                                    <Link href="#">
                                                        <span>
                                                            <img
                                                                src="assets/img/icons/vl-replay.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                        Beantwoorden
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="para">
                                            We horen graag van onze lezers!
                                            Heeft u vragen, gedachten of
                                            ervaringen die u wilt delen? Plaats
                                            ze gerust hieronder. Uw feedback
                                            helpt ons om nuttige content te
                                            blijven maken.
                                        </p>
                                    </div>
                                    {/* single comment */}
                                    <div className="vl-single-coments-box ml-30 mb-30">
                                        <div className="vl-cmnts-flex">
                                            <div className="vl-auth-flex">
                                                <div className="auth">
                                                    <span>
                                                        <img
                                                            src="assets/img/team/vl-auth-iner1.3.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        <Link href="/testimonial">
                                                            Sergio Daugherty
                                                        </Link>
                                                    </h4>
                                                    <span>8/10/2025</span>
                                                </div>
                                            </div>
                                            <div className="vl-replay">
                                                <h4 className="title">
                                                    <Link href="#">
                                                        <span>
                                                            <img
                                                                src="assets/img/icons/vl-replay.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                        Beantwoorden
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="para">
                                            Wilt u meer leren over een onderwerp
                                            of uw eigen tips delen? We moedigen
                                            een open gesprek aan. Ons team
                                            beantwoordt graag uw vragen terwijl
                                            u de regie neemt over uw
                                            mondgezondheid.
                                        </p>
                                    </div>
                                </div>
                                {/* comments form */}
                                <div className="vl-coments-form">
                                    <h4 className="title">
                                        Laat een reactie achter
                                    </h4>
                                    <p className="para pb-32">
                                        Geef duidelijke contactgegevens op,
                                        inclusief telefoonnummer, e-mail en
                                        adres.
                                    </p>
                                    <form action="#">
                                        <div className="vl-cmnts-form">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input
                                                        className="mb-20"
                                                        type="text"
                                                        placeholder="Voornaam"
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input
                                                        className="mb-20"
                                                        type="text"
                                                        placeholder="Achternaam"
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input
                                                        className="mb-20"
                                                        name="email"
                                                        type="email"
                                                        placeholder="E-mail"
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input
                                                        className="mb-20"
                                                        type="number"
                                                        placeholder="Telefoon"
                                                    />
                                                </div>
                                                <div className="col-lg-12">
                                                    <input
                                                        className="mb-20"
                                                        type="text"
                                                        placeholder="Onderwerp"
                                                    />
                                                </div>
                                                <div className="col-lg-12">
                                                    <textarea
                                                        name="message"
                                                        id="mesage"
                                                        placeholder="Bericht"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="vl-cmt-btn mt-30">
                                                    <button className="vl-btn-primary">
                                                        Nu verzenden
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Blog Details section End =================*/}
            {/* <ModalVideo channel="youtube" isOpen={isOpen} videoId="wn_wKQ_UR90" onClose={() => setOpen(false)} /> */}
        </>
    );
}
