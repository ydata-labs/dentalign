import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*================= Service section start =================*/}
            <section className="vl-service-inner pb-70">
                <div className="container">
                    <div className="row">
                        <div className="vl-service-sec-title-iner">
                            {/* section title */}
                            <div className="vl-section-title text-center mb-60">
                                <h2 className="title text-anime-style-3">
                                    Meer diensten
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img
                                            src="assets/img/icons/vl-service-icon-iner1.1.svg"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service">
                                            Herstellende behandelingen
                                        </Link>
                                    </h4>
                                    <p className="para">
                                        Restauratieve zorg zoals vullingen,
                                        kronen, bruggen en implantaten om uw
                                        tandheelkundige functie en glimlach te
                                        herstellen.
                                    </p>
                                    <Link
                                        href="/service"
                                        className="service-learnmore"
                                    >
                                        Meer informatie
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img
                                            src="assets/img/icons/vl-service-icon-iner1.2.svg"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service">
                                            Wortelkanaalbehandeling
                                        </Link>
                                    </h4>
                                    <p className="para">
                                        Professionele wortelkanaalbehandeling
                                        om geïnfecteerde tanden te redden en
                                        pijn te verlichten met moderne, zachte
                                        technieken.
                                    </p>
                                    <Link
                                        href="/service"
                                        className="service-learnmore"
                                    >
                                        Meer informatie
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img
                                            src="assets/img/icons/vl-service-icon-iner1.3.svg"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service">
                                            Wittere glimlach
                                        </Link>
                                    </h4>
                                    <p className="para">
                                        Professioneel tanden bleken voor een
                                        stralend witte glimlach. Veilige en
                                        effectieve behandelingen die uw
                                        zelfvertrouwen vergroten.
                                    </p>
                                    <Link
                                        href="/service"
                                        className="service-learnmore"
                                    >
                                        Meer informatie
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                    </div>
                </div>
            </section>
            {/*================= Service section End =================*/}
        </>
    );
}
