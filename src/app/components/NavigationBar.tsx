import React, {ReactElement} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import Logo from "../assets/images/logo.png";
import {APP_NAME} from "../constants/Global";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faBriefcase, faCode, faEnvelope, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {RoutesPath} from "../RoutesPath";
import {ComponentNavItem as NavItem} from "./ComponentNavItem";

interface State {
    toggle: boolean;
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
export class NavigationBar extends React.Component<unknown, State> {
    public state: State = {
        toggle: false
    };

    public render(): ReactElement | null {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" className={"navbar-element"}>
                <Container fluid={true}>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                className="me-3"
                                src={Logo}
                                alt="Logo"
                                width={100}
                                height={60}
                            />
                            {APP_NAME}
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
                <NavItem icon={<FontAwesomeIcon icon={faCode}/>} link={RoutesPath.PROJETS}
                         label="Projets" description="Explorez les projets que j'ai réalisés au cours de mon parcours en tant que développeur." />
                <NavItem icon={<FontAwesomeIcon icon={faBriefcase}/>} link={RoutesPath.EMPLOIS} label="Emplois"
                         description="Découvrez les emplois que j'ai effectués au cours de ma carrière."/>
                <NavItem icon={<FontAwesomeIcon icon={faBook}/>} link={RoutesPath.REFERENCES}
                         label="Références" description="Consultez les références qui ont été utilisées comme sources pour la création de mes projets."/>
                <NavItem icon={<FontAwesomeIcon icon={faEnvelope}/>} link={RoutesPath.CONTACT} label="Contact"
                         description="Contactez-moi pour toute question, commentaire ou demande de renseignements."/>
                <NavItem icon={<FontAwesomeIcon icon={faInfoCircle}/>} link={RoutesPath.APROPOS} label="À propos"
                         description="Découvrez davantage d'informations sur cette application web et son créateur"/>
            </Nav>
        );
    }
}
