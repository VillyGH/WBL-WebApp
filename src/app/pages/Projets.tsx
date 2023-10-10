import React, {ReactElement} from "react";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import {ProjectCard} from "../components/ProjectCard";
import TMAcceuil from "../assets/images/TaskMasterAccueil.png";
import TP3AppWeb from "../assets/images/TP3AppWeb.png";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {Col, Row} from "react-bootstrap";

export class Projets extends React.Component {
    public componentDidMount() {
        document.title = "Projets - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
            <h2 className="mt-4 mb-4">Mes projets</h2>
            <section className="mt-4 mb-5">
                <Container className="mb-5">
                    <Row>
                        <Col>
                            <ProjectCard image={TMAcceuil} link="https://github.com/TaskMaster873/DRFWClient" title="Project TaskMaster"
                                         description="TaskMaster est un gestionnaire d'horaire pour entreprise. En tant qu'application web,
                                         TaskMaster est accessible partout et permet à une entreprise de mieux gérer ses effectifs." />
                        </Col>
                        <Col>
                            <ProjectCard image={TP3AppWeb} link="https://github.com/VillyGH/tp3-depart"  title="TP3 Application Web"
                                         description="Troisième Travail pratique dans le cadre du cours d'application web. Ce projet avait pour but de permettre l'exploration
                                         des tronçons appartenant à de nombreux tragets présents dans une bases de données à partir d'une simple application web." />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>;
    }
}
