import {Component} from "react";
import Particles from "react-particles";
import {Container, Row} from "react-bootstrap";
import {APP_NAME} from "../constants/Global";
import Logo from "../assets/images/logo.png";
import {Application} from "../core/Application"
import {ParticleOptsMenuDark} from "../types/ParticlesDark";
import {ParticleOptsMenu} from "../types/Particles";

export class Index extends Component {

    componentDidMount() {
        document.title = 'Accueil - ' + APP_NAME;
    }

    render() {
        return (
            <Container>
                <Row className={"justify-content-md-center"}>
                    <Particles options={Application.isDarkMode() ? ParticleOptsMenuDark : ParticleOptsMenu}
                               init={Application.initParticles}/>
                    <div className="mt-5 mb-4 d-flex justify-content-center">
                        <img
                            className="me-3"
                            src={Logo}
                            v-bind:alt={"Logo" + APP_NAME}
                            width={300}
                            height={200}
                        />
                    </div>
                    <h1 className="mt-6 mb-4">WBL-WebApp</h1>
                    <div className="text-center mt-4 mb-4 text-home-page-description z-1">
                        Bienvenue sur mon application web personnelle ! Ce site est dédié à regrouper les projets
                        que j’ai effectués tout au long de mon parcours en informatique.
                    </div>
                </Row>
            </Container>
        );
    }
}