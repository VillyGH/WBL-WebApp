import {Component, ReactElement, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//region CSS
import "../deps/css/index.css";
import "../deps/css/bootstrap.min.css";
import "../deps/css/mediaqueries.css";
import "../deps/css/animations.css";
import "react-notifications-component/dist/theme.css";
import 'animate.css';

//endregion CSS
//region Pages
import {RoutesPath} from "../RoutesPath";
import {RouteNotFound} from "../pages/RouteNotFound";
import NavigationBar from "../components/NavigationBar";
import {ReactNotifications} from "react-notifications-component";
import {Projets} from "../pages/Projets";
import {Experience} from "../pages/Experience";
import {References} from "../pages/References";
import {Contact} from "../pages/Contact";
import {Apropos} from "../pages/Apropos";
import {Footer} from "../components/Footer";
import {BASE_URL} from "../constants/Global";
import {Etudes} from "../pages/Etudes";
import {Index} from "../pages/Index";
import {PepsReservationBot} from "../pages/Projets/PepsReservationBot";
import {FactionWar} from "../pages/Projets/FactionWar";
//endregion

interface CoreState {
    isDarkMode: boolean
}

export class Core extends Component<unknown, CoreState> {

    toggleDarkMode = (value: boolean): void => {
        this.setState({
            isDarkMode: value,
        });
    };

    public render(): ReactElement | null {
        return (
            <Suspense fallback={<div>Loading...</div>}>
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
