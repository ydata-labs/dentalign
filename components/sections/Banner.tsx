"use client";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "@/node_modules/react-modal-video/css/modal-video.css";
// import ModalVideo from "react-modal-video";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Banner() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {/*================= Banner section start =================*/}
            <Swiper
                {...swiperOptions}
                id="banner-slid1e"
                className="swiper owl-carousel owl-theme position-relative"
            >
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        {/* single slider */}
                        <div
                            className="vl-banner-area"
                            data-background="./assets/img/banner/vl-banner-1.1.png"
                        >
                            <div className="shape shape-1">
                                <img
                                    src="assets/img/shape/vl-hero-shape-1.1.svg"
                                    alt=""
                                />
                            </div>
                            <div className="shap3e circle">
                                <img
                                    src="assets/img/shape/vl-star-shape-1.1.svg"
                                    alt=""
                                />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 fix">
                                        <div className="vl-banner-area-content fix p-relative">
                                            <h5 className="subtitle">
                                                Een zelfverzekerde glimlach
                                                begint hier
                                            </h5>
                                            <h1 className="title text-anime-style-3 pt-16 pb-16">
                                                Tandarts in Maasmechelen -
                                                Dentalign Tandkliniek
                                            </h1>
                                            <p className="para pb-16">
                                                Ons toegewijde team van
                                                professionals levert
                                                persoonlijke, hoogwaardige
                                                tandheelkundige zorg in een
                                                comfortabele en vriendelijke
                                                omgeving.
                                            </p>
                                            <div
                                                className="pb-24"
                                                aria-label="Opening notice"
                                                data-aos="fade-up"
                                                data-aos-duration={800}
                                                data-aos-delay={250}
                                                style={{
                                                    display: "inline-block",
                                                    background:
                                                        "rgba(255,255,255,0.85)",
                                                    color: "#111",
                                                    border: "1px solid rgba(0,0,0,0.15)",
                                                    borderRadius: 9999,
                                                    padding: "8px 14px",
                                                    fontWeight: 600,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                We openen in januari 2026
                                            </div>
                                            {/* <div
                                                className="vl-hero-btn"
                                                data-aos="fade-up"
                                                data-aos-duration={800}
                                                data-aos-delay={300}
                                            >
                                                <Link
                                                    href="/contact"
                                                    className="vl-btn-primary"
                                                >
                                                    Maak een afspraak
                                                </Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="swiper-pagination"></div>
            </Swiper>
            {/*================= Banner section End =================*/}
            {/* <ModalVideo channel="youtube" isOpen={isOpen} videoId="3MdqSkr7yfs-U" onClose={() => setOpen(false)} /> */}
        </>
    );
}
