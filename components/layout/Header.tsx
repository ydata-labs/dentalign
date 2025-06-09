import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MainMenu from "./MainMenu";
import MainMenuOnePage1 from "./MainMenuOnePage1";
import { PHONE } from "@/util/config";
import RenderConditionally from "../elements/RenderConditonally";
import Image from "next/image";

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
                                            src="assets/img/logo/logo.png"
                                            alt="logo"
                                            width={256}
                                            height={148}
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
                                <RenderConditionally condition={PHONE}>
                                    <div className="d-none d-lg-block">
                                        <div className="vl-header-icon-box-flex">
                                            <div className="vl-icon">
                                                <span>
                                                    <img
                                                        src="assets/img/icons/vl-header-top-icon-1.1.svg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <div className="vl-content">
                                                <div className="title">
                                                    Hotline 24/7
                                                </div>
                                                <Link
                                                    href="tel:+49309233255"
                                                    className="number"
                                                >
                                                    {PHONE}
                                                </Link>
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
                                            alt=""
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
