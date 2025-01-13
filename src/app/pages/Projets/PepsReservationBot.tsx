import React, { ReactElement } from "react";
import Particles from "@tsparticles/react";
import { APP_NAME } from "../../constants/Global";
import Container from "react-bootstrap/Container";
import { Application } from "../../core/Application";
import { ParticlesOptsDark } from "../../types/ParticlesDark";
import { ParticlesOpts } from "../../types/Particles";
import { Col, Row } from "react-bootstrap";
import "../../deps/css/projets.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withTranslation, WithTranslation } from "react-i18next";

class PepsReservationBot extends React.Component<WithTranslation> {
    public componentDidMount(): void {
        const { t } = this.props;
        document.title = t("peps_title") + " - " + APP_NAME;
    }

    public render(): ReactElement | null {
        const { t } = this.props;

        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <h1 className="mt-4 mb-4">{t("peps_title")}</h1>
                <section className="mt-4 mb-5">
                    <Container className="mb-5">
                        <Row>
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/2xLY_uGdiH4" title={t("peps_video_title")} allowFullScreen></iframe>
                            </div>
                        </Row>
                        <Row className="mt-4 mb-4">
                            <h2 className="mt-4 mb-4">{t("peps_download_title")}</h2>
                            <Col className="d-flex justify-content-center align-items-center">
                                <a href="https://github.com/VillyGH/PepsReservationBot/releases/latest/download/PepsReservationBot.zip"
                                    download="PepsReservationBot.zip" className="btn download-button">
                                    <span>{t("peps_download_button")}</span>
                                    <FontAwesomeIcon icon={faDownload} size="lg" className="download-icon" />
                                </a>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center">
                                <a
                                    href="https://github.com/VillyGH/PepsReservationBot/releases/latest/download/PepsReservationBotChromium.zip"
                                    download="PepsReservationBot.zip" className="btn download-button">
                                    <span>{t("peps_chromium_download_button")}</span>
                                    <FontAwesomeIcon icon={faDownload} size="lg" className="download-icon" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default withTranslation()(PepsReservationBot);
