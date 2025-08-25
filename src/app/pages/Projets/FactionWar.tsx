import React, {ReactElement} from "react";
import {APP_NAME} from "../../constants/Global";
import {Col, Image, Row} from "react-bootstrap";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FactionWar2 from "../../deps/images/FactionWar2.png";
import FactionWar3 from "../../deps/images/FactionWar3.png";
import "../../deps/css/projets.css";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page} from "../../components/Page";

class FactionWar extends React.Component<WithTranslation> {
    public componentDidMount(): void {
        const {t} = this.props;
        document.title = t("factionwar_title") + " - " + APP_NAME;
    }

    public render(): ReactElement | null {
        const {t} = this.props;

        return (
            <Page title={t("factionwar_title")}>
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
                    <h2 className="mt-4 mb-4">{t("download_title")}</h2>
                    <Col className="d-flex justify-content-center align-content-center">
                        <a
                            href="https://gitlab.com/glo2004-ift2007/H24-IFT-Equipe1/-/raw/remise_5/equipe01.jar"
                            download="equipe01.jar"
                            className="btn download-button"
                        >
                            <span>{t("projets_factionwar_title")}</span>
                            <FontAwesomeIcon icon={faDownload} size="lg" className="download-icon"/>
                        </a>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default withTranslation()(FactionWar);