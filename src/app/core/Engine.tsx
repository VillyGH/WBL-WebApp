import {Component, ReactElement} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//#region CSS
import "../deps/css/index.css";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css";
//#endregion
import {Index} from "../pages";
import {RoutesPath} from "../RoutesPath";
import {RouteNotFound} from "../pages/RouteNotFound";
import {NavigationBar} from "../components/NavigationBar";
import {ReactNotifications} from "react-notifications-component";
import {About} from "../pages/About";

export class Engine extends Component {
    public render(): ReactElement {
            return (
                <Router>
                    <NavigationBar />
                    <ReactNotifications />
                    <Routes>
                        <Route path={RoutesPath.INDEX} element={<Index/>}/>
                        <Route path={RoutesPath.PROJETS} element={<Index/>}/>
                        <Route path={RoutesPath.REFERENCES} element={<Index/>}/>
                        <Route path={RoutesPath.ABOUT} element={<About />}/>
                        <Route path="*" element={<RouteNotFound />}/>
                    </Routes>
                </Router>
            );
    }
}
