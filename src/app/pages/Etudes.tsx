import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global"
import {Application} from "../core/Application";
import Camaradiere from "../deps/images/Camaradiere.png"
import CegepSainteFoy from "../deps/images/CegepSainteFoy.png"
import ULaval from "../deps/images/ULaval.png"
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {Container, Image, Row} from "react-bootstrap";
import "../deps/css/etudes.css"

export class Etudes extends React.Component {
    public componentDidMount() {
        document.title = "Études - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts}/>
            <h2 className="mt-4 mb-4">Études</h2>

            <Container fluid="sm" className="mb-5">
                    <Row className="mb-4">
                        <Image className="img-responsive" src={ULaval} alt="Université Laval"/>
                        <div className="mt-2">
                            <h3>Université Laval</h3>
                            <p>Études universitaires en cours</p>
                            <p>Baccalauréat en informatique</p>
                            <p>2024 - </p>
                        </div>
                    </Row>
                    <Row className="mb-5">
                        <Image className="img-responsive" src={CegepSainteFoy} alt="Cégep de Sainte-Foy"/>
                        <div className="mt-2">
                            <h3>Cégep de Sainte-Foy</h3>
                            <p>Diplôme d'études collégiales</p>
                            <p>Technique de l'informatique: programmation web, mobile et jeux vidéo</p>
                            <p>2020 - 2023</p>
                        </div>
                    </Row>
                    <Row className="mb-4">
                        <Image className="img-responsive img-cama" src={Camaradiere}
                               alt="École secondaire La Camaradière"/>
                        <div className="mt-2">
                            <h3>École Secondaire La Camaradière</h3>
                            <p>Diplôme d'études secondaires</p>
                            <p>Concentration arts et technologies de l'information et communication (Arts et TIC)</p>
                            <p>2015 - 2020</p>
                        </div>
                    </Row>
            </Container>
        </div>;
    }
}
