import React, { Component, ReactElement } from "react";
import { RoutesPath } from "../RoutesPath";
import { Link } from "react-router-dom";
import { APP_NAME } from "../constants/Global";
import { Application } from "../core/Application";
import { ParticlesOptsDark } from "../types/ParticlesDark";
import { ParticlesOpts } from "../types/Particles";
import Particles from "@tsparticles/react";
import { withTranslation, WithTranslation } from "react-i18next";

class RouteNotFound extends Component<WithTranslation> {
    public componentDidMount(): void {
        const { t } = this.props;
        document.title = t("not_found") + " - " + APP_NAME;
    }

    public render(): ReactElement {
        const { t } = this.props;

        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <div className="d-flex flex-column justify-content-center align-items-center vh-90">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold">404</h1>
                        <p className="fs-3">
                            <span className="text-danger">{t("not_found_oups")}</span> {t("not_found_message")}.
                        </p>
                        <p className="lead">{t("not_found_lead")}</p>
                        <Link className="d-block" to={RoutesPath.INDEX}>
                            <button className="btn btn-primary">{t("not_found_button")}</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(RouteNotFound);
