import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global"
import {Application} from "../core/Application";
import Camaradiere from "../assets/images/Camaradiere.jpeg"
import CegepSainteFoy from "../assets/images/CegepSainteFoy.png"
import "../assets/css/etudes.css"
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {Col, Container, Image, Row} from "react-bootstrap";

export class Etudes extends React.Component {
    public componentDidMount() {
        document.title = "Études - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts}/>
            <h2 className="mt-4 mb-4">Études</h2>

            <Container fluid="sm">
                <Row className="mb-4">
                    <Col className="">
                        <Image className="img-responsive" src={CegepSainteFoy} alt="Cégep de Sainte-Foy"/>
                        <div className="mt-2">
                            <h3>Cégep de Sainte-Foy</h3>
                            <p>Technique de l'informatique: programmation web, mobile et jeux vidéo</p>
                            <p>2020 - 2023</p>
                        </div>
                    </Col>
                    <Col>
                        <Image className="img-responsive img-cama" src={Camaradiere}
                               alt="École secondaire La Camaradière"/>
                        <div className="mt-2">
                            <h3>École Secondaire La Camaradière</h3>
                            <p>Concentration arts et technologies de l'information et communication (Arts et TIC)</p>
                            <p>2015 - 2020</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}
