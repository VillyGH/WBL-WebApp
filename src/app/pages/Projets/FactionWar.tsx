import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../../core/Application";
import {ParticlesOptsDark} from "../../types/ParticlesDark";
import {ParticlesOpts} from "../../types/Particles";
import {Col, Image, Row} from "react-bootstrap";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FactionWar2 from "../../deps/images/FactionWar2.png";
import FactionWar3 from "../../deps/images/FactionWar3.png";
import "../../deps/css/projets.css";


export class FactionWar extends React.Component {
    public componentDidMount() {
        document.title = "Projet FactionWar - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts}/>
            <h1 className="mt-4 mb-4">Projet FactionWar</h1>
            <section className="mt-4 mb-5">
                <Container className="mb-5">
                    <Row className="justify-content-center">
                        <Image src={FactionWar2} alt="Paramètres de Faction War" className="project-img-xl mt-5 mb-5"/>
                    </Row>
                    <Row className="justify-content-center">
                        <Image src={FactionWar3} alt="Faction War en jeu" className="project-img-xl mt-5 mb-5"/>
                    </Row>
                    <Row className="mt-4 mb-4">
                        <h2 className="mt-4 mb-4">Téléchargement</h2>
                        <Col className="d-flex justify-content-center align-content-center">
                            <a href="https://gitlab.com/glo2004-ift2007/H24-IFT-Equipe1/-/raw/remise_5/equipe01.jar"
                               download="equipe01.jar"
                               className="btn download-button">
                                <span>FactionWar</span>
                                <FontAwesomeIcon icon={faDownload} size="lg" className="download-icon"/></a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>;
    }
}
