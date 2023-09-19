import React, {ReactElement} from "react";
import {ParticlesOpts} from "../types/Particles";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import Logo from "../assets/images/logo.png";
import {loadFull} from "tsparticles";
import type {Engine} from "tsparticles-engine";
import {Application} from "../core/Application";

/**
 * Ceci est la page : à propos de nous
 */
export class Projets extends React.Component {
    public componentDidMount() {
        document.title = "Projet - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={ParticlesOpts} init={Application.initParticles}/>
            <div className=" justify-content-left">
                <Container className="mt-4 mb-4 d-flex justify-content-center"><h1>{APP_NAME}</h1></Container>
                <Container className="mt-6 mb-4 d-flex justify-content-center"><img
                    className="me-3"
                    src={Logo}
                    v-bind:alt={"Logo" + APP_NAME}
                    width={400}
                    height={240}
                /></Container>
                <Container className="justify-content-left mt-4 mb-4">
                    <div className="me-4 mt-6 d-block  mx-auto">
                        <h2 className="text-left">Auteur</h2>
                        <p className="text-left">William Blanchet Lafrenière</p>
                    </div>
                </Container>
            </div>
        </div>;
    }
}
