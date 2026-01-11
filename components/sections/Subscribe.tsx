export default function Subscribe() {
    return (
        <>
            {/*================= Cta section start =================*/}
            <section className="vl-cta-area">
                <div className="container">
                    <div
                        className="vl-cta-bg"
                        data-background="./assets/img/cta/vl-cta-bg-1.1.png"
                    >
                        <div className="vl-line-shape">
                            <img
                                src="assets/img/shape/cta-left-arrow-shape-1.1.svg"
                                alt=""
                                aria-hidden="true"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-5" />
                            <div className="col-lg-5">
                                <div className="vl-cta-content">
                                    <h3 className="title text-anime-style-3 pb-32">
                                        Wacht niet: uw glimlach verdient het
                                        beste
                                    </h3>
                                    <div className="vl-cta-form">
                                        <form action="#">
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Vul uw e-mailadres in"
                                            />
                                            <div className="cta-submit-btn">
                                                <button className="vl-btn-primary">
                                                    Nu abonneren
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="vl-cta-shape d-none d-lg-block">
                                    <div className="shape-thumb">
                                        <img
                                            className="circle"
                                            src="assets/img/shape/vl-star-shape-1.1.svg"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Cta section End =================*/}
        </>
    );
}
