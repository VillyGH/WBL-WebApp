import React, {ReactElement} from "react";
import {ParticlesOpts} from "../types/Particles";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import {ProjectCard} from "../components/ProjectCard";
import TMAcceuil from "../assets/images/TaskMasterAccueil.png";

export class Projets extends React.Component {
    public componentDidMount() {
        document.title = "Projets - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={ParticlesOpts} init={Application.initParticles}/>
            <div className=" justify-content-left">
                <Container className="mt-4 mb-4 d-flex justify-content-center"><h1>{APP_NAME}</h1></Container>
            </div>

            <section className="mt-4 mb-4">
                <Container>
                    <ProjectCard image={TMAcceuil} title="Project TaskMaster" description="TaskMaster est un gestionnaire d'horaire pour entreprise.
                    En tant qu'application web, TaskMaster est accessible partout et permet à une entreprise de mieux gérer ses effectifs."/>
                </Container>
            </section>
        </div>;
    }
}
