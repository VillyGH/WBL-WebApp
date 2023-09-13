import React from "react";
import Particles from "react-particles";
import {LinkContainer} from "react-router-bootstrap";
import {ParticlesOpts} from "../types/Particles";
import { Container, Button, Row } from "react-bootstrap";

export class Index extends React.Component {
    public componentDidMount() {
        document.title = "Accueil - WBL-WebApp";
    }

    public render(): JSX.Element {
            return (
                <Container>
                    <Row className={"justify-content-md-center"}>
                        <Particles options={ParticlesOpts} init={this.#customInit}/>
                        <div className="mt-6 mb-4 mt-4 z-1">
                            <h1><img
                                className="me-3"
                                src={Logo}
                                alt="Logo WBL-WebApp"
                                width={150}
                                height={190}
                            />TaskMaster</h1>
                        </div>

                        <div className="text-center mt-4 mb-4 text-home-page-description z-1">
                            TaskMaster est un gestionnaire d'horaire pour entreprise.
                            En tant qu'application web, TaskMaster est accessible partout et permet à une entreprise de
                            mieux gérer ses effectifs.
                        </div>

                        <div className="me-4 mt-4 d-block text-center justify-content-center mx-auto z-1">
                            <LinkContainer to={RoutesPath.LOGIN}>
                                <Button
                                    data-testid="submitLogin"
                                    className="mt-4 btn-dark"
                                    variant="primary"
                                    size="lg"
                                    type="submit"
                                    value="Submit"
                                >
                                    Connexion
                                </Button>
                            </LinkContainer>
                        </div>
                    </Row>
                </Container>
            );
        }
    }
}