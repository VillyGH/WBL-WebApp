import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global"
import {Application} from "../core/Application";
import BureauRQ from "../assets/images/BureauRQ.jpg"
import BureauRAMQ from "../assets/images/BureauRAMQ.jpg"
import BureauCNESST from "../assets/images/BureauCNESST.png"
import "../assets/css/experience.css"
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {Col, Container, Image, Row} from "react-bootstrap";

export class Experience extends React.Component {
    public componentDidMount() {
        document.title = "Expérience - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
            <h2 className="mt-4 mb-4">Expérience de travail</h2>

            <Container fluid="sm">
                <Row>
                        <Col xl={6} xxl={5}>
                            <Image className="img-responsive" src={BureauRQ} alt="Bureau de Revenu Québec Marly"/>
                        </Col>
                        <Col xl={6} xxl={7}>
                            <div>
                                <h3>Revenu Québec</h3>
                                <p>Printemps à été 2023</p>
                            </div>
                        </Col>
                </Row>
                <Row className="my-4">
                    <Col xl={6} xxl={5}>
                        <Image className="img-responsive" src={BureauRAMQ}
                               alt="Bureau de la régie de l'assurance santé du québec"/>
                    </Col>
                    <Col xl={6} xxl={7}>
                        <div>
                            <h3>Régie de l'assurance maladie du Québec (RAMQ)</h3>
                            <p>Été 2022</p>
                        </div>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col xl={6} xxl={5}>
                        <Image className="img-responsive" fluid src={BureauCNESST}
                               alt="Bureau de la régie de l'assurance santé du québec"/>
                    </Col>
                    <Col xl={6} xxl={7}>
                        <div>
                            <h3>Commission sur les normes, l'équité, la santé et la sécurité au travail (CNESST)</h3>
                            <p>Été 2021</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}
