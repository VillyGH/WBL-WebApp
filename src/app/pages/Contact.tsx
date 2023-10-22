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

interface State {
    name: string,
    email: string,
    message: string
}

export class Contact extends React.Component<unknown, State> {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }
    public componentDidMount() {
        document.title = "Me contacter - " + APP_NAME;
    }

    readonly #handleChange = (event: React.ChangeEvent<HTMLFormElement>): void => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        if (!name) {
            throw new Error("Name is undefined for element in form.");
        }

        this.setState({
            ...this.state, ...{
                [name]: value,
            }
        });
    };

    readonly #handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        const form = event.currentTarget;
        let isValid = form.checkValidity();

        event.preventDefault();
        event.stopPropagation();

        if (isValid) {
            const data = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            };

            try {
                const response = await fetch("/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                if (response.status === 200) {
                    alert("Courriel envoyé avec succès !");
                } else {
                    alert("Erreur lors de l'envoi du courriel.");
                }
            } catch (error) {
                console.error("Erreur lors de la requête d'envoi de courriel :", error);
            }
        }
    };

    public render(): ReactElement | null {
        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
                <div className="justify-content-left">
                    <Container className="justify-content-left mt-4 mb-4">
                        <div className="me-4 mt-6 d-block mx-auto">
                            <h2 className="text-left">Me contacter</h2>

                            <Form onChange={this.#handleChange} onSubmit={this.#handleSubmit}>
                                <Form.Group className="mt-4 mb-3" controlId="formName">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        placeholder="Votre nom"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        placeholder="Votre email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        value={this.state.message}
                                        placeholder="Votre message"
                                    />
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
