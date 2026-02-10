"use client";
import { PHONE, WHATSAPP } from "@/util/config";
import Link from "next/link";
import RenderConditionally from "../elements/RenderConditonally";
import MainMenu from "./MainMenu";
import MainMenuOnePage1 from "./MainMenuOnePage1";
import MobileMenu from "./MobileMenu";

export default function Header({
    scroll,
    isMobileMenu,
    mainMenuStyle,
    handleMobileMenu,
    offcanvas_bg,
    offcanvas_menu,
    offcanvas_social,
}: any) {
    return (
        <>
            <header>
                <div
                    id="vl-header-sticky"
                    className={`vl-header-area vl-transparent-header ${
                        scroll ? "header-sticky top-0 position-fixed" : ""
                    }`}
                >
                    <div className="container">
                        <div className="row header-style-1 align-items-center">
                            <div className="col-lg-3 col-md-6 col-9">
                                <div className="vl-logo">
                                    <Link href="/">
                                        <img
                                            className="object-fit-scale"
                                            src={scroll ? "assets/img/logo/logo-light.svg" : "assets/img/logo/logo-dark.svg"}
                                            alt="logo"
                                            width={256}
                                            height={151}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="vl-main-menu text-center">
                                    <nav className="vl-mobile-menu -active">
                                        {!mainMenuStyle && <MainMenu />}
                                        {mainMenuStyle == "one-page" ? (
                                            <MainMenuOnePage1 />
                                        ) : null}
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-3">
                                {/* header icon box */}
                                <RenderConditionally condition={PHONE || WHATSAPP}>
                                    <div className="d-none d-lg-block">
                                        <div className="vl-header-icon-box-flex">
                                            <div className="vl-icon">
                                                <span>
                                                    <img
                                                        src="assets/img/icons/vl-header-top-icon-1.1.svg"
                                                        alt="Telefoon icoon"
                                                    />
                                                </span>
                                            </div>
                                            <div className="vl-content">
                                                <div className="title">
                                                    Neem contact op
                                                </div>
                                                <RenderConditionally condition={PHONE}>
                                                    <Link
                                                        href={`tel:${PHONE?.replace(/[^0-9+]/g, "")}`}
                                                        className="number"
                                                        style={{ display: "block", marginBottom: "4px" }}
                                                    >
                                                        <i className="fa fa-phone" style={{ marginRight: "6px", fontSize: "12px" }} />
                                                        {PHONE}
                                                    </Link>
                                                </RenderConditionally>
                                                <RenderConditionally condition={WHATSAPP}>
                                                    <Link
                                                        href={`https://wa.me/${WHATSAPP?.replace(/[^0-9]/g, "")}`}
                                                        target="_blank"
                                                        className="number"
                                                        style={{ display: "block" }}
                                                    >
                                                        <i className="fa-brands fa-whatsapp" style={{ marginRight: "6px", fontSize: "14px", color: "#25D366" }} />
                                                        {WHATSAPP}
                                                    </Link>
                                                </RenderConditionally>
                                            </div>
                                        </div>
                                    </div>
                                </RenderConditionally>
                                <div className="vl-header-action-item d-block d-lg-none">
                                    <button
                                        type="button"
                                        className="vl-offcanvas-toggle"
                                        onClick={() => handleMobileMenu()}
                                    >
                                        <img
                                            src="assets/img/icons/vl-line-1.1.svg"
                                            alt="Menu openen"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MobileMenu
                        isMobileMenu={isMobileMenu}
                        handleMobileMenu={handleMobileMenu}
                        offcanvas_bg={offcanvas_bg}
                        offcanvas_menu={offcanvas_menu}
                        offcanvas_social={offcanvas_social}
                    />
                </div>
            </header>
        </>
    );
}
