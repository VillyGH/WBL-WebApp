import {Application} from "./app/core/Application";

let app = new Application();
app.start();

// @ts-ignore
window.app = app;