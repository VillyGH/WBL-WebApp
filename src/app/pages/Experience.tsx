import React, { ReactElement } from "react";
import Particles from "@tsparticles/react";
import { APP_NAME } from "../constants/Global";
import { Application } from "../core/Application";
import RQ from "../deps/images/RQ.jpg";
import RAMQ from "../deps/images/RAMQ.jpg";
import CNESST from "../deps/images/CNESST.png";
import { ParticlesOptsDark } from "../types/ParticlesDark";
import { ParticlesOpts } from "../types/Particles";
import {Col, Container, Image, Row} from "react-bootstrap";
import "../deps/css/experience.css";
import { withTranslation, WithTranslation } from "react-i18next";

class Experience extends React.Component<WithTranslation> {

    public render(): ReactElement | null {
        const { t } = this.props;
        document.title = t("experience") + " - " + APP_NAME;
        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <Container fluid="sm">
                    <h2>{t("experience_title")}</h2>
                    <Row className="my-4">
                        <Col xl={6} xxl={5}>
                            <Image className="img-responsive" src={RAMQ} alt={t("experience_ramq_alt")}/>
                        </Col>
                        <Col xl={6} xxl={7}>
                            <div>
                                <h3>{t("experience_ramq_title")}</h3>
                                <p>{t("experience_ramq_period")}</p>
                                <p>{t("experience_tasks")}</p>
                                <ul>
                                    {(t("experience_ramq_tasks", {returnObjects: true}) as string[]).map((task: string, index: number) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6} xxl={5}>
                            <Image className="img-responsive" src={RQ} alt={t("experience_rq_alt")}/>
                        </Col>
                        <Col xl={6} xxl={7}>
                            <div>
                                <h3>{t("experience_rq_title")}</h3>
                                <p>{t("experience_rq_period")}</p>
                                <p>{t("experience_tasks")}</p>
                                <ul>
                                    {(t("experience_rq_tasks", {returnObjects: true}) as string[]).map((task: string, index: number) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col xl={6} xxl={5}>
                            <Image className="img-responsive" fluid src={CNESST}
                                   alt={t("experience_cnesst_alt")}/>
                        </Col>
                        <Col xl={6} xxl={7}>
                            <div>
                                <h3>{t("experience_cnesst_title")}</h3>
                                <p>{t("experience_cnesst_period")}</p>
                                <p>{t("experience_tasks")}</p>
                                <ul>
                                    {(t("experience_cnesst_tasks", {returnObjects: true}) as string[]).map((task: string, index: number) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withTranslation()(Experience);
