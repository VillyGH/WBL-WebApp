import {Application} from "./src/core/Application";

let app = new Application();
app.start();

// @ts-ignore
window.app = app;