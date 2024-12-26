import React, {ReactElement} from "react";
import {Button, Container} from "react-bootstrap";
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

interface Props {
    toggleDarkMode: (value: boolean) => void;
}

interface State {
    isDarkMode: boolean;
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
export class NavigationBar extends React.Component<Props, State> {
    public state: State = {
        isDarkMode: false
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
        const userPreference: string | null = localStorage.getItem("theme");
        let isDarkMode: boolean = false;

        if (userPreference) {
            isDarkMode = userPreference == "dark";
        } else {
            const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
            if (darkModeQuery !== undefined) {
                isDarkMode = darkModeQuery.matches;
            }
        }
        await this.changeTheme(isDarkMode);
    }

    public render(): ReactElement | null {
        return (
            <Navbar collapseOnSelect expand="xl">
                <Container fluid={true}>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                className="me-3"
                                src={Application.isDarkMode() ? Logo : LogoDark}
                                alt="Logo"
                                width={100}
                                height={60}
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                    <div>
                        <Button className="btn-sm-theme me-3 d-lg-none" onClick={async (): Promise<void> => await this.changeTheme(!this.state.isDarkMode)}>
                            <FontAwesomeIcon icon={this.state.isDarkMode ? faSun : faMoon}/>
                        </Button>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        {this.generalLinks()}
                        <Button className="btn-theme me-3" onClick={async (): Promise<void> => await this.changeTheme(!this.state.isDarkMode)}>
                            <FontAwesomeIcon icon={this.state.isDarkMode ? faSun : faMoon}/>
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

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
        return (
            <Nav className="mx-auto" variant="underline" activeKey="">
                <NavItem link={RoutesPath.PROJETS}
                         label="Projets"/>
                <NavItem link={RoutesPath.EXPERIENCE} label="Expérience"/>
                <NavItem link={RoutesPath.ETUDES} label="Études"/>
                <NavItem link={RoutesPath.REFERENCES} label="Références"/>
                <NavItem link={RoutesPath.CONTACT} label="Contact"/>
                <NavItem link={RoutesPath.APROPOS} label="À propos"/>

            </Nav>

        );
    }


}
