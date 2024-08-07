import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import {ProjectCard} from "../components/ProjectCard";
import TMAcceuil from "../deps/images/TaskMasterAccueil.png";
import InfiniteCraft from "../deps/images/InfiniteCraft.png";
import Revolvair from "../deps/images/Revolvair.jpg";
import SimulationGame from "../deps/images/SimulationGame.png";
import GardienLegend from "../deps/images/GardienLegend.png";
import FactionWar from "../deps/images/Faction_War.png";
import FaceFlow from "../deps/images/FaceFlow.png";
import WIP from "../deps/images/WIP.png";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {Row} from "react-bootstrap";
import "../deps/css/projets.css";

export class Projets extends React.Component {
    public componentDidMount() {
        document.title = "Projets - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts}/>
            <h1 className="mt-4 mb-4">Principaux projets</h1>
            <section className="mt-4 mb-5">
                <Container className="mb-5">
                    <Row>
                        <ProjectCard image={TMAcceuil} link="https://github.com/TaskMaster873/DRFWClient"
                                         title="TaskMaster"
                                         description="TaskMaster est un gestionnaire d'horaire pour entreprise. En tant qu'application web,
                                         TaskMaster est accessible partout et permet à une entreprise de mieux gérer ses effectifs. Projet développé avec React, Typescript puis Firebase en
                                         équipe de quatre avec Felix-Antoine Belleau, David Lawton et Romin Martignat"/>
                        <ProjectCard image={InfiniteCraft}
                                         link="https://www.automa.site/workflow/D4y36oIbejMmDfscMJH4e"
                                         title="InfiniteCraft Bot"
                                         description="Projet simple créé à l'aide de l'extension de navigateur automa qui permet de créer des tâches automatisé depuis un navigateur.
                                             Ce programme permet de jouer à InfiniteCraft automatiquement et ce à l'infini !"/>
                        <ProjectCard image={Revolvair} link="https://gitlab.com/VillyGH/tp3-wbl-fl"
                                         title="Revolvair"
                                         description="Projet développé par William Blanchet Lafrenière et Félix Larrivée (https://gitlab.com/FelixLarrivee1)
                                         dans le cadre du cours de développement mobile et objets connectés. Revolvair est un projet qui consiste à analyser l'air du Québec
                                         par les données récoltées de différentes stations d'analyse de qualité de l'air. Cette application développé en dart avec flutter
                                         comprends une foule de fonctionnalité comme la liste des stations, ses stations favorites, des alertes configurables,
                                         des informations sur les différentes stations et une section de commentaires pour chaque station"/>
                        <ProjectCard image={SimulationGame} link="https://github.com/VillyGH/Simulation-Game"
                                         title="Simulation Game"
                                         description="Deuxième Travail pratique dans le cadre du cours de Jeux vidéo 2.
                                          Ce projet présente un jeu de simulation de tir en 2D entièrement automatique,
                                          dans lequel deux camps s'affrontent. Ce projet avait pour but de s'initier à l'usage de la machine à état,
                                          une fonctionnalité utile pour la mise en œuvre d'intelligence artificielle dans les jeux vidéo."/>
                        <ProjectCard image={GardienLegend} link="https://github.com/VillyGH/TP2-Gardien-Legend"
                                         title="Gardien Legend"
                                         description="Projet pratique final dans le cadre du premier cours de Jeux vidéo. Ce jeu de tir vertical en 2D,
                                         créé en collaboration avec Samuel René (https://github.com/SamuelQidigo), s'inspire du style arcade. Il propose une expérience immersive
                                         comprenant la collecte de bonus et deux phases de jeu, culminant avec un combat de boss intense lors de la seconde phase."/>
                        <ProjectCard image={FactionWar} link="https://github.com/VillyGH/PepsReservationBot"
                                         title="PepsReservationBot"
                                         description="Projet personnel de réservation automatisé de terrain du PEPS de l'université Laval. Programmé en typescript à l'aide du package
                                         puppeteer il comporte un script powershell permettant d'automatiser son exécution à l'avance. Ce projet toujours en développement comportera
                                         une interface utilisateur simple produite sur la base du framework électron."/>
                        <ProjectCard image={FaceFlow} link="https://github.com/VillyGH/FaceFlow"
                                         title="FaceFlow"
                                         description="Projet en équipe de 5 de recherche sur la reconnaissance faciale avec Tensor Flow pour le cours de veille technologique automne 2022.
                                         Programmé en python avec l'outil tensorflow, cette IA permet de reconnaitre un visage et déceler ses caractéristiques qui le rend unique:
                                         les yeux, les cheveux, la couleur de la peau et s'il possède une barbe ou non, puis de les classer les catégories correspondantes.
                                          L'intelligence artificielle a une précision de plus de 78% avec 2 jours d'entrainement"/>
                        <ProjectCard image={WIP} link="https://github.com/VillyGH/PepsReservationBot"
                                         title="PepsReservationBot"
                                         description="Projet personnel de réservation automatisé de terrain du PEPS de l'université Laval. Programmé en typescript à l'aide du package
                                         puppeteer il comporte un script powershell permettant d'automatiser son exécution à l'avance. Ce projet toujours en développement comportera
                                         une interface utilisateur simple produite sur la base du framework électron."/>
                    </Row>
                </Container>
            </section>
        </div>;
    }
}
