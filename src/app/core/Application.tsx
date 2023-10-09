import React from "react";
import ReactDOM from "react-dom/client";
import {Engine} from "./Engine";
import {loadFull} from "tsparticles";


export class Application {
    private rootElem: HTMLElement | null = null;
    private root: ReactDOM.Root | null = null;

    public static readonly initParticles = async (engine: any) => {
        await loadFull(engine);
    };

    public static readonly isDarkMode = (): boolean => {
        const themeAttribute: string | null = document.documentElement.getAttribute("data-bs-theme");
        return themeAttribute != null ? themeAttribute == "dark" : false;
    }
    
    /**
     * Start the application
     */
    public start(): void {
        this.renderCore();
    }

    /**
     * Define the root element of the application
     * @private
     */
    private defineRoot(): void {
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
    private renderCore(): void {
        this.defineRoot();

        if (this.rootElem !== null && this.rootElem) {
            this.root = ReactDOM.createRoot(this.rootElem);

            this.root.render(
                <Engine/>
            );
        } else {
            console.error("Root element is null or undefined!");
        }
    }
}
