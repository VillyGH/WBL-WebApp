import React, {ReactElement} from "react";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import {Application} from "../core/Application";
import Camaradiere from "../assets/images/Camaradiere.png"
import CegepSainteFoy from "../assets/images/CegepSainteFoy.png"
import "../assets/css/emplois.css"
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";

export class Etudes extends React.Component {
    public componentDidMount() {
        document.title = "Études - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
            <h2 className="mt-4 mb-4">Études</h2>

            <div className="d-flex mb-4">
                <div className="ml-4 mx-4">
                    <img className="img-fluid" src={CegepSainteFoy} alt="Cégep de Sainte-Foy"/>
                </div>
                <div>
                    <h3>Cégep de Sainte-Foy</h3>
                    <p>Technique de l'informatique: programmation web, mobile et jeux vidéo</p>
                    <p>2020 - 2023</p>
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="ml-4 mx-4">
                    <img className="img-fluid max-w-2xl" src={Camaradiere} alt="École secondaire La Camaradière"/>
                </div>
                <div>
                    <h3>École Secondaire La Camaradière</h3>
                    <p>Concentration arts et technologies de l'information et communication (Arts et TIC)</p>
                    <p>2015 - 2020</p>
                </div>
            </div>
        </div>;
    }
}
