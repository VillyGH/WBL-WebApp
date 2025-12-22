import React, {ReactElement} from "react";
import {APP_NAME} from "../constants/Global"
import {Row} from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import LolPickBanUI from "../deps/images/LolPickBanUI.png";
import Battleship from "../deps/images/Battleship.png";
import TMAcceuil from "../deps/images/TaskMasterAccueil.png";
import InfiniteCraft from "../deps/images/InfiniteCraft.png";
import Revolvair from "../deps/images/Revolvair.jpg";
import FlappyBrain from "../deps/images/FlappyBrain.png";
import GardienLegend from "../deps/images/GardienLegend.png";
import FactionWar from "../deps/images/FactionWar.png";
import FaceFlow from "../deps/images/FaceFlow.png";
import UFood from "../deps/images/UFood.png";
import UTasks from "../deps/images/UTasks.png";
import Peps from "../deps/images/Peps.png";
import {faDownload, faPlay, faTrophy} from "@fortawesome/free-solid-svg-icons";
import {RoutesPath} from "../RoutesPath";
import "../deps/css/projets.css";
import {useTranslation} from "react-i18next";
import {Page} from "../components/Page";

const Projets: React.FC = (): ReactElement | null => {
    const {t} = useTranslation();
    document.title = t("projets") + " - " + APP_NAME;

    return (
        <Page title={t("projets_title")}>
            <Row>
                <ProjectCard
                    image={UFood}
                    link="https://ufood-equipe2.pages.dev"
                    title={t("projets_ufood_title")}
                    description={t("projets_ufood_description")}
                    targetBlank
                />
                <ProjectCard
                    image={UTasks}
                    link="https://utasks-equipe3.pages.dev"
                    title={t("projets_utasks_title")}
                    description={t("projets_utasks_description")}
                    targetBlank
                />
                <ProjectCard
                    image={LolPickBanUI}
                    link={"https://github.com/cia-ulaval/lol-pick-ban-ui"}
                    title={t("projets_lolpickbanui_title")}
                    description={t("projets_lolpickbanui_description")}
                />
                <ProjectCard
                    image={FlappyBrain}
                    link={RoutesPath.FLAPEEG}
                    title={t("projets_flapeeg_title")}
                    description={t("projets_flapeeg_description")}
                    icon={faPlay}
                />
                <ProjectCard
                    image={Battleship}
                    link={"https://github.com/VillyGH/BattleshipGameplay"}
                    title={t("projets_battleship_title")}
                    description={t("projets_battleship_description")}
                />
                <ProjectCard
                    image={Peps}
                    link={RoutesPath.PEPSRESERVATIONBOT}
                    title={t("projets_peps_title")}
                    description={t("projets_peps_description")}
                    icon={faDownload}
                />
                <ProjectCard
                    image={FactionWar}
                    link={RoutesPath.FACTIONWAR}
                    title={t("projets_factionwar_title")}
                    description={t("projets_factionwar_description")}
                    icon={faDownload}
                />
                <ProjectCard
                    image={Revolvair}
                    link="https://gitlab.com/VillyGH/tp3-wbl-fl"
                    title={t("projets_revolvair_title")}
                    description={t("projets_revolvair_description")}
                    icon={faTrophy}
                    targetBlank
                />
                <ProjectCard
                    image={TMAcceuil}
                    link="https://drfwclient.pages.dev"
                    title={t("projets_taskmaster_title")}
                    description={t("projets_taskmaster_description")}
                    targetBlank
                />
                <ProjectCard
                    image={FaceFlow}
                    link="https://github.com/VillyGH/FaceFlow"
                    title={t("projets_faceflow_title")}
                    description={t("projets_faceflow_description")}
                    targetBlank
                />

                <ProjectCard
                    image={InfiniteCraft}
                    link="https://www.automa.site/workflow/D4y36oIbejMmDfscMJH4e"
                    title={t("projets_infinitecraft_title")}
                    description={t("projets_infinitecraft_description")}
                    targetBlank
                />
                <ProjectCard
                    image={GardienLegend}
                    link="https://github.com/VillyGH/TP2-Gardien-Legend"
                    title={t("projets_gardien_title")}
                    description={t("projets_gardien_description")}
                    targetBlank
                />
            </Row>
        </Page>
    );
};

export default Projets;
