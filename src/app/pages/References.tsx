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
                <h2 className="my-4">Références</h2>
                <Container className="justify-content-left my-5">
                    <h3>{APP_NAME}</h3>
                    <h4 className="my-4">Configuration de l'application:</h4>
                    <p><a href="https://www.typescriptlang.org/tsconfig">TypeScript (Javascript mais avec les types)</a></p>
                    <p><a href="https://nodejs.org/en">Node JS (version 20.8.0 utilisée dans le projet) </a></p>
                    <p><a href="https://docs.npmjs.com">NPM (gestionnaire de packages) </a></p>
                    <p><a href="https://babeljs.io/docs/">Babel (compatibilité avec les anciens navigateurs)</a></p>
                    <p><a href="https://webpack.js.org">Webpack (Regroupement des ressources de l'application en un ensemble de fichier)</a></p>
                    <p><a href="https://typescript-eslint.io/getting-started/">Eslint (Règles sur les meilleures pratiques de programmation)</a></p>
                    <h4 className="my-4">Style de la page :</h4>
                    <p><a href="https://react-bootstrap.github.io">React Bootstrap (formatage, thème et composants principaux des pages)</a></p>
                    <p><a href="https://vincentgarreau.com/particles.js/">Particles.js (Animation de fond d'écran)</a></p>
                    <p><a href="https://fontawesome.com/icons">fortawesome/free-brands-svg-icons (Icônes)</a></p>
                    <h4 className="my-4">Déploiement de l'application:</h4>
                    <p><a href="https://docs.github.com/pages">Github Pages (moyen facile et gratuit de déployer une application web)</a></p>
                    <p><a href="https://dev.to/the_one/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg">Tutoriel comprenant les scripts de déploiement de Github Pages</a></p>
                    <p><a href="https://freedns.afraid.org/subdomain/">FreeDNS (Gestionnaire DNS permettant l'attribution et l'utilisation de domaines gratuits et premiums)</a></p>
                </Container>
            </div>
        </div>;
    }
}
