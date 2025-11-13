import React, {useEffect} from "react";
import {APP_NAME} from "../constants/Global";
import Logo from "../deps/images/logo.png";
import LogoDark from "../deps/images/logoDark.png";
import {Application} from "../core/Application"
import {useTranslation} from "react-i18next";
import {Page} from "../components/Page";

const Index: React.FC = () => {
    const {t} = useTranslation();

    useEffect(() => {
        document.title = t("index") + ' - ' + APP_NAME;
    }, [t]);

    return (
        <Page>
            <div className="text-center">
                <img className="me-3" src={Application.isDarkMode() ? Logo : LogoDark}
                     alt={`Logo ${APP_NAME}`} width={300} height={200}/>
                <h1>William Blanchet Lafrenière</h1>
                <div className="my-4">{t("index_title")}</div>
            </div>
        </Page>
    );
};

export default Index;
