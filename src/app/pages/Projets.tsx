import React, {ReactElement} from "react";
import {APP_NAME} from "../constants/Global"
import {Row} from "react-bootstrap";
import {ProjectCard} from "../components/ProjectCard";
import TMAcceuil from "../deps/images/TaskMasterAccueil.png";
import InfiniteCraft from "../deps/images/InfiniteCraft.png";
import Revolvair from "../deps/images/Revolvair.jpg";
import FlappyBrain from "../deps/images/FlappyBrain.png";
import GardienLegend from "../deps/images/GardienLegend.png";
import FactionWar from "../deps/images/FactionWar.png";
import FaceFlow from "../deps/images/FaceFlow.png";
import Peps from "../deps/images/Peps.png";
import {faDownload, faPlay, faTrophy} from "@fortawesome/free-solid-svg-icons";
import {RoutesPath} from "../RoutesPath";
import "../deps/css/projets.css";
import {withTranslation, WithTranslation} from "react-i18next";
import { Page } from "../components/Page";

class Projets extends React.Component<WithTranslation> {
    public render(): ReactElement | null {
        const {t} = this.props;
        document.title = t("projets") + " - " + APP_NAME;
        return (
            <Page title={t("projets_title")}>
                <Row>
                    <ProjectCard
                        image={FlappyBrain}
                        link={RoutesPath.FLAPEEG}
                        title={t("projets_ciaul_title")}
                        description={t("projets_ciaul_description")}
                        icon={faPlay}
                        targetBlank={false}
                    />
                    <ProjectCard
                        image={Peps}
                        link={RoutesPath.PEPSRESERVATIONBOT}
                        title={t("projets_peps_title")}
                        description={t("projets_peps_description")}
                        icon={faDownload}
                        targetBlank={false}
                    />
                    <ProjectCard
                        image={FactionWar}
                        link={RoutesPath.FACTIONWAR}
                        title={t("projets_factionwar_title")}
                        description={t("projets_factionwar_description")}
                        icon={faDownload}
                        targetBlank={false}
                    />
                    <ProjectCard
                        image={Revolvair}
                        link="https://gitlab.com/VillyGH/tp3-wbl-fl"
                        title={t("projets_revolvair_title")}
                        description={t("projets_revolvair_description")}
                        icon={faTrophy}
                    />
                    <ProjectCard
                        image={TMAcceuil}
                        link="https://drfwclient.pages.dev"
                        title={t("projets_taskmaster_title")}
                        description={t("projets_taskmaster_description")}
                    />
                    <ProjectCard
                        image={FaceFlow}
                        link="https://github.com/VillyGH/FaceFlow"
                        title={t("projets_faceflow_title")}
                        description={t("projets_faceflow_description")}
                    />

                    <ProjectCard
                        image={InfiniteCraft}
                        link="https://www.automa.site/workflow/D4y36oIbejMmDfscMJH4e"
                        title={t("projets_infinitecraft_title")}
                        description={t("projets_infinitecraft_description")}
                    />
                    <ProjectCard
                        image={GardienLegend}
                        link="https://github.com/VillyGH/TP2-Gardien-Legend"
                        title={t("projets_gardien_title")}
                        description={t("projets_gardien_description")}
                    />
                </Row>
            </Page>
        );
    }
}

export default withTranslation()(Projets);