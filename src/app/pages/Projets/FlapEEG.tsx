import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../../constants/Global";
import Container from "react-bootstrap/Container";
import {Application} from "../../core/Application";
import {ParticlesOptsDark} from "../../types/ParticlesDark";
import {ParticlesOpts} from "../../types/Particles";
import {Col, Row} from "react-bootstrap";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../deps/css/projets.css";
import {withTranslation, WithTranslation} from "react-i18next";

class FlapEEG extends React.Component<WithTranslation> {
    public componentDidMount(): void {
        const {t} = this.props;
        document.title = t("projets_ciaul_title") + " - " + APP_NAME;
    }

    public render(): ReactElement | null {
        const {t} = this.props;

        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts}/>
                <h1 className="mt-4 mb-4">{t("flapeeg_title")}</h1>
                <section className="mt-4 mb-5">
                    <Container className="mb-5">
                        <Row className="justify-content-center">
                            <div className="pygame-embed">
                                <iframe
                                    src="/flapeeg/index.html"
                                    title="Pygame Game"
                                    width="800"
                                    height="600"
                                    style={{
                                        border: 'none',
                                        maxWidth: '100%',
                                        aspectRatio: '4/3',
                                    }}
                                    allow="autoplay; fullscreen"
                                />
                            </div>
                        </Row>
                        <Row className="mt-4 mb-4">
                            <h2 className="mt-4 mb-4">{t("download_title")}</h2>
                            <Col className="d-flex justify-content-center align-content-center">
                                <a
                                    download="game.exe"
                                    className="btn download-button"
                                >
                                    <span>{t("projets_ciaul_title")}</span>
                                    <FontAwesomeIcon icon={faDownload} size="lg" className="download-icon"/>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default withTranslation()(FlapEEG);