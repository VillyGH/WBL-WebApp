import {Component} from "react";
import Particles from "@tsparticles/react";
import {Container, Row} from "react-bootstrap";
import {APP_NAME} from "../constants/Global";
import Logo from "../deps/images/logo.png";
import LogoDark from "../deps/images/logoDark.png";
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
                    <Particles options={Application.isDarkMode() ? ParticleOptsMenuDark : ParticleOptsMenu} />
                    <div className="mt-5 mb-4 d-flex justify-content-center">
                        <img
                            className="me-3"
                            src={Application.isDarkMode() ? Logo : LogoDark}
                            v-bind:alt={"Logo" + APP_NAME}
                            width={300}
                            height={200}
                        />
                    </div>
                    <h1 className="mt-6 mb-4">William Blanchet Lafrenière</h1>
                    <div className="text-center mt-4 mb-4 text-home-page-description z-1">
                        Bienvenue sur le site web personnel de William Blanchet Lafrenière. Ce site est dédié à regrouper les projets
                        qu'il a effectué tout au long de son parcours en informatique.
                    </div>
                </Row>
            </Container>
        );
    }
}