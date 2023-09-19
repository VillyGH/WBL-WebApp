import {Component, ReactElement} from "react";
import Particles from "react-particles";
import {ParticlesOpts} from "../types/Particles";
import { Container, Row } from "react-bootstrap";
import Logo from "../assets/images/logo.png";

export class Index extends Component {
    public componentDidMount() {
        document.title = "Accueil - WBL-WebApp";
    }

    public render(): ReactElement | null {
            return (
                <Container>
                    <Row className={"justify-content-md-center"}>
                        <Particles options={ParticlesOpts} />
                        <div className="mt-6 mb-4 mt-4 z-1">
                            <h1><img
                                className="me-3"
                                src={Logo}
                                alt="Logo WBL-WebApp"
                                width={150}
                                height={190}
                            />WBL-WebApp</h1>
                        </div>

                        <div className="text-center mt-4 mb-4 text-home-page-description z-1">
                            Bienvenue sur mon application web personnel ! Ce site est dédié à regrouper les projets
                            que j’ai effectué tout au long de mon parcours en informatique.
                        </div>
                    </Row>
                </Container>
            );
    }
}