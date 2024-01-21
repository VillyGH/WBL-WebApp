import React from "react";
import ReactDOM from "react-dom/client";
import type { Engine } from "tsparticles-engine";
import {Core} from "./Core";


export class Application {
    private rootElem: HTMLElement | null = null;
    private root: ReactDOM.Root | null = null;

    
    public static readonly initParticles = async (engine: Engine): Promise<void> => {
        engine.init();
    };

    public static readonly isDarkMode = (): boolean => {
        const themeAttribute: string | null = document.documentElement.getAttribute("data-bs-theme");
        return themeAttribute != null ? themeAttribute == "dark" : false;
    }
    
    /**
     * Start the application
     */
    public readonly start = (): void => {
        this.renderCore();
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

    /**
     * Render the core of the application
     * @private
     */
    private readonly renderCore = (): void => {
        this.defineRoot();

        if (this.rootElem !== null && this.rootElem) {
            this.root = ReactDOM.createRoot(this.rootElem);

            this.root.render(
                <Core/>
            );
        } else {
            console.error("Root element is null or undefined!");
        }
    }
}
