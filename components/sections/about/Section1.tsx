"use client";
import Link from "next/link";
import { useState } from "react";
// import "@/node_modules/react-modal-video/css/modal-video.css";
// import ModalVideo from "react-modal-video";

export default function Section1({ background }: { background: string }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= Choose us section start =================*/}
            <section className={`${background} fix pt-100 pb-70`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-about-thm4b-inner mr-30">
                                <img
                                    className="w-100"
                                    src="assets/img/about/vl-about-inner1.1.png"
                                    alt=""
                                />
                                <div className="vl-video-pla4y">
                                    <div
                                        className="popup-video"
                                        onClick={() => setOpen(true)}
                                    >
                                        <span>
                                            <i className="fa-solid fa-play" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-choose-us-inner-content">
                                {/* section title */}
                                <div className="vl-section-title">
                                    <h5 className="subtitle">
                                        Waarom voor ons kiezen
                                    </h5>
                                    <h2 className="title text-anime-style-3 pt-16 pb-12 mr-20">
                                        Belangrijkste redenen om ons uw glimlach
                                        toe te vertrouwen
                                    </h2>
                                    <p className="para pb-32">
                                        Wij bieden uitzonderlijke
                                        tandheelkundige zorg met een
                                        persoonlijke aanpak. Ons ervaren team
                                        combineert geavanceerde technologie met
                                        aandacht voor comfort.
                                    </p>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">
                                        Endodontische apparatuur
                                    </h4>
                                    <div
                                        id="bar1"
                                        className="progress barfiller"
                                        role="progressbar"
                                        aria-label="Endodontische apparatuur"
                                        aria-valuenow={86}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar fill"
                                            style={{ width: "86%" }}
                                        ></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">
                                        Behandelkamerkasten
                                    </h4>
                                    <div
                                        id="bar2"
                                        className="progress barfiller"
                                        role="progressbar"
                                        aria-label="Behandelkamerkasten"
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar fill"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">
                                        Chirurgische microscopen
                                    </h4>
                                    <div
                                        id="bar3"
                                        className="progress barfiller"
                                        role="progressbar"
                                        aria-label="Chirurgische microscopen"
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar fill"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">
                                        Behandelkamerverlichting
                                    </h4>
                                    <div
                                        id="bar4"
                                        className="progress barfiller"
                                        role="progressbar"
                                        aria-label="Behandelkamerverlichting"
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar fill"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                </div>
                                {/* btn */}
                                <div className="vl-progress-btn mt-12">
                                    <Link
                                        href="/contact"
                                        className="vl-btn-primary"
                                    >
                                        Neem contact op
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Choose us section start =================*/}
            {/* <ModalVideo channel="youtube" videoId="vR24qT-I5ko" isOpen={isOpen} onClose={() => setOpen(false)} /> */}
        </>
    );
}
