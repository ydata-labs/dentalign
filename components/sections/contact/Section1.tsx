"use client";
import RenderConditionally from "@/components/elements/RenderConditonally";
import { ADDRESS, EMAIL, PHONE, WHATSAPP } from "@/util/config";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Section1() {
    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            e.target as HTMLFormElement,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        (e.target as HTMLFormElement).reset();
    };

    return (
        <>
            {/*================= Contact section Start =================*/}
            <section className="vl-contact-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-contact-form-iner">
                                <h4 className="title">Stuur ons een bericht</h4>
                                <p className="para pt-16 pb-22">
                                    Onze reactietijd is binnen 30 minuten
                                    tijdens kantooruren
                                </p>
                                <form action="#" onSubmit={sendEmail}>
                                    <div className="vl-conatct-iner-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input
                                                    required
                                                    name="name"
                                                    className="mb-20"
                                                    type="text"
                                                    placeholder="Voornaam"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    required
                                                    className="mb-20"
                                                    type="tel"
                                                    name="phone"
                                                    pattern="^(?:\+32[1-9][0-9]{7,8}|\+31[0-9]{9})$"
                                                    placeholder="Telefoonnummer"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    required
                                                    className="mb-20"
                                                    name="email"
                                                    type="email"
                                                    placeholder="E-mailadres"
                                                />
                                            </div>
                                            {/* <div className="col-lg-6">
                                                <select className="mb-20 nice-select wide vl-service-select-iner">
                                                    <option data-display="Type dienst">
                                                        Preventieve zorg
                                                    </option>
                                                    <option value={1}>
                                                        Restauratieve
                                                        tandheelkunde
                                                    </option>
                                                    <option value={2}>
                                                        Cosmetische
                                                        tandheelkunde
                                                    </option>
                                                    <option value={3}>
                                                        Orthodontie{" "}
                                                    </option>
                                                    <option value={4}>
                                                        Mondchirurgie
                                                    </option>
                                                </select>
                                            </div> */}
                                            {/* <div className="col-lg-6">
                                                <select className="mb-20 nice-select wide vl-service-select-iner">
                                                    <option data-display="Selecteer arts">
                                                        Dr. Joseph Ayoub
                                                    </option>
                                                    <option value={1}>
                                                        Dr. Joseph Ayoub
                                                    </option>
                                                    <option value={2}>
                                                        Jose D. Schafer
                                                    </option>
                                                    <option value={3}>
                                                        Chery P. Johnson
                                                    </option>
                                                    <option value={4}>
                                                        B. McCutcheon
                                                    </option>
                                                </select>
                                            </div> */}
                                            {/* <div className="col-lg-6">
                                                <input
                                                    className="mb-20"
                                                    type="date"
                                                    placeholder="Datum"
                                                />
                                            </div> */}
                                            <div className="col-lg-12">
                                                <textarea
                                                    required
                                                    name="message"
                                                    id="msg"
                                                    placeholder="Bericht"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="vl-cmt-btn mt-24">
                                                    <button
                                                        className="vl-btn-primary"
                                                        type="submit"
                                                    >
                                                        Maak een afspraak
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-con-thum-iner ml-30">
                                <img
                                    className="w-100 br-8"
                                    src="assets/img/contact/vl-contact-thum-1.1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-18 pb-10">
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img
                                            src="assets/img/icons/vl-contact-ic-iner1.1.svg"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Bezoek ons</h5>
                                    <Link href="#">{ADDRESS}</Link>
                                </div>
                            </div>
                        </div>
                        <RenderConditionally condition={PHONE}>
                            <div className="col-lg-4 col-md-6 mb-30">
                                {/* single icon box */}
                                <div className="vl-contact-iner-icon-box">
                                    <div className="icon">
                                        <span>
                                            <img
                                                src="assets/img/icons/vl-contact-ic-iner1.2.svg"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                    <div className="content">
                                        <h5 className="title">
                                            alleen bericht/ whatsapp
                                        </h5>
                                        <Link
                                            href={`https://wa.me/${WHATSAPP}`}
                                            target="_blank"
                                        >
                                            {PHONE}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </RenderConditionally>
                        <RenderConditionally condition={EMAIL}>
                            <div className="col-lg-4 col-md-6 mb-30">
                                {/* single icon box */}
                                <div className="vl-contact-iner-icon-box h-100">
                                    <div className="icon">
                                        <span>
                                            <img
                                                src="assets/img/icons/vl-contact-ic-iner1.3.svg"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                    <div className="content">
                                        <h5 className="title">
                                            Stuur ons vandaag een e-mail
                                        </h5>
                                        <Link href={`mailto:${EMAIL}`}>
                                            {EMAIL}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </RenderConditionally>
                    </div>
                </div>
            </section>
            {/*================= Contact section End =================*/}
            {/* map start */}
            <div className="vl-map-area pb-100">
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.8610091938845!2d5.697383774171536!3d50.96327397193167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0c4873f013af5%3A0x6adbd80389834a12!2sDokter%20Haubenlaan%2017%2C%203630%20Maasmechelen%2C%20Bel%C3%A7ika!5e0!3m2!1str!2str!4v1749140795053!5m2!1str!2str"
                        className="vl-maps"
                    />
                </div>
            </div>
        </>
    );
}
