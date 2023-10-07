import {Component, ReactElement} from "react";
import Particles from "react-particles";
import {Container, Row} from "react-bootstrap";
import {APP_NAME} from "../constants/Global";
import Logo from "../assets/images/logo.png";
import {Application} from "../core/Application"
import {ParticleOptsMenuDark} from "../types/ParticlesDark";
import {ParticleOptsMenu} from "../types/Particles";

interface Props {
    isDarkMode: boolean;
}

export class Index extends Component<Props, unknown> {
    private particlesEngine: any; // Déclarer la référence particlesEngine ici

    componentDidMount() {
        document.title = 'Accueil - ' + APP_NAME;
    }

    componentDidUpdate(prevProps) {
        const prevOptions = prevProps.isDarkMode ? ParticleOptsMenuDark : ParticleOptsMenu;
        const currentOptions = this.props.isDarkMode ? ParticleOptsMenuDark : ParticleOptsMenu;

        if (prevOptions !== currentOptions) {
            Application.initParticles(this.particlesEngine);
        }
    }

    render() {
        return (
            <Container>
                <Row className={'justify-content-md-center'}>
                    <Particles
                        options={this.props.isDarkMode ? ParticleOptsMenuDark : ParticleOptsMenu}
                        ref={(particlesEngine) => (this.particlesEngine = particlesEngine)}
                    />
                    {/* Le reste de votre contenu */}
                </Row>
            </Container>
        );
    }
}