import React, {ReactElement} from "react";
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
import {Application} from "../core/Application";
import {WithTranslation, withTranslation} from "react-i18next";

interface Props extends WithTranslation {
    toggleDarkMode: (value: boolean) => void;
}

interface State {
    isDarkMode: boolean;
    language: "fr" | "en";
}

/**
 * This is the navigation bar component, it is displayed on every page. It shows the links to the different pages.
 * @returns {ReactElement | null}
 * @constructor
 * @category Components
 * @subcategory Navigation
 * @hideconstructor
 * @see NavigationBarState
 */
class NavigationBar extends React.Component<Props, State> {
    public state: State = {
        isDarkMode: false,
        language: "fr"
    };

    constructor(props: Props) {
        super(props);
    }

    /**
     * React lifecycle method that runs after the component has been mounted.
     * It initializes the component's state based on the user's theme preference stored in localStorage
     * or the system-wide prefers-color-scheme setting.
     * @memberof NavigationBar
     */
    public async componentDidMount(): Promise<void> {
        const userTheme: string | null = localStorage.getItem("theme");
        const userLangage: string | null = navigator.language;
        let isDarkMode: boolean = false;

        if (userTheme) {
            isDarkMode = userTheme == "dark";
        } else {
            const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
            if (darkModeQuery !== undefined) {
                isDarkMode = darkModeQuery.matches;
            }
        }
        await this.changeTheme(isDarkMode);
        if(userLangage === "fr" || userLangage === "en") {
            await this.changeLanguage(userLangage);
        }
    }

    public render(): ReactElement | null {
        return (
            <Navbar expand="xl" fixed="top">
                <Container fluid={true}>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img className="me-3" src={Application.isDarkMode() ? Logo : LogoDark} alt="Logo" width={100} height={60} />
                        </Navbar.Brand>
                    </LinkContainer>
                    <div>
                        <Button className="btn-sm-theme me-3 d-lg-none"
                                onClick={async (): Promise<void> =>
                                this.changeLanguage(this.state.language)}>
                            {this.state.language === "fr" ? "EN" : "FR"}
                        </Button>
                        <Button className="btn-sm-theme me-3 d-lg-none" onClick={async (): Promise<void> => await this.changeTheme(!this.state.isDarkMode)}>
                            <FontAwesomeIcon icon={this.state.isDarkMode ? faSun : faMoon} />
                        </Button>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    </div>
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img className="me-3" src={Application.isDarkMode() ? Logo : LogoDark} alt="Logo" width={100} height={60} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {this.generalLinks()}
                            <div className="mt-3">
                                <Button className="btn-theme me-3"
                                        onClick={async (): Promise<void> =>
                                        this.changeLanguage(this.state.language)}>
                                    {this.state.language === "fr" ? "EN" : "FR"}
                                </Button>
                                <Button className="btn-theme"
                                        onClick={async (): Promise<void> =>
                                        await this.changeTheme(!this.state.isDarkMode)}>
                                    <FontAwesomeIcon icon={this.state.isDarkMode ? faSun : faMoon}/>
                                </Button>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        );
    }

    /**
     * Toggles between the english and French language
     * @memberof NavigationBar
     */
    private changeLanguage = async (language : "fr" | "en"): Promise<void> => {
        this.setState(()=> ({
                language: language === "fr" ? "en" : "fr",
            }), async () => {
                await this.props.i18n.changeLanguage(this.state.language);
            }
        );
    };

    /**
     * Toggles between dark and light modes in the application, and stores the user's preference in localStorage.
     * @returns {Promise<void>} A Promise that resolves when the mode is toggled.
     * @memberof NavigationBar
     * @private
     */
    private changeTheme = async (currentMode: boolean): Promise<void> => {
        this.setState({isDarkMode: currentMode}, () => {
            document.documentElement.setAttribute("data-bs-theme", this.state.isDarkMode ? "dark" : "light");
            localStorage.setItem("theme", this.state.isDarkMode ? "dark" : "light");
            this.props.toggleDarkMode(this.state.isDarkMode);
        });
    }

    /**
     * This function returns the links used to navigate the website
     * @returns {JSX.Element} The navigation links
     * @category Components
     * @subcategory Navigation
     * @hideconstructor
     * @see generalLinks
     * @private
     */
    private generalLinks(): ReactElement {
        const { t } = this.props;
        return (
            <Nav className="mx-auto" variant="underline">
                <NavItem link={RoutesPath.PROJETS} label={t("projets")} />
                <NavItem link={RoutesPath.EXPERIENCE} label={t("experience")} />
                <NavItem link={RoutesPath.ETUDES} label={t("etudes")} />
                <NavItem link={RoutesPath.REFERENCES} label={t("references")} />
                <NavItem link={RoutesPath.CONTACT} label={t("contact")} />
                <NavItem link={RoutesPath.APROPOS} label={t("apropos")} />
            </Nav>
        );
    }
}

export default withTranslation()(NavigationBar);
