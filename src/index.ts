import {Application} from "./app/core/Application";
import {startMailServer} from "../nodemailerServer"

let app = new Application();
app.start();
startMailServer();

// @ts-ignore
window.app = app;