import React from "react";
import ReactDOM from "react-dom/client";
import {Core} from "./Core";
import "../../../i18n"
import {loadFull} from "tsparticles";
import {initParticlesEngine} from "@tsparticles/react";

export class Application {
    private rootElem: HTMLElement | null = null;
    private root: ReactDOM.Root | null = null;

    /**
     * Determine if the user is in dark mode
     */
    public static readonly isDarkMode = (): boolean => {
        const themeAttribute: string | null = document.documentElement.getAttribute("data-bs-theme");
        return themeAttribute != null ? themeAttribute == "dark" : false;
    }

    /**
     * Start the application
     */
    public readonly start = async (): Promise<void> => {
        await this.initParticles();
        this.updateDarkMode();
        this.renderCore();
    }

    /**
     * Initialize the React particles engine
     */
    public readonly initParticles = async (): Promise<void> => {
        await initParticlesEngine(async (engine): Promise<void> => {
            await loadFull(engine);
        });
    };

    /**
     * Update the dark mode style for the loading screen
     * @private
     */
    private readonly updateDarkMode = (): void => {
        const themeAttribute: string | null = document.documentElement.getAttribute("data-bs-theme");
        if (themeAttribute == null) {
            const theme: string | null = localStorage.getItem("theme");
            if (theme != null) {
                const htmlElement = document.documentElement;
                htmlElement.setAttribute("data-bs-theme", theme);
            }
        }
    }

    /**
     * Render the core of the application
     * @private
     */
    private readonly renderCore = (): void => {
        this.defineRoot();

        if (this.rootElem !== null && this.rootElem) {
            this.root = ReactDOM.createRoot(this.rootElem);
            this.root.render(<Core />);
        } else {
            console.error("Root element is null or undefined!");
        }
    }

    /**
     * Define the root element of the application
     * @private
     */
    private readonly defineRoot = (): void => {
        if (this.rootElem === null || !this.rootElem) {
            this.rootElem = document.createElement("div");
            this.rootElem.style.width = "100%";
            this.rootElem.style.height = "100vh";
            this.rootElem.id = "root";
            document.body.appendChild(this.rootElem);
        }
    }
}
