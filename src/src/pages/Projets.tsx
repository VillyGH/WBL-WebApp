import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import {ProjectCard} from "../components/ProjectCard";
import TMAcceuil from "../deps/images/TaskMasterAccueil.png";
import SimulationGame from "../deps/images/SimulationGame.png";
import InfiniteCraft from "../deps/images/InfiniteCraft.png";
import GardienLegend from "../deps/images/GardienLegend.png";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {Col, Row} from "react-bootstrap";

export class Projets extends React.Component {
    public componentDidMount() {
        document.title = "Projets - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts}/>
            <h2 className="mt-4 mb-4">Mes projets</h2>
            <section className="mt-4 mb-5">
                <Container className="mb-5">
                    <Row>
                        <Col sm="12" lg="6">
                            <ProjectCard image={TMAcceuil} link="https://github.com/TaskMaster873/DRFWClient"
                                         title="TaskMaster"
                                         description="TaskMaster est un gestionnaire d'horaire pour entreprise. En tant qu'application web,
                                         TaskMaster est accessible partout et permet à une entreprise de mieux gérer ses effectifs."/>
                        </Col>
                        <Col sm="12" lg="6">
                            <ProjectCard image={SimulationGame} link="https://github.com/VillyGH/Simulation-Game"
                                         title="Simulation Game"
                                         description="Deuxième Travail pratique dans le cadre du cours de Jeux vidéo 2.
                                          Ce projet présente un jeu de simulation de tir en 2D entièrement automatique,
                                          mettant en vedette deux équipes dont la mission est d'éliminer la base adverse.
                                          Il se distingue par son exploration avancée de la machine à état, une fonctionnalité
                                          utile pour la mise en œuvre d'intelligence artificielle dans les jeux vidéo."/>
                        </Col>
                        <Col sm="12" lg="6">
                            <ProjectCard image={GardienLegend} link="https://github.com/VillyGH/TP2-Gardien-Legend"
                                         title="Gardien Legend"
                                         description="Projet pratique final dans le cadre du cours de Jeux vidéo. Ce jeu de tir vertical en 2D,
                                         créé en collaboration avec un partenaire, s'inspire du style arcade. Il propose une expérience immersive
                                         comprenant la collecte de bonus et deux phases de jeu, culminant avec un combat de boss intense lors de la seconde phase."/>
                        </Col>
                        <Col sm="12" lg="6">
                                <ProjectCard image={InfiniteCraft} link="https://www.automa.site/workflow/D4y36oIbejMmDfscMJH4e"
                                             title="InfiniteCraft Bot"
                                             description="Projet simple créé à l'aide de l'extension de navigateur automa qui permet de créer des tâches automatisé depuis un navigateur.
                                             Ce programme permet de jouer à InfiniteCraft automatiquement et ce à l'infini !"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>;
    }
}
