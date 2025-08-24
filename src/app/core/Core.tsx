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
import Groupes from "../pages/Groupes";
import FlapEEG from "../pages/Projets/FlapEEG";
import PepsReservationBot from "../pages/Projets/PepsReservationBot";
import FactionWar from "../pages/Projets/FactionWar";
import Footer from "../components/Footer";
import RouteNotFound from "../pages/RouteNotFound";
import {RoutesPath} from "../RoutesPath";
import {LoadingScreen} from "../components/LoadingScreen";
import {AnimatePresence} from "framer-motion";
import {PageTransition} from "../components/PageTransition";

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
            <Suspense fallback={<LoadingScreen/>}>
                <Router future={{v7_relativeSplatPath: true}} basename={BASE_URL}>
                    <NavigationBar toggleDarkMode={this.toggleDarkMode}/>
                    <ReactNotifications/>
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route index element={<PageTransition><Index/></PageTransition>}/>
                            <Route path={RoutesPath.PROJETS}>
                                <Route path="*" index element={<PageTransition><Projets/></PageTransition>}/>
                                <Route path={RoutesPath.FLAPEEG} element={<PageTransition><FlapEEG/></PageTransition>}/>
                                <Route path={RoutesPath.PEPSRESERVATIONBOT} element={<PageTransition><PepsReservationBot/></PageTransition>}/>
                                <Route path={RoutesPath.FACTIONWAR} element={<PageTransition><FactionWar/></PageTransition>}/>
                            </Route>
                            <Route path={RoutesPath.ETUDES} element={<PageTransition><Etudes/></PageTransition>}/>
                            <Route path={RoutesPath.GROUPES} element={<PageTransition><Groupes/></PageTransition>}/>
                            <Route path={RoutesPath.EXPERIENCE} element={<PageTransition><Experience/></PageTransition>}/>
                            <Route path={RoutesPath.CONTACT} element={<PageTransition><Contact/></PageTransition>}/>
                            <Route path={RoutesPath.REFERENCES} element={<PageTransition><References/></PageTransition>}/>
                            <Route path={RoutesPath.APROPOS} element={<PageTransition><Apropos/></PageTransition>}/>
                            <Route path="*" element={<PageTransition><RouteNotFound/></PageTransition>}/>
                        </Routes>
                    </AnimatePresence>
                    <Footer/>
                </Router>
            </Suspense>
        );
    }
}

