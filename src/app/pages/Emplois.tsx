import React, {ReactElement} from "react";
import {ParticlesOpts} from "../types/Particles";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import OVGAccueil from "../assets/images/OVGAccueil.png"
import BureauRAMQ from "../assets/images/BureauRAMQ.jpg"
import BureauRQ from "../assets/images/BureauRQ.jpg"
import "../assets/css/emplois.css"

export class Emplois extends React.Component {
    public componentDidMount() {
        document.title = "Emplois - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={ParticlesOpts} init={Application.initParticles}/>
            <div className="justify-content-left">
                <Container className="mt-4 mb-4 d-flex justify-content-center"><h2>Emplois</h2></Container>
            </div>

            <div className="d-flex mb-4">
                <div className="event-image ml-4 mx-4">
                    <img src={BureauRQ} alt="Bureau de Revenu Québec Marly"/>
                </div>
                <div>
                    <h2>Revenu Québec</h2>
                    <p>Printemps à été 2023</p>
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="event-image ml-4 mx-4">
                    <img src={BureauRAMQ} alt="Bureau de la régie de l'assurance santé du québec"/>
                </div>
                <div>
                    <h2>Régie de l'assurance maladie du Québec</h2>
                    <p>Été 2022</p>
                </div>
            </div>
        </div>;
    }
}
