import {Application} from "./app/core/Application";

let app = new Application();
app.start();

console.log(process.env.NODE_ENV)

// @ts-ignore
window.app = app;