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
            <div className=" justify-content-left">
                <Container className="mt-4 mb-4 d-flex justify-content-center"><h1>{APP_NAME}</h1></Container>
                <Container className="justify-content-left mt-4 mb-4">
                    <div className="me-4 mt-6 d-block mx-auto text-left">
                        <p>En développement</p>
                    </div>
                </Container>
            </div>
        </div>;
    }
}
