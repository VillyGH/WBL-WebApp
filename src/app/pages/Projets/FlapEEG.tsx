import React, {ReactElement} from "react";
import {APP_NAME} from "../../constants/Global";
import {Row} from "react-bootstrap";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FlapEEGDemo from "../../deps/videos/FlapEEGDemo.mp4";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page} from "../../components/Page";
import "../../deps/css/projets.css";

class FlapEEG extends React.Component<WithTranslation> {
    public componentDidMount(): void {
        const {t} = this.props;
        document.title = t("projets_ciaul_title") + " - " + APP_NAME;
    }

    public render(): ReactElement | null {
        const {t} = this.props;

        return (
            <Page title={t("flapeeg_title")}>
                <Row className="ratio ratio-16x9">
                    <iframe src={FlapEEGDemo} title={t("flapeeg_video_title")} allowFullScreen/>
                </Row>
                <Row className="justify-content-center">
                    <h2 className="mt-4 mb-4">{t("game_preview_title")}</h2>
                    <iframe
                        src="/game/index.html"
                        title={t("flapeeg_title")}
                        width={1024}
                        height={650}
                        style={{
                            border: 'none',
                            maxWidth: '100%',
                            aspectRatio: '4/3',
                        }}
                        allow="autoplay; fullscreen"
                    />
                </Row>
                <Row className="mt-4 mb-4 justify-content-center">
                    <h2 className="mt-4 mb-4">{t("download_title")}</h2>
                    <a className="btn download-button" href="/flapeeg.zip" download>
                        <span>{t("projets_ciaul_title")}</span>
                        <FontAwesomeIcon icon={faDownload} size="lg" className="download-icon"/>
                    </a>
                </Row>
            </Page>
        );
    }
}

export default withTranslation()(FlapEEG);