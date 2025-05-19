import {Component} from "react";
import Particles from "@tsparticles/react";
import {Container, Row} from "react-bootstrap";
import {APP_NAME} from "../constants/Global";
import Logo from "../deps/images/logo.png";
import LogoDark from "../deps/images/logoDark.png";
import {Application} from "../core/Application"
import {ParticleOptsMenuDark} from "../types/ParticlesDark";
import {ParticleOptsMenu} from "../types/Particles";
import {withTranslation, WithTranslation} from "react-i18next";

class Index extends Component<WithTranslation> {

    render() {
        const {t} = this.props;
        document.title = t("index") + ' - ' + APP_NAME;
        return (
            <Container>
                <Particles options={Application.isDarkMode() ? ParticleOptsMenuDark : ParticleOptsMenu}/>
                <Row>
                    <div className="d-flex justify-content-center">
                        <img className="me-3" src={Application.isDarkMode() ? Logo : LogoDark}
                             v-bind:alt={"Logo" + APP_NAME} width={300} height={200}/>
                    </div>
                    <h1 className="">William Blanchet Lafrenière</h1>
                    <div className="text-center mt-4 mb-4 z-1">{t("index_title")}</div>
                </Row>
            </Container>
        );
    }
}

export default withTranslation()(Index);