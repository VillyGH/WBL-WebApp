import React, {Component, ReactElement} from "react";
import {RoutesPath} from "../RoutesPath";
import {Link} from "react-router-dom";
import {APP_NAME} from "../constants/Global";
import {Application} from "../core/Application";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import Particles from "@tsparticles/react";

export class RouteNotFound extends Component {
    public componentDidMount() {
        document.title = "Erreur ! Page non trouvé - " + APP_NAME;
    }
    public render(): ReactElement {
        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <div className="d-flex flex-column justify-content-center align-items-center vh-90">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold">404</h1>
                        <p className="fs-3"><span className="text-danger">Oups !</span> La page n’a pas été trouvé.</p>
                        <p className="lead">
                            La page que vous recherchez n’existe pas ou a été déplacée.
                        </p>

                        <Link className="d-block" to={RoutesPath.INDEX}>
                            <button className="btn btn-primary">Retourner à l’accueil</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
