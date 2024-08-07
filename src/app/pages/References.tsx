import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
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
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
            <div className="justify-content-left">
                <h2 className="my-4">Références</h2>
                <Container className="justify-content-left my-5">
                    <h3>{APP_NAME}</h3>
                    <h4 className="my-4">Configuration de l'application:</h4>
                    <p><a href="https://www.typescriptlang.org/tsconfig">TypeScript (Javascript mais avec les types)</a></p>
                    <p><a href="https://nodejs.org/en">Node JS (version 20.8.0 utilisée dans le projet) </a></p>
                    <p><a href="https://docs.npmjs.com">NPM (gestionnaire de dépendances du projet) </a></p>
                    <p><a href="https://babeljs.io/docs/">Babel (compatibilité avec les anciens navigateurs)</a></p>
                    <p><a href="https://webpack.js.org">Webpack (Regroupement des ressources de l'application en un ensemble de fichier)</a></p>
                    <p><a href="https://typescript-eslint.io/getting-started/">Eslint (Règles sur les meilleures pratiques de programmation)</a></p>
                    <h4 className="my-4">Style de la page :</h4>
                    <p><a href="https://react-bootstrap.github.io">React Bootstrap (formatage, thèmes et styles des pages)</a></p>
                    <p><a href="https://vincentgarreau.com/particles.js/">Particles.js (Animation de fond d'écran)</a></p>
                    <p><a href="https://fontawesome.com/icons">fortawesome/free-brands-svg-icons (Icônes)</a></p>
                    <p><a href="https://codepen.io/leandrosimoes/pen/VqZxaG">Animation brillante multicolore (Auteur: Leandro Simões)</a></p>
                    <h4 className="my-4">Déploiement de l'application:</h4>
                    <p><a href="https://pages.cloudflare.com">Cloudflare Pages (moyen facile et gratuit de déployer une application web)</a></p>
                    <p><a href="https://blog.logrocket.com/deploying-react-app-full-stack-cloudflare-pages/">Tutoriel sur le déploiement de Cloudflare Pages avec React.JS</a></p>
                    <p><a href="https://freedns.afraid.org/subdomain/">FreeDNS (Gestionnaire DNS permettant l'attribution et l'utilisation de domaines gratuits et premiums)</a></p>
                    <p><a href="https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates">Dependabot (Mise à jour automatique des dépendances du projet)</a></p>
                </Container>
            </div>
        </div>;
    }
}
