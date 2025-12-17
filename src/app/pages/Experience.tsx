import React, {ReactElement} from "react";
import {APP_NAME} from "../constants/Global";
import RQ from "../deps/images/RQ.jpg";
import RAMQ from "../deps/images/RAMQ.jpg";
import CNESST from "../deps/images/CNESST.png";
import COVEO from "../deps/images/COVEO.png";
import COVEO_BLANC from "../deps/images/COVEO_BLANC.png";
import {Col, Image, Row} from "react-bootstrap";
import "../deps/css/experience.css";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page} from "../components/Page";
import {appIsDarkMode} from "../core/Application";

class Experience extends React.Component<WithTranslation> {

    public render(): ReactElement | null {
        const {t} = this.props;
        document.title = t("experience") + " - " + APP_NAME;
        return (
            <Page title={t("experience")}>
                <Row className="my-4">
                    <Col xl={6} xxl={5}>
                        <Image className="img-responsive" src={appIsDarkMode() ? COVEO_BLANC : COVEO}
                               alt={t("experience_coveo_alt")}/>
                    </Col>
                    <Col xl={6} xxl={7}>
                        <h3>{t("experience_coveo_title")}</h3>
                        <p>{t("experience_coveo_period")}</p>
                        <p>{t("experience_tasks")}</p>
                        <ul>
                            {(t("experience_coveo_tasks", {returnObjects: true}) as string[]).map((task: string, index: number) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col xl={6} xxl={5}>
                        <Image className="img-responsive" src={RAMQ} alt={t("experience_ramq_alt")}/>
                    </Col>
                    <Col xl={6} xxl={7}>
                        <h3>{t("experience_ramq_title")}</h3>
                        <p>{t("experience_ramq_period")}</p>
                        <p>{t("experience_ramq_mention")}</p>
                        <p>{t("experience_tasks")}</p>
                        <ul>
                            {(t("experience_ramq_tasks", {returnObjects: true}) as string[]).map((task: string, index: number) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col xl={6} xxl={5}>
                        <Image className="img-responsive" src={RQ} alt={t("experience_rq_alt")}/>
                    </Col>
                    <Col xl={6} xxl={7}>
                        <h3>{t("experience_rq_title")}</h3>
                        <p>{t("experience_rq_period")}</p>
                        <p>{t("experience_tasks")}</p>
                        <ul>
                            {(t("experience_rq_tasks", {returnObjects: true}) as string[]).map((task: string, index: number) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col xl={6} xxl={5}>
                        <Image className="img-responsive" fluid src={CNESST}
                               alt={t("experience_cnesst_alt")}/>
                    </Col>
                    <Col xl={6} xxl={7}>
                        <h3>{t("experience_cnesst_title")}</h3>
                        <p>{t("experience_cnesst_period")}</p>
                        <p>{t("experience_tasks")}</p>
                        <ul>
                            {(t("experience_cnesst_tasks", {returnObjects: true}) as string[]).map((task: string, index: number) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default withTranslation()(Experience);