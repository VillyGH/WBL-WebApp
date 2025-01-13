import React, { ReactElement } from "react";
import Particles from "@tsparticles/react";
import { APP_NAME } from "../../constants/Global";
import Container from "react-bootstrap/Container";
import { Application } from "../../core/Application";
import { ParticlesOptsDark } from "../../types/ParticlesDark";
import { ParticlesOpts } from "../../types/Particles";
import { Col, Image, Row } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FactionWar2 from "../../deps/images/FactionWar2.png";
import FactionWar3 from "../../deps/images/FactionWar3.png";
import "../../deps/css/projets.css";
import { withTranslation, WithTranslation } from "react-i18next";

class FactionWar extends React.Component<WithTranslation> {
    public componentDidMount(): void {
        const { t } = this.props;
        document.title = t("factionwar_title") + " - " + APP_NAME;
    }

    public render(): ReactElement | null {
        const { t } = this.props;

        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <h1 className="mt-4 mb-4">{t("factionwar_title")}</h1>
                <section className="mt-4 mb-5">
                    <Container className="mb-5">
                        <Row className="justify-content-center">
                            <Image
                                src={FactionWar2}
                                alt={t("factionwar_image1_alt")}
                                className="project-img-xl mt-5 mb-5"
                            />
                        </Row>
                        <Row className="justify-content-center">
                            <Image
                                src={FactionWar3}
                                alt={t("factionwar_image2_alt")}
                                className="project-img-xl mt-5 mb-5"
                            />
                        </Row>
                        <Row className="mt-4 mb-4">
                            <h2 className="mt-4 mb-4">{t("factionwar_download_title")}</h2>
                            <Col className="d-flex justify-content-center align-content-center">
                                <a
                                    href="https://gitlab.com/glo2004-ift2007/H24-IFT-Equipe1/-/raw/remise_5/equipe01.jar"
                                    download="equipe01.jar"
                                    className="btn download-button"
                                >
                                    <span>{t("factionwar_download_button")}</span>
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

export default withTranslation()(FactionWar);