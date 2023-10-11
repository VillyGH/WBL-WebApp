import {Component, ReactElement} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//#region CSS
import "../assets/css/index.css";
import "../assets/css/mediaqueries.css";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css";
//#endregion
import {RoutesPath} from "../RoutesPath";
import {RouteNotFound} from "../pages/RouteNotFound";
import {NavigationBar} from "../components/NavigationBar";
import {ReactNotifications} from "react-notifications-component";
import {Index} from "../pages/Index";
import {Projets} from "../pages/Projets";
import {Experience} from "../pages/Experience";
import {References} from "../pages/References";
import {Contact} from "../pages/Contact";
import {Apropos} from "../pages/Apropos";
import {Footer} from "../components/Footer";
import {BASE_URL} from "../constants/Global";
import { Etudes } from "../pages/Etudes";

interface State {
    isDarkMode: boolean
}

export class Engine extends Component<unknown, State> {

    toggleDarkMode = (value: boolean): void => {
        this.setState({
            isDarkMode: value,
        });
    };

    public render(): ReactElement | null {
        return (
            <Router basename={BASE_URL}>
                <NavigationBar toggleDarkMode={this.toggleDarkMode}/>
                <ReactNotifications/>
                <Routes>
                    <Route path={RoutesPath.INDEX} element={<Index/>}/>
                    <Route path={RoutesPath.PROJETS} element={<Projets/>}/>
                    <Route path={RoutesPath.ETUDES} element={<Etudes/>}/>
                    <Route path={RoutesPath.EXPERIENCE} element={<Experience/>}/>
                    <Route path={RoutesPath.CONTACT} element={<Contact/>}/>
                    <Route path={RoutesPath.REFERENCES} element={<References/>}/>
                    <Route path={RoutesPath.APROPOS} element={<Apropos/>}/>
                    <Route path="*" element={<RouteNotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        );
    }
}
