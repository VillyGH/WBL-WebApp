import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json",
        },
        react: {
            useSuspense: true,
        },
        preload: ["en", "fr"],
        cache: {
            enabled: true,
            expirationTime: 7 * 24 * 60 * 60 * 1000
        }
    });
export default i18n;