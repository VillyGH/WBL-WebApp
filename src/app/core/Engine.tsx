import {Component, ReactElement} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//#region CSS
import "../assets/css/index.css";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css";
//#endregion
import {Index} from "../pages/Index";
import {RoutesPath} from "../RoutesPath";
import {RouteNotFound} from "../pages/RouteNotFound";
import {NavigationBar} from "../components/NavigationBar";
import {ReactNotifications} from "react-notifications-component";
import {Apropos} from "../pages/Apropos";
import {Projets} from "../pages/Projets";
import {References} from "../pages/References";
import {Contact} from "../pages/Contact";

export class Engine extends Component {

    public render(): ReactElement | null {
            return (
                <Router>
                    <NavigationBar />
                    <ReactNotifications />
                    <Routes>
                        <Route path={RoutesPath.INDEX} element={<Index/>}/>
                        <Route path={RoutesPath.PROJETS} element={<Projets />}/>
                        <Route path={RoutesPath.CONTACT} element={<Contact />}/>
                        <Route path={RoutesPath.REFERENCES} element={<References />}/>
                        <Route path={RoutesPath.APROPOS} element={<Apropos />}/>
                        <Route path="*" element={<RouteNotFound />}/>
                    </Routes>
                </Router>
            );
    }
}
