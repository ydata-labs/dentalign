"use client";
import { EMAIL } from "@/util/config";
import { verifyEmail } from "@/util/emailVerifier";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useState } from "react";
import RenderConditionally from "@/components/elements/RenderConditonally";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Section1() {
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
                process.env.NEXT_PUBLIC_EMAILJS_VACANCY_TEMPLATE_ID!,
                {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    message: formData.get("message"),
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setStatus("success");
            (e.target as HTMLFormElement).reset();

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                "Er is iets misgegaan bij het verzenden van uw sollicitatie. Probeer het later opnieuw of stuur een e-mail naar info@dentalijn.be."
            );
            console.error("EmailJS error:", error);
        }
    };

    return (
        <>
            {/*================= Vacancy section Start =================*/}
            <section className="vl-contact-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-contact-form-iner">
                                <h4 className="title">
                                    Word onderdeel van ons team
                                </h4>
                                <p className="para pt-16 pb-22">
                                    Wij openen binnenkort een moderne,
                                    multidisciplinaire privépraktijk in het hart
                                    van Maasmechelen, en wij zijn op zoek naar
                                    enthousiaste professionals die ons team
                                    vanaf het begin willen versterken.
                                </p>

                                <div className="vacancy-positions mb-30">
                                    <h5 className="mb-16">
                                        Openstaande functies:
                                    </h5>
                                    <ul className="vacancy-list">
                                        <li>
                                            <i className="fa fa-check-circle text-primary me-2"></i>
                                            Algemeen Tandarts
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle text-primary me-2"></i>
                                            Tandartsassistenten
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle text-primary me-2"></i>
                                            Mondhygiënisten
                                        </li>
                                    </ul>
                                </div>

                                <p className="para pb-22">
                                    Onze praktijk is volledig nieuw, ontworpen
                                    met moderne architectuur en uitgerust met de
                                    allernieuwste technologieën om patiënten de
                                    hoogste standaard van zorg te bieden.
                                </p>

                                <RenderConditionally condition={EMAIL}>
                                    <div className="vacancy-cta mb-30">
                                        <p className="para">
                                            <strong>
                                                Stuur je CV naar{" "}
                                                <Link
                                                    href={`mailto:${EMAIL}`}
                                                    className="text-primary"
                                                >
                                                    {EMAIL}
                                                </Link>
                                            </strong>
                                        </p>
                                    </div>
                                </RenderConditionally>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-contact-form-iner">
                                <h4 className="title">Solliciteer direct</h4>
                                <p className="para pt-16 pb-22">
                                    Vul het formulier in en voeg uw CV toe
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
                                                    placeholder="Volledige naam"
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="Volledige naam"
                                                    minLength={2}
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    required
                                                    className="mb-20"
                                                    type="tel"
                                                    name="phone"
                                                    pattern="^(?:\+32[1-9][0-9]{7,8}|0[1-9][0-9]{7,8}|[0-9]{9,10})$"
                                                    placeholder="Telefoonnummer"
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="Telefoonnummer"
                                                    title="Voer een geldig telefoonnummer in (bijv. 0494143115 of +32494143115)"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <input
                                                    required
                                                    className="mb-20"
                                                    name="email"
                                                    type="email"
                                                    placeholder="E-mailadres"
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="E-mailadres"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <select
                                                    required
                                                    name="position"
                                                    className="mb-20"
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="Gewenste functie"
                                                    style={{
                                                        width: "100%",
                                                        padding: "12px 16px",
                                                        border: "1px solid #e0e0e0",
                                                        borderRadius: "4px",
                                                        fontSize: "16px",
                                                        backgroundColor: "#fff",
                                                    }}
                                                >
                                                    <option value="">
                                                        Selecteer functie
                                                    </option>
                                                    <option value="Algemeen Tandarts">
                                                        Algemeen Tandarts
                                                    </option>
                                                    <option value="Tandartsassistent">
                                                        Tandartsassistent
                                                    </option>
                                                    <option value="Mondhygiënist">
                                                        Mondhygiënist
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea
                                                    required
                                                    name="message"
                                                    id="msg"
                                                    placeholder="Korte motivatie en werkervaring"
                                                    defaultValue={""}
                                                    disabled={
                                                        status === "loading"
                                                    }
                                                    aria-label="Motivatie"
                                                    minLength={20}
                                                    rows={5}
                                                />
                                            </div>

                                            {/* Status Messages */}
                                            {status === "success" && (
                                                <div className="col-lg-12">
                                                    <div
                                                        className="alert alert-success mt-3"
                                                        role="alert"
                                                    >
                                                        Bedankt voor uw
                                                        sollicitatie! Wij nemen
                                                        zo spoedig mogelijk
                                                        contact met u op.
                                                    </div>
                                                </div>
                                            )}
                                            {status === "error" && (
                                                <div className="col-lg-12">
                                                    <div
                                                        className="alert alert-danger mt-3"
                                                        role="alert"
                                                    >
                                                        {errorMessage}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="col-lg-12">
                                                <div className="vl-cmt-btn mt-24">
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
                                                            ? "Bezig met verzenden..."
                                                            : "Verstuur sollicitatie"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Vacancy section End =================*/}
        </>
    );
}
