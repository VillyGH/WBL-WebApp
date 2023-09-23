import React, {ReactElement} from "react";
import {ParticlesOpts} from "../types/Particles";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";

/**
 * Ceci est la page : Me contacter
 */
export class Contact extends React.Component {
    public componentDidMount() {
        document.title = "Me contacter - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={ParticlesOpts} init={Application.initParticles}/>
            <div className=" justify-content-left">
                <Container className="mt-4 mb-4 d-flex justify-content-center"><h1>{APP_NAME}</h1></Container>
                <Container className="justify-content-left mt-4 mb-4">
                    <div className="me-4 mt-6 d-block mx-auto">
                        <h2 className="text-left">Me contacter</h2>
                        <p className="text-left"></p>
                    </div>
                </Container>
            </div>
        </div>;
    }
}
