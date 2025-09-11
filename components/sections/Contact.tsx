"use client";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Contact() {
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
            {/*================= Contact section start =================*/}
            <section id="contact" className="vl-contact-bg-1 fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-contact-text-wraper-1">
                                <div className="vl-section-title mb-32">
                                    <h5
                                        className="subtitle"
                                        data-aos="fade-up"
                                        data-aos-duration={800}
                                        data-aos-delay={300}
                                    >
                                        Neem contact op
                                    </h5>
                                    {/* <h2 className="title pt-16 text-anime-style-3">
                                        Plan uw afspraak
                                    </h2> */}
                                </div>
                                <div
                                    className="vl-contact-form"
                                    data-aos="fade-right"
                                    data-aos-duration={800}
                                    data-aos-delay={300}
                                >
                                    <form action="#" onSubmit={sendEmail}>
                                        <div className="row">
                                            <div className="col-lg-6 mb-24">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Voornaam"
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-24">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="E-mailadres"
                                                />
                                            </div>
                                            <div className="col-lg-12 mb-24">
                                                <input
                                                    name="title"
                                                    type="text"
                                                    placeholder="Onderwerp"
                                                />
                                            </div>
                                            {/* <div className="col-lg-6 mb-24">
                                                <select
                                                    name="select-date"
                                                    className="nice-select wide vl-select-date"
                                                >
                                                    <option data-display="Datum">
                                                        Maandag - Vrijdag (9.00
                                                        - 22.00)
                                                    </option>
                                                    <option value={1}>
                                                        Zondag (9.00 - 22.00)
                                                    </option>
                                                    <option value={2}>
                                                        Zaterdag (10.00 - 16.00)
                                                    </option>
                                                </select>
                                            </div> */}
                                            <div className="col-lg-12 mb-24">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    placeholder="Uw bericht"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="vl-contact-btn">
                                                <button
                                                    className="vl-btn-primary"
                                                    type="submit"
                                                >
                                                    Verzenden
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 mb-30"
                            data-aos="fade-left"
                            data-aos-duration={800}
                            data-aos-delay={300}
                        >
                            <div
                                className="vl-contact-thumb1 image-anime"
                                data-background="./assets/img/contact/vl-contact-thumb-1.1.png"
                            >
                                {/* contact-info */}
                                <div className="vl-contact-info-box">
                                    <div className="vl-single-info-box">
                                        <div className="vl-contact-info-box-flex">
                                            <h4 className="title">
                                                Maandag - Vrijdag
                                            </h4>
                                            <span className="time">
                                                9.00 - 17.00
                                            </span>
                                        </div>
                                    </div>
                                    {/* <div className="vl-single-info-box">
                                        <div className="vl-contact-info-box-flex">
                                            <h4 className="title">Zondag</h4>
                                            <span className="time">
                                                9.00 - 22.00
                                            </span>
                                        </div>
                                    </div> */}
                                    <div className="vl-single-info-box">
                                        <div className="vl-contact-info-box-flex">
                                            <h4 className="title">Zaterdag</h4>
                                            <span className="time">
                                                09.00 - 17.00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="vl-contact-info-btn mt-12">
                                        <Link
                                            href="mailto:info@dentalign.be"
                                            className="w-100 text-center vl-btn-primary"
                                        >
                                            info@dentalign.be
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Contact section End =================*/}
        </>
    );
}
