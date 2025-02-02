import React, {ReactElement} from "react";
import Particles from "@tsparticles/react";
import {APP_NAME} from "../constants/Global";
import {Application} from "../core/Application";
import Dynamiques from "../deps/images/Dynamiques.png";
import Eperviers from "../deps/images/Eperviers.png";
import ClubBadmintonQuebec from "../deps/images/ClubBadmintonQuebec.png";
import SeigneursNaguerre from "../deps/images/SeigneursNaguerre.png";
import Grimoire from "../deps/images/Grimoire.png";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";
import {Container, Image, Row} from "react-bootstrap";
import {withTranslation, WithTranslation} from "react-i18next";

class group extends React.Component<WithTranslation> {

    public render(): ReactElement | null {
        const {t} = this.props;
        document.title = t("groupes") + " - " + APP_NAME;

        return (
            <Container fluid="sm">
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts}/>
                <h2>{t("teams")}</h2>
                <Row className="mb-4">
                    <Image className="img-responsive" src={Dynamiques} alt={t("group_ulaval_alt")}/>
                    <div className="mt-2">
                        <h3>{t("team_dynamiques_title")}</h3>
                        <p>{t("team_dynamiques_description")}</p>
                        <p>{t("team_dynamiques_period")}</p>
                    </div>
                </Row>
                <Row className="mb-4">
                    <Image className="img-responsive" src={Eperviers} alt={t("team_epervier_alt")}/>
                    <div className="mt-2">
                        <h3>{t("team_epervier_title")}</h3>
                        <p>{t("team_epervier_description")}</p>
                        <p>{t("team_epervier_period")}</p>
                    </div>
                </Row>
                <h2>{t("clubs")}</h2>
                <Row className="mb-4">
                    <Image className="img-responsive" src={ClubBadmintonQuebec} alt={t("group_badmintonquebec_alt")}/>
                    <div className="mt-2">
                        <h3>{t("club_badmintonquebec_title")}</h3>
                        <p>{t("club_badmintonquebec_description")}</p>
                        <p>{t("club_badmintonquebec_period")}</p>
                    </div>
                </Row>
                <Row className="mb-5">
                    <Image className="img-responsive" src={SeigneursNaguerre} alt={t("club_seigneurnaguere_alt")}/>
                    <div className="mt-2">
                        <h3>{t("club_seigneurnaguere_title")}</h3>
                        <p>{t("club_seigneurnaguere_description")}</p>
                        <p>{t("club_seigneurnaguere_period")}</p>
                    </div>
                </Row>
                <Row className="mb-4">
                    <Image className="img-responsive" src={Grimoire} alt={t("club_grimoire_alt")}/>
                    <div className="mt-2">
                        <h3>{t("club_grimoire_title")}</h3>
                        <p>{t("club_grimoire_description")}</p>
                        <p>{t("club_grimoire_period")}</p>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default withTranslation()(group);
