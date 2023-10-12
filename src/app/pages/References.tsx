import React, {ReactElement} from "react";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";

export class References extends React.Component {
    public componentDidMount() {
        document.title = "Références - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
            <div className="justify-content-left">
                <h2 className="mt-4 mb-4">Références</h2>
                <Container className="justify-content-left my-4">
                    <h3>{APP_NAME}</h3>
                    <h4 className="my-4">Configuration :</h4>
                    <p><a href="https://nodejs.org/en">Node JS (version 20.8.0 utilisée dans le projet) </a></p>
                    <p><a href="https://babeljs.io/docs/">Babel (compatibilité avec les anciens navigateurs)</a></p>
                    <h5 className="my-4">Style de la page :</h5>
                    <p><a href="https://react-bootstrap.github.io">React Bootstrap (formatage, thème et composants principaux des pages)</a></p>
                    <p><a href="https://vincentgarreau.com/particles.js/">Particles.js (Animation de fond d'écran)</a></p>
                    <p><a href="https://fontawesome.com/icons">fortawesome/free-brands-svg-icons (Icônes)</a></p>
                </Container>
            </div>
        </div>;
    }
}
