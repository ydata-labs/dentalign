import Link from "next/link";

export default function Section2() {
  return (
      <>
          {/*================= Service section start(thumb-service) =================*/}
          <section className="vl-thumb-service-inner fix pt-100 pb-70">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-5 mx-auto">
                          <div className="vl-thumb-service-inner-section-title">
                              {/* section title */}
                              <div className="vl-section-title text-center mb-60">
                                  <h5 className="subtitle">Onze diensten</h5>
                                  <h2 className="title text-anime-style-3 pt-16">
                                      Uw complete gids voor mondgezondheid
                                  </h2>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 col-md-6 mb-30">
                          {/* single slider box */}
                          <div
                              className="vl-single-service-box-iner"
                              data-background="./assets/img/service/vl-service-thumb1.1.png"
                          >
                              <div className="vl-service-icon-box">
                                  <div className="icon">
                                      <span className="icon1">
                                          <img
                                              src="assets/img/icons/vl-service-icon-1.1.svg"
                                              alt=""
                                          />
                                      </span>
                                  </div>
                                  <div className="content">
                                      <h4 className="title pt-24">
                                          <Link href="#">
                                              Herstellende behandelingen
                                          </Link>
                                      </h4>
                                      <p className="para pt-16 pb-24">
                                          Of u nu komt voor routinezorg of
                                          gespecialiseerde behandeling, ons team
                                          biedt zorgzame en betrokken zorg.
                                      </p>
                                      <Link href="#" className="learnmore">
                                          Meer informatie
                                          <span className="right-arow">
                                              <i className="fa-regular fa-arrow-right" />
                                          </span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-30">
                          {/* single slider box */}
                          <div
                              className="vl-single-service-box-iner"
                              data-background="./assets/img/service/vl-service-thumb1.2.png"
                          >
                              <div className="vl-service-icon-box">
                                  <div className="icon">
                                      <span className="icon1">
                                          <img
                                              src="./assets/img/icons/vl-service-icon-1.2.svg"
                                              alt=""
                                          />
                                      </span>
                                  </div>
                                  <div className="content">
                                      <h4 className="title pt-24">
                                          <Link href="#">
                                              Parodontale therapie
                                          </Link>
                                      </h4>
                                      <p className="para pt-16 pb-24">
                                          Voor jongere patiënten biedt
                                          kindertandheelkunde een comfortabele
                                          en leuke omgeving, die helpt gezonde
                                          gewoonten op te bouwen.
                                      </p>
                                      <Link href="#" className="learnmore">
                                          Meer informatie
                                          <span className="right-arow">
                                              <i className="fa-regular fa-arrow-right" />
                                          </span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-30">
                          {/* single slider box */}
                          <div
                              className="vl-single-service-box-iner"
                              data-background="./assets/img/service/vl-service-thumb1.3.png"
                          >
                              <div className="vl-service-icon-box">
                                  <div className="icon">
                                      <span className="icon1">
                                          <img
                                              src="./assets/img/icons/vl-service-icon-1.4.svg"
                                              alt=""
                                          />
                                      </span>
                                  </div>
                                  <div className="content">
                                      <h4 className="title pt-24">
                                          <Link href="#">
                                              Kindertandheelkunde
                                          </Link>
                                      </h4>
                                      <p className="para pt-16 pb-24">
                                          Onze cosmetische tandheelkunde,
                                          inclusief bleken &amp; facings,
                                          vergroot uw zelfvertrouwen met een
                                          stralende glimlach.
                                      </p>
                                      <Link href="#" className="learnmore">
                                          Meer informatie
                                          <span className="right-arow">
                                              <i className="fa-regular fa-arrow-right" />
                                          </span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-30">
                          {/* single slider box */}
                          <div
                              className="vl-single-service-box-iner"
                              data-background="./assets/img/service/vl-service-thumb1.4.png"
                          >
                              <div className="vl-service-icon-box">
                                  <div className="icon">
                                      <span className="icon1">
                                          <img
                                              src="./assets/img/icons/vl-service-icon-1.3.svg"
                                              alt=""
                                          />
                                      </span>
                                  </div>
                                  <div className="content">
                                      <h4 className="title pt-24">
                                          <Link href="#">
                                              Herstellende behandelingen
                                          </Link>
                                      </h4>
                                      <p className="para pt-16 pb-24">
                                          Of u nu komt voor routinezorg of
                                          gespecialiseerde behandeling, ons team
                                          biedt zorgzame en betrokken zorg.
                                      </p>
                                      <Link href="#" className="learnmore">
                                          Meer informatie
                                          <span className="right-arow">
                                              <i className="fa-regular fa-arrow-right" />
                                          </span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/*================= Service section End =================*/}
      </>
  );
}
