import React, {useCallback, useEffect, useState} from "react";
import {Button, Container, Offcanvas} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import Logo from "../deps/images/logo.png";
import LogoDark from "../deps/images/logoDark.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {RoutesPath} from "../RoutesPath";
import {ComponentNavItem as NavItem} from "./ComponentNavItem";
import {useTranslation} from "react-i18next";

interface NavigationBarProps {
    isDarkMode: boolean;
    toggleDarkMode: (value: boolean) => void;
}

export default function NavigationBar({isDarkMode, toggleDarkMode}: NavigationBarProps) {
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState<"fr" | "en">("fr");
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const init = async (): Promise<void> => {
            const userTheme = localStorage.getItem("theme");
            const dark =
                userTheme != null
                    ? userTheme === "dark"
                    : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            applyTheme(dark);

            const userLang = navigator.language ? (navigator.language.slice(0, 2) as "fr" | "en") : "fr";
            if (userLang === "fr" || userLang === "en") {
                await changeLanguage(userLang);
            }
        };
        init().catch((e) => console.error(t("translation_error"), e));
    }, []);

    useEffect(() => {
        setShowModal(false);
    }, [location]);

    const changeLanguage = useCallback(
        async (lang: "fr" | "en"): Promise<void> => {
            await i18n.changeLanguage(lang);
            setLanguage(lang);
        },
        [i18n]
    );

    const applyTheme = useCallback(
        (dark: boolean) => {
            toggleDarkMode(dark);
            document.documentElement.setAttribute("data-bs-theme", dark ? "dark" : "light");
            localStorage.setItem("theme", dark ? "dark" : "light");
        },
        [toggleDarkMode]
    );

    const toggleLanguage = async () => changeLanguage(language === "fr" ? "en" : "fr");
    const toggleTheme = () => applyTheme(!isDarkMode);

    const commonLinks = () => (
        <Nav className="mx-auto" variant="underline">
            <NavItem link={RoutesPath.PROJETS} label={t("projets")}
                     onClick={() => setShowModal(false)}/>
            <NavItem link={RoutesPath.EXPERIENCE} label={t("experience")}
                     onClick={() => setShowModal(false)}/>
            <NavItem link={RoutesPath.ETUDES} label={t("etudes")}
                     onClick={() => setShowModal(false)}/>
            <NavItem link={RoutesPath.GROUPES} label={t("groupes")}
                     onClick={() => setShowModal(false)}/>
            <NavItem link={RoutesPath.REFERENCES} label={t("references")}
                     onClick={() => setShowModal(false)}/>
            <NavItem link={RoutesPath.CONTACT} label={t("contact")}
                     onClick={() => setShowModal(false)}/>
            <NavItem link={RoutesPath.APROPOS} label={t("apropos")}
                     onClick={() => setShowModal(false)}/>
        </Nav>
    );

    const optionButtons = (
        <div className="d-flex gap-3">
            <Button onClick={toggleLanguage}>{language === "fr" ? "EN" : "FR"}</Button>
            <Button onClick={toggleTheme}>
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon}/>
            </Button>
        </div>
    )

    return (
        <Navbar expand="xxl" fixed="top">
            <Container fluid className="d-flex align-items-center position-relative">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img className="me-2" src={isDarkMode ? Logo : LogoDark} alt="Logo" width={115} height={75}/>
                    </Navbar.Brand>
                </LinkContainer>

                <div className="d-none position-absolute start-50 translate-middle-x d-xxl-flex">{commonLinks()}</div>


                <div className="d-xxl-none d-flex gap-3">
                    {optionButtons}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShowModal(true)}/>
                </div>

                <Navbar.Offcanvas show={showModal} onHide={() => setShowModal(false)} id="offcanvasNavbar"
                                  placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <LinkContainer to="/" onClick={() => setShowModal(false)}>
                                <img className="me-3" src={isDarkMode ? Logo : LogoDark} alt="Logo" width={80}
                                     height={60}/>
                            </LinkContainer>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div
                            className="d-xxl-none d-flex flex-column align-items-center w-100 gap-4">{commonLinks()}</div>
                        <div
                            className="ms-xxl-auto flex-xxl-row d-flex gap-4 gap-xxl-3 justify-content-center align-items-center flex-column mt-xxl-0 mt-4 mx-xxl-3">
                            <div className="d-xxl-flex d-none gap-3">
                                {optionButtons}
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
