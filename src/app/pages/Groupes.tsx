import React, {ReactElement} from "react";
import {APP_NAME} from "../constants/Global";
import {appIsDarkMode} from "../core/Application";
import Dynamiques from "../deps/images/Dynamiques.png";
import Eperviers from "../deps/images/Eperviers.png";
import CIAUL from "../deps/images/CIAUL2.png";
import ClubBadmintonQuebec from "../deps/images/ClubBadmintonQuebec.png";
import ClubBadmintonQuebecBlanc from "../deps/images/ClubBadmintonQuebecBlanc.png";
import SeigneursNaguerre from "../deps/images/SeigneursNaguerre.png";
import Grimoire from "../deps/images/Grimoire.png";
import ClubLAncienneLorette from "../deps/images/ClubLAncienneLorette.svg";
import ClubLAncienneLoretteBlanc from "../deps/images/ClubLAncienneLoretteBlanc.png";
import {Image, Row} from "react-bootstrap";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page} from "../components/Page";

class Groupes extends React.Component<WithTranslation> {

    public render(): ReactElement | null {
        const {t} = this.props;
        document.title = t("groupes") + " - " + APP_NAME;

        return (
            <Page title={t("teams")}>
                <Row className="mb-4">
                    <Image className="img-responsive" src={Dynamiques} alt={t("group_ulaval_alt")}/>
                    <h3 className="my-4">{t("team_dynamiques_title")}</h3>
                    <p>{t("team_dynamiques_description")}</p>
                    <p>{t("team_dynamiques_period")}</p>
                </Row>
                <Row className="mb-4">
                    <Image className="img-responsive" src={Eperviers} alt={t("team_epervier_alt")}/>
                    <h3 className="my-4">{t("team_epervier_title")}</h3>
                    <p>{t("team_epervier_description")}</p>
                    <p>{t("team_epervier_period")}</p>
                </Row>
                <h2 className="my-5">{t("clubs")}</h2>
                <Row className="mb-4">
                    <Image className="img-responsive" src={CIAUL} alt={t("group_cia_alt")}/>
                    <h3 className="my-4">{t("club_cia_title")}</h3>
                    <p>{t("club_cia_description")}</p>
                    <p>{t("club_cia_period")}</p>
                </Row>
                <Row className="mb-4">
                    <Image className="img-responsive"
                           src={appIsDarkMode() ? ClubBadmintonQuebecBlanc : ClubBadmintonQuebec}
                           alt={t("group_badmintonquebec_alt")}/>
                    <h3 className="my-4">{t("club_badmintonquebec_title")}</h3>
                    <p>{t("club_badmintonquebec_description")}</p>
                    <p>{t("club_badmintonquebec_period")}</p>
                </Row>
                <Row className="mb-5">
                    <Image className="img-responsive" src={SeigneursNaguerre} alt={t("club_seigneurnaguere_alt")}/>
                    <h3 className="my-4">{t("club_seigneurnaguere_title")}</h3>
                    <p>{t("club_seigneurnaguere_description")}</p>
                    <p>{t("club_seigneurnaguere_period")}</p>
                </Row>
                <Row className="mb-4">
                    <Image className="img-responsive" src={Grimoire} alt={t("club_grimoire_alt")}/>
                    <h3 className="my-4">{t("club_grimoire_title")}</h3>
                    <p>{t("club_grimoire_description")}</p>
                    <p>{t("club_grimoire_period")}</p>
                </Row>
                <Row className="mb-4">
                    <Image className="img-responsive"
                           src={appIsDarkMode() ? ClubLAncienneLoretteBlanc : ClubLAncienneLorette}
                           alt={t("club_tennis_ll_alt")}/>
                    <h3 className="my-4">{t("club_tennis_ll_title")}</h3>
                    <p>{t("club_tennis_ll_description")}</p>
                    <p>{t("club_tennis_ll_period")}</p>
                </Row>
            </Page>
        );
    }
}

export default withTranslation()(Groupes);
