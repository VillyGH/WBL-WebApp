import React, {ReactElement} from "react";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import {ProjectCard} from "../components/ProjectCard";
import TMAcceuil from "../assets/images/TaskMasterAccueil.png";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";

export class Projets extends React.Component {
    public componentDidMount() {
        document.title = "Projets - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
            <h2 className="mt-4 mb-4">Mes projets</h2>
            <section className="mt-4 mb-4">
                <Container>
                    <ProjectCard image={TMAcceuil} title="Project TaskMaster" description="TaskMaster est un gestionnaire d'horaire pour entreprise.
                    En tant qu'application web, TaskMaster est accessible partout et permet à une entreprise de mieux gérer ses effectifs."/>
                </Container>
            </section>
        </div>;
    }
}
