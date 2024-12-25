import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global"
import {Row, Container} from "react-bootstrap";
import {Application} from "../core/Application";
import {ProjectCard} from "../components/ProjectCard";
import TMAcceuil from "../deps/images/TaskMasterAccueil.png";
import InfiniteCraft from "../deps/images/InfiniteCraft.png";
import Revolvair from "../deps/images/Revolvair.jpg";
import CIAUL from "../deps/images/CIAUL.png";
import GardienLegend from "../deps/images/GardienLegend.png";
import FactionWar from "../deps/images/Faction_War.png";
import FaceFlow from "../deps/images/FaceFlow.png";
import Peps from "../deps/images/Peps.png";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {faDownload, faTrophy} from "@fortawesome/free-solid-svg-icons";
import {RoutesPath} from "../RoutesPath";
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
                        <ProjectCard image={Peps} link={RoutesPath.PEPSRESERVATIONBOT}
                                     title="PepsReservationBot"
                                     description="Projet personnel de réservation automatisé de terrain du PEPS de l'Université Laval. Développé en Typescript à l'aide du package
                                         puppeteer il comporte un script powershell permettant de planifier précisement le moment pour réserver un terrain à un horaire prédéfini"
                                     icon={faDownload}
                                     targetBlank={false}/>
                        <ProjectCard image={Revolvair} link="https://gitlab.com/VillyGH/tp3-wbl-fl"
                                     title="Revolvair"
                                     description="Projet développé par William Blanchet Lafrenière et Félix Larrivée dans le cadre du cours de développement mobile et objets connectés.
                                         Revolvair est un projet qui consiste à analyser l'air du Québec par les données récoltées de différentes stations d'analyse de qualité de l'air.
                                         Cette application a gagné le premier prix du concours meilleure application mobile Revolvair"
                                     icon={faTrophy}/>
                        <ProjectCard image={TMAcceuil} link="https://github.com/TaskMaster873/DRFWClient"
                                         title="TaskMaster"
                                         description="TaskMaster est un gestionnaire d'horaire pour entreprise. En tant que solution web complète,
                                         TaskMaster permet à une entreprise de mieux gérer ses effectifs. Projet développé avec React, Typescript et Firebase en
                                         équipe de quatre avec Felix-Antoine Belleau, David Lawton et Romin Martignat"/>
                        <ProjectCard image={CIAUL} link="https://github.com/cia-ulaval/EEG_flappy_bird"
                                     title="EEG_flappy_bird"
                                     description="Jeu Flappy bird controllable depuis un electroencephalogramme (EEG) réalisé avec l'équipe jeu du club d'intelligence artificielle de l'Université Laval."/>
                        <ProjectCard image={InfiniteCraft}
                                         link="https://www.automa.site/workflow/D4y36oIbejMmDfscMJH4e"
                                         title="InfiniteCraft Bot"
                                         description="Projet simple créé à l'aide de l'extension de navigateur automa qui permet de créer des tâches automatisé depuis un navigateur.
                                             Ce programme permet de jouer à InfiniteCraft automatiquement et indéfiniment."/>
                        <ProjectCard image={GardienLegend} link="https://github.com/VillyGH/TP2-Gardien-Legend"
                                         title="Gardien Legend"
                                         description="Projet pratique final dans le cadre du premier cours de Jeux vidéo. Ce jeu de tir vertical en 2D,
                                         créé en collaboration avec Samuel René, s'inspire du style arcade. Il propose une expérience immersive
                                         comprenant la collecte de bonus et deux phases de jeu, culminant avec un combat de boss intense lors de la seconde phase."/>
                        <ProjectCard image={FactionWar} link="https://github.com/VillyGH/PepsReservationBot"
                                         title="FactionWar"
                                         description="Projet pratique effectué dans le cours d'analyse et conception des systèmes orientés objets (IFT-2007).
                                         Le jeu programmé en Java est une simulation automatique de deux armées qui se combattent sur le champ de bataille."/>
                        <ProjectCard image={FaceFlow} link="https://github.com/VillyGH/FaceFlow"
                                         title="FaceFlow"
                                         description="Projet en équipe de 5 de recherche sur la reconnaissance faciale avec Tensor Flow pour le cours de veille technologique à l'automne 2022.
                                         Programmé en python avec l'outil tensorflow, cette IA permet de reconnaitre un visage, déceler ses caractéristiques et les classer dans
                                         les catégories correspondantes. L'intelligence artificielle a une précision de plus de 78% avec 2 jours d'entrainement"/>
                    </Row>
                </Container>
            </section>
        </div>;
    }
}
