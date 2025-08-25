import React, {ReactElement} from "react";
import {APP_NAME} from "../../constants/Global";
import {Col, Row} from "react-bootstrap";
import "../../deps/css/projets.css";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page} from "../../components/Page";

class PepsReservationBot extends React.Component<WithTranslation> {
    public componentDidMount(): void {
        const {t} = this.props;
        document.title = t("projets_peps_title") + " - " + APP_NAME;
    }

    public render(): ReactElement | null {
        const {t} = this.props;

        return (
            <Page title={t("peps_title")}>
                <Row className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/2xLY_uGdiH4" title={t("peps_video_title")}
                            allowFullScreen></iframe>
                </Row>
                <Row className="my-4">
                    <h2 className="my-4">{t("download_title")}</h2>
                    <Col className="d-flex justify-content-center align-items-center">
                        <a href="https://github.com/VillyGH/PepsReservationBot/releases/latest/download/PepsReservationBot.zip"
                           download="PepsReservationBot.zip" className="btn download-button">
                            <span>{t("projets_peps_title")}</span>
                            <FontAwesomeIcon icon={faDownload} size="lg" className="download-icon"/>
                        </a>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <a
                            href="https://github.com/VillyGH/PepsReservationBot/releases/latest/download/PepsReservationBotChromium.zip"
                            download="PepsReservationBot.zip" className="btn download-button">
                            <span>{t("peps_chromium_download_button")}</span>
                            <FontAwesomeIcon icon={faDownload} size="lg" className="download-icon"/>
                        </a>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default withTranslation()(PepsReservationBot);
