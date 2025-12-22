import React from "react";
import {RoutesPath} from "../RoutesPath";
import {Link} from "react-router-dom";
import {APP_NAME} from "../constants/Global";
import {useTranslation} from "react-i18next";
import {Page} from "../components/Page";

export default function RouteNotFound() {
    const {t} = useTranslation();
    document.title = t("not_found") + " - " + APP_NAME;

    return (
        <Page>
            <div className="text-center">
                <h1 className="display-1 fw-bold mb-4">404</h1>
                <p className="fs-3">
                    <span className="text-danger">{t("not_found_oups")}</span> {t("not_found_message")}.
                </p>
                <p className="lead">{t("not_found_lead")}</p>
                <Link className="d-block mt-5" to={RoutesPath.INDEX}>
                    <button className="btn btn-primary">{t("not_found_button")}</button>
                </Link>
            </div>
        </Page>
    );
}