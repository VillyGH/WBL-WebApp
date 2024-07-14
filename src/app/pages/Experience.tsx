import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global"
import {Application} from "../core/Application";
import BureauRQ from "../deps/images/BureauRQ.jpg"
import BureauRAMQ from "../deps/images/BureauRAMQ.jpg"
import BureauCNESST from "../deps/images/BureauCNESST.png"
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {Col, Container, Image, Row} from "react-bootstrap";
import "../deps/css/experience.css"

export class Experience extends React.Component {
    public componentDidMount() {
        document.title = "Expérience - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts}/>
            <h2 className="mt-4 mb-4">Expérience de travail</h2>

            <Container fluid="sm">
                <Row className="my-4">
                    <Col xl={6} xxl={5}>
                        <Image className="img-responsive" src={BureauRAMQ}
                               alt="Bureau de la régie de l'assurance santé du québec"/>
                    </Col>
                    <Col xl={6} xxl={7}>
                        <div>
                            <h3>Régie de l'assurance maladie du Québec (RAMQ)</h3>
                            <p>Juin à août 2022 puis de mai à août 2024</p>
                            <p>Tâches effectuées:</p>
                            <ul>
                                <li>Réalisation d'activités de programmation sur différentes plateformes et mise en place de
                                    plusieurs niveaux d'essais</li>
                                <li>Participation à l'implantation de systèmes et production de solutions informatiques</li>
                                <li>Mise à jour d'infrastructures technologiques déjà existantes</li>
                                <li>Collaboration aux activités reliées à la formation et au transfert de connaissances</li>
                                <li>Production de la documentation technique</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6} xxl={5}>
                        <Image className="img-responsive" src={BureauRQ} alt="Bureau de Revenu Québec Marly"/>
                    </Col>
                    <Col xl={6} xxl={7}>
                        <div>
                            <h3>Revenu Québec</h3>
                            <p>Mars à Août 2023</p>
                            <p>Tâches effectuées:</p>
                            <ul>
                                <li>Planification d’un projet complet de développement d’un logiciel de comparaison de
                                    versions de composants logiciels par la création de maquettes et de récits utilisateurs
                                    à partir des besoins établis par les architectes logiciels.</li>
                                <li>Réalisation du projet en collaboration avec un collègue sous la supervision des architectes</li>
                                <li>Production de tests fonctionnels visant à valider l'efficacité globale du projet</li>
                                <li>Mise en place des pipelines CI/CD pour automatiser le processus de développement</li>
                                <li>Mise en œuvre de nouvelles fonctionnalités en réponse aux besoins évolutifs</li>
                                <li>Documentation des processus de développement et de déploiement</li>
                            </ul>
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
                            <p>Juin à Août 2022</p>
                            <p>Tâches effectuées:</p>
                            <ul>
                                <li>Mise à jour et développement de la structure de gestion documentaire électronique du service de l'aménagement et des projets immobiliers</li>
                                <li>Classement des documents à l'aide du manuel de conservation des documents</li>
                                <li>Propositions de modifications pertinentes en conformité avec la volonté des membres du service</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}
