import React, {ReactElement} from "react";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import {Application} from "../core/Application";
import BureauRAMQ from "../assets/images/BureauRAMQ.jpg"
import BureauRQ from "../assets/images/BureauRQ.jpg"
import "../assets/css/emplois.css"
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";

export class Etudes extends React.Component {
    public componentDidMount() {
        document.title = "Emplois - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
            <h2 className="mt-4 mb-4">Emplois</h2>

            <div className="d-flex mb-4">
                <div className="event-image ml-4 mx-4">
                    <img src={BureauRQ} alt="Bureau de Revenu Québec Marly"/>
                </div>
                <div>
                    <h3>Revenu Québec</h3>
                    <p>Printemps à été 2023</p>
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="event-image ml-4 mx-4">
                    <img src={BureauRAMQ} alt="Bureau de la régie de l'assurance santé du québec"/>
                </div>
                <div>
                    <h3>Régie de l'assurance maladie du Québec</h3>
                    <p>Été 2022</p>
                </div>
            </div>
        </div>;
    }
}
