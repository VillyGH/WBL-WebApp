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
}

class Contact extends React.Component<WithTranslation, Email> {
    constructor(props: WithTranslation) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
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

    readonly #handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        const form: EventTarget & HTMLFormElement = event.currentTarget;
        let isValid: boolean = form.checkValidity();

        event.preventDefault();
        event.stopPropagation();

        if (isValid) {
            const mailtoLink: string = `mailto:wblwebappcontact@gmail.com?subject=
            ${encodeURIComponent(this.state.subject)}&body=${encodeURIComponent(
                `Nom: ${this.state.name}\nEmail: ${this.state.email}\n\n${this.state.message}`
            )}`;

            window.location.href = mailtoLink;
        }
    };

    public render(): ReactElement | null {
        const { t } = this.props;

        return (
            <Container>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <h2>{t("contact_title")}</h2>
                <Form onChange={this.#handleChange} onSubmit={this.#handleSubmit}>
                    <Form.Group className="mt-4 mb-3" controlId="formName">
                        <Form.Label>{t("contact_name_label")}</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name}
                                      placeholder={t("contact_name_placeholder")} readOnly/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>{t("contact_email_label")}</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email}
                                      placeholder={t("contact_email_placeholder")} readOnly />
                    </Form.Group>

                    <Form.Group className="mt-4 mb-3" controlId="formSubject">
                        <Form.Label>{t("contact_subject_label")}</Form.Label>
                        <Form.Control type="text" name="subject" value={this.state.subject}
                                              placeholder={t("contact_subject_placeholder")} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>{t("contact_message_label")}</Form.Label>
                        <Form.Control as="textarea" rows={4} name="message" value={this.state.message}
                                      placeholder={t("contact_message_placeholder")} readOnly />
                    </Form.Group>
                    <Button className="mb-4" variant="primary" type="submit">
                        {t("contact_send_button")}
                    </Button>
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
