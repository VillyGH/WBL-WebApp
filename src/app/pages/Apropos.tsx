import React from "react";
import {useTranslation} from "react-i18next";
import {Page} from "../components/Page";
import {APP_NAME} from "../constants/Global";

export default function Apropos() {
    const {t} = useTranslation();
    document.title = t("apropos") + " - " + APP_NAME;

    return (
        <Page>
            <h2 className="mb-5">{t("about_title")}</h2>
            {(t("about_texts", {returnObjects: true}) as string[]).map((text: string, index: number) => (
                <p key={index} className="text-justify">{text}</p>
            ))}
        </Page>
    );
}