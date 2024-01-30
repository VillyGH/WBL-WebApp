import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global";
import Container from "react-bootstrap/Container";
import {Application} from "../core/Application";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";

export class Contact extends React.Component<unknown, Email> {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
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
            const mailtoLink : string = `mailto:wblwebappcontact@gmail.com?subject=
            ${encodeURIComponent(this.state.subject)}&body=${encodeURIComponent(`Nom: ${this.state.name}\nEmail: ${this.state.email}\n\n${this.state.message}`)}`;

            window.location.href = mailtoLink;
        }
    };

    public render(): ReactElement | null {
        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
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

                                <Form.Group className="mt-4 mb-3" controlId="formSubject">
                                    <Form.Label>Sujet</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        value={this.state.subject}
                                        placeholder="Votre sujet"
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
                                    <FontAwesomeIcon icon="facebook" size="2x"/>
                                </a>
                                <a href="https://github.com/VillyGH" className="me-3">
                                    <FontAwesomeIcon icon="github" size="2x"/>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon="reddit" size="2x"/>
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}
