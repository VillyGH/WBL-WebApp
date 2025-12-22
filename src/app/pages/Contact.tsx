import React, {useState} from "react";
import {APP_NAME} from "../constants/Global";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {useTranslation} from "react-i18next";
import {Page} from "../components/Page";

interface Email {
    name: string;
    address: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const {t} = useTranslation();
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState<Email>({
        name: "",
        address: "",
        subject: "",
        message: "",
    });
    const [error, setError] = useState("");
    document.title = t("contact_title") + " - " + APP_NAME;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        const form: EventTarget & HTMLFormElement = event.currentTarget;
        let isValid: boolean = form.checkValidity();

        event.preventDefault();
        event.stopPropagation();

        setValidated(true);

        if (isValid) {
            try {
                const response = await fetch("https://formspree.io/f/mgvoeeoe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: email.name,
                        email: email.address,
                        subject: email.subject,
                        message: email.message,
                    }),
                });

                if (response.ok) {
                    setEmail({
                        name: "",
                        address: "",
                        subject: "",
                        message: ""
                    });
                } else {
                    setError(t("contact_error_text"));
                }
            } catch {
                setError(t("contact_error_text"));
            }
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setEmail(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Page title={t("contact_title")}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} data-error={error}>
                <Form.Group className="my-4" controlId="formName">
                    <Form.Label>{t("contact_name_label")}</Form.Label>
                    <Form.Control type="text" name="name"
                                  placeholder={t("contact_name_placeholder")} required
                                  onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid" id="invalidEmail">
                        {t("contact_invalid_name")}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="my-4" controlId="formAddress">
                    <Form.Label>{t("contact_email_label")}</Form.Label>
                    <Form.Control type="email" name="address"
                                  placeholder={t("contact_email_placeholder")} required
                                  pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                  onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid" id="invalidAddress">
                        {t("contact_invalid_email")}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="my-4" controlId="formSubject">
                    <Form.Label>{t("contact_subject_label")}</Form.Label>
                    <Form.Control type="text" name="subject"
                                  placeholder={t("contact_subject_placeholder")} required
                                  onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid" id="invalidSubject">
                        {t("contact_invalid_subject")}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="my-4" controlId="formMessage">
                    <Form.Label>{t("contact_message_label")}</Form.Label>
                    <Form.Control as="textarea" rows={4} minLength={1} maxLength={750} name="message"
                                  placeholder={t("contact_message_placeholder")} required
                                  onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid" id="invalidContact">
                        {t("contact_invalid_message")}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button className="my-4" variant="primary" type="submit">
                    {t("contact_send_button")}
                </Button>
                <div className="text-center">
                    {error ?? <p className="text-danger">{error}</p>}
                </div>
            </Form>

            <div className="mt-4">
                <a href="https://www.facebook.com/william.blanchetlafreniere/" className="me-3">
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#dee2e6"/></a>
                <a href="https://github.com/VillyGH" className="me-3">
                    <FontAwesomeIcon icon={faGithub} size="2x" color="#dee2e6"/></a>
                <a href="https://www.instagram.com/william_blanchet_lafreniere/" className="me-3">
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#dee2e6"/></a>
            </div>
        </Page>
    );
}