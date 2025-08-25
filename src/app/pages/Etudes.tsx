import React, {ReactElement} from "react";
import {APP_NAME} from "../constants/Global";
import Camaradiere from "../deps/images/Camaradiere.png";
import CegepSainteFoy from "../deps/images/CegepSainteFoy.png";
import ULaval from "../deps/images/ULaval.png";
import {Image, Row} from "react-bootstrap";
import "../deps/css/etudes.css";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page} from "../components/Page";

class Etudes extends React.Component<WithTranslation> {

    public render(): ReactElement | null {
        const {t} = this.props;
        document.title = t("etudes") + " - " + APP_NAME;

        return (
            <Page title={t("etudes")}>
                <Row className="mb-4">
                    <Image className="img-responsive" src={ULaval} alt={t("etudes_ulaval_alt")}/>
                    <h3 className="mb-4">{t("etudes_ulaval_title")}</h3>
                    <p>{t("etudes_ulaval_degree")}</p>
                    <p>{t("etudes_ulaval_program")}</p>
                    <p>{t("etudes_ulaval_period")}</p>
                </Row>
                <Row className="mb-4">
                    <Image className="img-responsive" src={CegepSainteFoy} alt={t("etudes_saintefoy_alt")}/>
                    <h3 className="my-4">{t("etudes_saintefoy_title")}</h3>
                    <p>{t("etudes_saintefoy_degree")}</p>
                    <p>{t("etudes_saintefoy_program")}</p>
                    <p>{t("etudes_saintefoy_period")}</p>
                </Row>
                <Row className="mb-4">
                    <Image className="img-responsive img-cama" src={Camaradiere} alt={t("etudes_camaradiere_alt")}/>
                    <h3 className="mt-5 mb-4">{t("etudes_camaradiere_title")}</h3>
                    <p>{t("etudes_camaradiere_degree")}</p>
                    <p>{t("etudes_camaradiere_program")}</p>
                    <p>{t("etudes_camaradiere_period")}</p>
                </Row>
            </Page>
        );
    }
}

export default withTranslation()(Etudes);
