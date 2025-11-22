"use client";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useState } from "react";
import { verifyEmail } from "@/util/emailVerifier";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get("email") as string;

        // Verify email before sending
        const verification = await verifyEmail(email);
        if (!verification.isValid) {
            setStatus("error");
            setErrorMessage(verification.errorMessage);
            return;
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    message: formData.get("message"),
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setStatus("success");
            form.reset();

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                "Er is iets misgegaan bij het verzenden van uw bericht. Probeer het later opnieuw of neem rechtstreeks contact met ons op."
            );
            console.error("EmailJS error:", error);
        }
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
                                    <form onSubmit={sendEmail}>
                                        <div className="row">
                                            <div className="col-lg-6 mb-24">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Voornaam"
                                                    required
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="Voornaam"
                                                    minLength={2}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-24">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="E-mailadres"
                                                    required
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="E-mailadres"
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-24">
                                                <input
                                                    name="phone"
                                                    type="tel"
                                                    pattern="^(?:\+(?:31|32)[1-9][0-9]{7,8}|0[1-9][0-9]{7,8}|[0-9]{9,10})$"
                                                    placeholder="Telefoonnummer"
                                                    required
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="Telefoonnummer"
                                                    title="Voer een geldig telefoonnummer in (bijv. 0494143115, +32494143115 of +31612345678)"
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
                                                    required
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="Uw bericht"
                                                    minLength={10}
                                                    rows={5}
                                                />
                                            </div>
                                        </div>

                                        {/* Status Messages */}
                                        {status === "success" && (
                                            <div
                                                className="alert alert-success mb-3"
                                                role="alert"
                                            >
                                                Bedankt! Uw bericht is succesvol
                                                verzonden. We nemen zo spoedig
                                                mogelijk contact met u op.
                                            </div>
                                        )}
                                        {status === "error" && (
                                            <div
                                                className="alert alert-danger mb-3"
                                                role="alert"
                                            >
                                                {errorMessage}
                                            </div>
                                        )}

                                        <div className="col-lg-6">
                                            <div className="vl-contact-btn">
                                                <button
                                                    className={`vl-btn-primary ${
                                                        status === "loading"
                                                            ? "btn-loading"
                                                            : ""
                                                    }`}
                                                    type="submit"
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-busy={
                                                        status === "loading"
                                                    }
                                                >
                                                    {status === "loading"
                                                        ? "Verzenden"
                                                        : "Verzenden"}
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
                                                Maandag - Zaterdag
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
                                    {/* <div className="vl-single-info-box">
                                        <div className="vl-contact-info-box-flex">
                                            <h4 className="title">Zaterdag</h4>
                                            <span className="time">
                                                09.00 - 17.00
                                            </span>
                                        </div>
                                    </div> */}
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
