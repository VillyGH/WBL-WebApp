import {Suspense, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import {BASE_URL} from "../constants/Global";
import "../deps/css/index.css";
import "../deps/css/bootstrap.min.css";
import "../deps/css/mediaqueries.css";
import "../deps/css/animations.css";
import "react-notifications-component/dist/theme.css";
import 'animate.css';
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
import LoadingScreen from "../components/LoadingScreen";
import {appIsDarkMode} from "./Application";
import {AnimatePresence} from "framer-motion";

export default function Core() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(appIsDarkMode());

    return (
        <Suspense fallback={<LoadingScreen/>}>
            <Router future={{v7_relativeSplatPath: true}} basename={BASE_URL}>
                <NavigationBar isDarkMode={isDarkMode} toggleDarkMode={setIsDarkMode} />
                <ReactNotifications/>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route index element={<Index/>}/>
                        <Route path={RoutesPath.PROJETS}>
                            <Route path="*" index element={<Projets/>}/>
                            <Route path={RoutesPath.FLAPEEG} element={<FlapEEG/>}/>
                            <Route path={RoutesPath.PEPSRESERVATIONBOT} element={<PepsReservationBot/>}/>
                            <Route path={RoutesPath.FACTIONWAR} element={<FactionWar/>}/>
                        </Route>
                        <Route path={RoutesPath.ETUDES} element={<Etudes/>}/>
                        <Route path={RoutesPath.GROUPES} element={<Groupes/>}/>
                        <Route path={RoutesPath.EXPERIENCE} element={<Experience/>}/>
                        <Route path={RoutesPath.CONTACT} element={<Contact/>}/>
                        <Route path={RoutesPath.REFERENCES} element={<References/>}/>
                        <Route path={RoutesPath.APROPOS} element={<Apropos/>}/>
                        <Route path="*" element={<RouteNotFound/>}/>
                    </Routes>
                </AnimatePresence>
                <Footer/>
            </Router>
        </Suspense>
    );
}

