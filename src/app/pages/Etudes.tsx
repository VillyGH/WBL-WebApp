import React, { ReactElement } from "react";
import Particles from "@tsparticles/react";
import { APP_NAME } from "../constants/Global";
import { Application } from "../core/Application";
import Camaradiere from "../deps/images/Camaradiere.png";
import CegepSainteFoy from "../deps/images/CegepSainteFoy.png";
import ULaval from "../deps/images/ULaval.png";
import { ParticlesOptsDark } from "../types/ParticlesDark";
import { ParticlesOpts } from "../types/Particles";
import { Container, Image, Row } from "react-bootstrap";
import "../deps/css/etudes.css";
import { withTranslation, WithTranslation } from "react-i18next";

class Etudes extends React.Component<WithTranslation> {

    public render(): ReactElement | null {
        const { t } = this.props;
        document.title = t("etudes") + " - " + APP_NAME;

        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <h2 className="mt-4 mb-4">{t("etudes")}</h2>

                <Container fluid="sm" className="mb-5">
                    <Row className="mb-4">
                        <Image className="img-responsive" src={ULaval} alt={t("etudes_ulaval_alt")} />
                        <div className="mt-2">
                            <h3>{t("etudes_ulaval_title")}</h3>
                            <p>{t("etudes_ulaval_degree")}</p>
                            <p>{t("etudes_ulaval_program")}</p>
                            <p>{t("etudes_ulaval_period")}</p>
                        </div>
                    </Row>
                    <Row className="mb-5">
                        <Image className="img-responsive" src={CegepSainteFoy} alt={t("etudes_saintefoy_alt")} />
                        <div className="mt-2">
                            <h3>{t("etudes_saintefoy_title")}</h3>
                            <p>{t("etudes_saintefoy_degree")}</p>
                            <p>{t("etudes_saintefoy_program")}</p>
                            <p>{t("etudes_saintefoy_period")}</p>
                        </div>
                    </Row>
                    <Row className="mb-4">
                        <Image className="img-responsive img-cama" src={Camaradiere} alt={t("etudes_camaradiere_alt")} />
                        <div className="mt-2">
                            <h3>{t("etudes_camaradiere_title")}</h3>
                            <p>{t("etudes_camaradiere_degree")}</p>
                            <p>{t("etudes_camaradiere_program")}</p>
                            <p>{t("etudes_camaradiere_period")}</p>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withTranslation()(Etudes);
