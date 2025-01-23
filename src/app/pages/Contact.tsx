import React, { ReactElement } from "react";
import Particles from "@tsparticles/react";
import { APP_NAME } from "../constants/Global";
import { Application } from "../core/Application";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ParticlesOptsDark } from "../types/ParticlesDark";
import { ParticlesOpts } from "../types/Particles";
import { faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { withTranslation, WithTranslation } from "react-i18next";

interface Email {
    name: string;
    email: string;
    subject: string;
    message: string;
    answer: string;
    validated: boolean;
    error: boolean;
}

class Contact extends React.Component<WithTranslation, Email> {
    constructor(props: WithTranslation) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            answer: "",
            validated: false,
            error: false
        };
    }

    public componentDidMount(): void {
        const { t } = this.props;
        document.title = t("contact_title") + " - " + APP_NAME;
    }

    readonly #handleChange = (event: React.ChangeEvent<HTMLFormElement>): void => {
        const target: EventTarget & HTMLFormElement = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name: string = target.name;

        if (!name) {
            throw new Error("Name is undefined for element in form.");
        }

        this.setState({
            ...this.state,
            ...{
                [name]: value,
            },
        });
    };

    readonly #handleSubmit = async (event: React.FormEvent<HTMLFormElement>, t): Promise<void> => {
        const form: EventTarget & HTMLFormElement = event.currentTarget;
        let isValid: boolean = form.checkValidity();
        let answer = t("contact_success_text");

        event.preventDefault();
        event.stopPropagation();

        this.setState({
            validated: true
        });

        if (isValid) {
            try {
                const response = await fetch("https://formspree.io/f/mgvoeeoe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: this.state.name,
                        email: this.state.email,
                        subject: this.state.subject,
                        message: this.state.message,
                    }),
                });

                if (response.ok) {
                    this.setState({
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    });
                } else {
                    this.setState({
                        error : true,
                    })
                    answer = t("contact_error_text");
                }
            } catch (error) {
                this.setState({
                    error : true
                })
                answer = t("contact_error_text");
            }
            this.setState({
                answer: answer
            })
        }
    };

    public render(): ReactElement | null {
        const { t } = this.props;

        return (
            <Container>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <h2>{t("contact_title")}</h2>
                <Form noValidate validated={this.state.validated} onChange={this.#handleChange} onSubmit={(e) => this.#handleSubmit(e, t) } data-error={this.state.error}>
                    <Form.Group className="mt-4 mb-3" controlId="formName">
                        <Form.Label>{t("contact_name_label")}</Form.Label>
                        <Form.Control type="text" name="name"
                                      placeholder={t("contact_name_placeholder")} required />
                        <Form.Control.Feedback type="invalid" id="invalidEmail">
                            {t("contact_invalid_name")}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>{t("contact_email_label")}</Form.Label>
                        <Form.Control type="email" name="email"
                                      placeholder={t("contact_email_placeholder")} required
                                      pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"/>
                        <Form.Control.Feedback type="invalid" id="invalidEmail">
                            {t("contact_invalid_email")}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mt-4 mb-3" controlId="formSubject">
                        <Form.Label>{t("contact_subject_label")}</Form.Label>
                        <Form.Control type="text" name="subject"
                                              placeholder={t("contact_subject_placeholder")} required/>
                        <Form.Control.Feedback type="invalid" id="invalidSubject">
                            {t("contact_invalid_subject")}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>{t("contact_message_label")}</Form.Label>
                        <Form.Control as="textarea" rows={4} minLength={1} maxLength={750} name="message"
                                      placeholder={t("contact_message_placeholder")} required/>
                        <Form.Control.Feedback type="invalid" id="invalidContact">
                            {t("contact_invalid_message")}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className="mb-4" variant="primary" type="submit">
                        {t("contact_send_button")}
                    </Button>
                    <div className="text-center">
                        {this.state.error ? <p className="text-danger">{this.state.answer}</p>
                          : <p className="text-success">{this.state.answer}</p>}
                    </div>
                </Form>

                <div className="mt-4">
                    <a href="https://www.facebook.com/william.blanchetlafreniere/" className="me-3">
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="#dee2e6" /></a>
                    <a href="https://github.com/VillyGH" className="me-3">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="#dee2e6" /></a>
                    <a href="https://www.instagram.com/william_blanchet_lafreniere/" className="me-3">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#dee2e6" /></a>
                </div>
            </Container>
        );
    }
}

export default withTranslation()(Contact);
