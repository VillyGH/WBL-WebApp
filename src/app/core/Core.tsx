import {Component, ReactElement, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import {BASE_URL} from "../constants/Global";
//region CSS
import "../deps/css/index.css";
import "../deps/css/bootstrap.min.css";
import "../deps/css/mediaqueries.css";
import "../deps/css/animations.css";
import "react-notifications-component/dist/theme.css";
import 'animate.css';

//endregion CSS
//region Pages
import NavigationBar from "../components/NavigationBar";
import Index from "../pages/Index";
import Projets from "../pages/Projets";
import Experience from "../pages/Experience";
import References from "../pages/References";
import Contact from "../pages/Contact";
import Apropos from "../pages/Apropos";
import Etudes from "../pages/Etudes";
import PepsReservationBot from "../pages/Projets/PepsReservationBot";
import FactionWar from "../pages/Projets/FactionWar";
import Footer from "../components/Footer";
import RouteNotFound from "../pages/RouteNotFound";
import {RoutesPath} from "../RoutesPath";
import {LoadingScreen} from "../components/LoadingScreen";
//endregion

interface CoreState {
    isDarkMode: boolean,
}

export class Core extends Component<unknown, CoreState> {

    toggleDarkMode = (value: boolean): void => {
        this.setState({
            isDarkMode: value
        });
    };

    public render(): ReactElement | null {
        return (
            <Suspense fallback={<LoadingScreen />}>
                <Router basename={BASE_URL}>
                    <NavigationBar toggleDarkMode={this.toggleDarkMode}/>
                    <ReactNotifications/>
                    <Routes>
                        <Route path={RoutesPath.INDEX} element={<Index/>}/>
                        <Route path={RoutesPath.PROJETS} element={<Projets/>}/>
                        <Route path={RoutesPath.PEPSRESERVATIONBOT} element={<PepsReservationBot/>}/>
                        <Route path={RoutesPath.FACTIONWAR} element={<FactionWar/>}/>
                        <Route path={RoutesPath.ETUDES} element={<Etudes/>}/>
                        <Route path={RoutesPath.EXPERIENCE} element={<Experience/>}/>
                        <Route path={RoutesPath.CONTACT} element={<Contact/>}/>
                        <Route path={RoutesPath.REFERENCES} element={<References/>}/>
                        <Route path={RoutesPath.APROPOS} element={<Apropos/>}/>
                        <Route path="*" element={<RouteNotFound/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </Suspense>
        );
    }
}
