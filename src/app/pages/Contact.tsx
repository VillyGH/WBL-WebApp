import React, {ReactElement} from "react";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global";
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faReddit} from "@fortawesome/free-brands-svg-icons";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";

export class Contact extends React.Component {
    public componentDidMount() {
        document.title = "Me contacter - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
                <div className="justify-content-left">
                    <Container className="mt-4 mb-4 d-flex justify-content-center">
                        <h1>{APP_NAME}</h1>
                    </Container>
                    <Container className="justify-content-left mt-4 mb-4">
                        <div className="me-4 mt-6 d-block mx-auto">
                            <h2 className="text-left">Me contacter</h2>

                            <Form>
                                <Form.Group className="mt-4 mb-3" controlId="formName">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" placeholder="Votre nom"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Votre email"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Votre message"/>
                                </Form.Group>

                                <Button className="mb-4" variant="primary" type="submit">
                                    Envoyer
                                </Button>
                            </Form>

                            <div className="mt-4">
                                <a href="#" className="me-3">
                                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                                </a>
                                <a href="https://github.com/VillyGH" className="me-3">
                                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faReddit} size="2x"/>
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}
