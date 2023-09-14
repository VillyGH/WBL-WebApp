import React, {ReactElement} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import Logo from "../assets/images/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faCalendarDays,
    faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import {RoutesPath} from "../RoutesPath";
import {ComponentNavItem as NavItem} from "./ComponentNavItem";

interface State {
    toggle: boolean;
}

/**
 * This is the navigation bar component, it is displayed on every page. It shows the links to the different pages and the login button.
 * @returns {JSX.Element}
 * @constructor
 * @category Components
 * @subcategory Navigation
 * @hideconstructor
 * @see NavigationBarState
 */
export class NavigationBar extends React.Component<unknown, State> {
    public state: State = {
        toggle: false
    };

    public render(): JSX.Element {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" className={"navbar-element"}>
                <Container fluid={true}>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                className="me-3"
                                src={Logo.src}
                                alt="Logo TaskMaster"
                                width={50}
                                height={60}
                            />
                            TaskMaster
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {this.generalLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    private async toggle(): Promise<void> {
        this.setState({toggle: !this.state.toggle});
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
            <Nav activeKey="">
                <NavItem icon={<FontAwesomeIcon icon={faCalendarDays}/>} link={RoutesPath.PROJETS}
                         label="Création d'horaire" description="Gérez les quarts de travail"/>
                <NavItem icon={<FontAwesomeIcon icon={faClipboard}/>} link={RoutesPath.REFERENCES}
                         label="Gestion des disponibilités" description="Gérez les demandes de disponibilités"/>
                <NavItem icon={<FontAwesomeIcon icon={faBuilding}/>} link={RoutesPath.ABOUT} label="À propos"
                         description="À propos de WBL-WebApp"/>
            </Nav>
        );
    }
}
