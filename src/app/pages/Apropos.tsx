import React, {ReactElement} from "react";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import Logo from "../assets/images/logo.png";
import {Application} from "../core/Application";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";


export class Apropos extends React.Component {
    public componentDidMount() {
        document.title = "À propos - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
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
                    <div className="me-4 mt-6 d-block mx-auto text-left">
                        <h2>Auteur</h2>
                        <p>William Blanchet Lafrenière</p>
                    </div>
                </Container>
            </div>
        </div>;
    }
}
