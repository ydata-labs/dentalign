"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import ClientOnly from "../elements/ClientOnly";
import AnnouncementModal from "../elements/AnnouncementModal";
import Footer1 from "./Footer";
import Header from "./Header";
// Define the props interface (same as above)
interface BootstrapComponentsProps {}

// Type the dynamic imports - all animation/DOM manipulation hooks
const BootstrapComponents = dynamic<BootstrapComponentsProps>(
    () => import("@/util/useBootstrap"),
    { ssr: false }
) as FC<BootstrapComponentsProps>;

const AnimationComponents = dynamic(() => import("./AnimationComponents"), {
    ssr: false,
});

interface LayoutProps {
    headerStyle?: Number;
    footerStyle?: Number;
    mainMenuStyle?: string;
    children?: React.ReactNode;
    offcanvas_bg?: any;
    offcanvas_menu?: any;
    offcanvas_social?: any;
}
export default function Layout({
    headerStyle,
    footerStyle,
    mainMenuStyle,
    children,
    offcanvas_bg,
    offcanvas_menu,
    offcanvas_social,
}: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);

    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const handleMobileMenu = (): void => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu
            ? document.body.classList.add("mobile-menu-active")
            : document.body.classList.remove("mobile-menu-active");
    };

    useEffect(() => {
        AOS.init();
        const handleScroll = (): void => {
            const scrollCheck: boolean = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <>
            <div id="top" />
            <ClientOnly>
                <BootstrapComponents />
                <AnimationComponents />
            </ClientOnly>

            <Header
                mainMenuStyle={mainMenuStyle}
                scroll={scroll}
                isMobileMenu={isMobileMenu}
                handleMobileMenu={handleMobileMenu}
                offcanvas_bg={offcanvas_bg}
                offcanvas_menu={offcanvas_menu}
                offcanvas_social={offcanvas_social}
            />

            <main>{children}</main>
            <Footer1 />

            <BackToTop />
        </>
    );
}
