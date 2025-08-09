import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*================= error section Start =================*/}
            <section className="vl-eror-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="vl-eror-area">
                                <div className="eror-thumb">
                                    <img
                                        className="w-100"
                                        src="assets/img/banner/eror-thumb.png"
                                        alt=""
                                    />
                                </div>
                                <div className="eror-content">
                                    <h3 className="title">
                                        Sorry, er is iets misgegaan
                                    </h3>
                                    <p className="para pt-16 pb-32">
                                        Maar maak je geen zorgen—wij helpen je
                                        graag verder. Probeer het opnieuw of ga
                                        terug naar de startpagina. Neem contact
                                        op met de ondersteuning als je denkt dat
                                        er iets mis is met onze site.
                                    </p>
                                    <div className="eror-btn">
                                        <Link
                                            href="/"
                                            className="vl-btn-primary"
                                        >
                                            Terug naar home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= error section End =================*/}
        </>
    );
}
