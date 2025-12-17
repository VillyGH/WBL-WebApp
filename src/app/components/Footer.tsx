import React from "react";
import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t} = useTranslation();
    return (
        <footer className="text-center py-3 px-4 mx-auto mt-auto">
            {t("footer_text")}
        </footer>
    );
}

