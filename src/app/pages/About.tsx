import React, {ReactElement} from "react";
import {ParticlesOpts} from "../types/Particles";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import Logo from "../assets/images/logo.png";

/**
 * Ceci est la page : à propos de nous
 */
export class About extends React.Component {
    public componentDidMount() {
        document.title = "À propos - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={ParticlesOpts}/>
            <div className=" justify-content-left">
                <Container className="mt-4 mb-4 d-flex justify-content-center"><h1>TaskMaster</h1></Container>
                <Container className="mt-6 mb-4 d-flex justify-content-center"><img
                    className="me-3"
                    src={Logo.src}
                    alt="Logo TaskMaster"
                    width={200}
                    height={240}
                /></Container>
                <Container className="justify-content-left mt-4 mb-4">
                    <div className="me-4 mt-6 d-block  mx-auto">
                        <h2 className="text-left"> Auteurs</h2>
                        <p className="text-left">David Lawton - Horaire, Disponibilités</p>
                        <p className="text-left">Romin Martignat - Calendrier, Disponibilités</p>
                        <p className="text-left">Félix-Antoine Belleau - Employés, Horaire</p>
                        <p className="text-left">William Blanchet Lafrenière - Départements, Employés</p>
                    </div>
                </Container>
            </div>
        </div>;
    }
}
