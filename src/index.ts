import {Application} from "./app/core/Application";
import {NodemailerServer} from "../NodemailerServer"

let app = new Application();
app.start();
let mailServer = new NodemailerServer();
mailServer.startServer();

// @ts-ignore
window.app = app;