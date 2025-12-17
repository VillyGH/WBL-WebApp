import React from "react";
import ReactDOM from "react-dom/client";
import Core from "./Core";
import "../../../i18n"
import {loadFull} from "tsparticles";
import {initParticlesEngine} from "@tsparticles/react";

export const appIsDarkMode = (): boolean => {
    const themeAttribute: string | null = document.documentElement.getAttribute("data-bs-theme");
    return themeAttribute != null ? themeAttribute == "dark" : false;
}

export const initParticles = async (): Promise<void> => {
    await initParticlesEngine(async (engine): Promise<void> => {
        await loadFull(engine);
    });
};

const updateDarkModeFromStorage = (): void => {
    const themeAttribute: string | null = document.documentElement.getAttribute("data-bs-theme");
    if (themeAttribute == null) {
        const theme: string | null = localStorage.getItem("theme");
        if (theme != null) {
            const htmlElement = document.documentElement;
            htmlElement.setAttribute("data-bs-theme", theme);
        }
    }
};

const defineRootElement = (): HTMLElement => {
    let rootElem = document.getElementById("root") as HTMLElement | null;
    if (!rootElem) {
        rootElem = document.createElement("div");
        rootElem.style.width = "100%";
        rootElem.style.height = "100vh";
        rootElem.id = "root";
        document.body.appendChild(rootElem);
    }
    return rootElem;
};

const renderCore = (): void => {
    const rootElem = defineRootElement();
    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <React.StrictMode>
                <Core/>
        </React.StrictMode>
    );
};

export const startApp = async (): Promise<void> => {
    updateDarkModeFromStorage();
    await initParticles();
    renderCore();
};