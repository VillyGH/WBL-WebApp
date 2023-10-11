import React, {ReactElement} from "react";
import Particles from "react-particles";
import {APP_NAME} from "../constants/Global"
import Container from "react-bootstrap/Container";
import Logo from "../assets/images/logo.png";
import {Application} from "../core/Application";
import {ParticlesOptsDark} from "../types/ParticlesDark";
import {ParticlesOpts} from "../types/Particles";


export class Apropos extends React.Component {
    public componentDidMount() {
        document.title = "À propos - " + APP_NAME;
    }

    public render(): ReactElement | null {
        return <div>
            <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} init={Application.initParticles}/>
            <div className=" justify-content-left">
                <Container className="justify-content-left mt-4 mb-4">
                    <div className="me-4 mt-6 d-block mx-auto text-justify">
                        <h2 className="my-5">À propos du créateur</h2>
                        <p> William, un passionné de l'informatique, a fait ses premiers pas dans le monde de la technologie en 2015
                            lorsqu'il a intégré une concentration en arts et technologies de l'information et de la communication.
                            Son voyage dans le domaine de l'informatique a débuté humblement avec la création de simples sites web en HTML, CSS et JavaScript.
                            Cependant, sa soif de connaissances et son insatiable curiosité l'ont rapidement poussé à explorer une multitude de domaines.</p>

                        <p> Pendant ses années au secondaire, William a élargi ses horizons en expérimentant avec diverses facettes de l'informatique.
                            Il a plongé dans l'univers du montage photo et vidéo, perfectionnant ses compétences pour donner vie à de nombreux projets visuels
                            avec Adobe Photoshop et Illustrator. Les jeux vidéo ont également suscité son intérêt depuis un très jeune âge, et il a consacré
                            de nombreuses heures à concevoir, développer et jouer à des jeux de toutes sortes. La modélisation 3D est un autre de ces domaines
                            dont il aura eu l'occasion d'explorer durant cette période. Il s'est aventuré dans l'art de créer des objets et des environnements en trois dimensions
                            pour ensuite pouvoir imprimer certains d'entre eux en 3D. De plus, il a découvert la robotique et s'est amusé à construire et à programmer des robots
                            qui pouvaient effectuer diverses tâches simples comme suivre un parcours puis lancer un objet d'une catapulte pour qu'il atteigne une cible.
                            Il a également des acquis des connaissances en programmation en C++ puis en bases de données mais celles-ci seront approfondies lors de sa formation collégiale.</p>

                        <p> Au cours de cette formation au Cégep de Sainte Foy, il a acquis des compétences avancées en développement web, lui permettant de créer des applications web interactives et conviviales,
                            tout en maîtrisant les dernières technologies du secteur. La cybersécurité et le hacking sont devenus des sujets d'intérêt majeur pour lui, car il s'est rendu compte de l'importance de protéger les systèmes informatiques contre les menaces en ligne.
                            William a également eu l'opportunité de peaufiner ses connaissances en matière de création de jeux vidéo, créant à la fois les jeux complets en 2D et en 3D.
                            Il a aussi développé des applications mobiles qui ont facilité la vie des utilisateurs, tout en perfectionnant ses compétences en matière de développement sur Android.
                            En parallèle, il a également exploré le domaine des appareils connectés, cherchant à créer des solutions innovantes qui amélioreraient la vie quotidienne des gens.</p>

                        <p> Au fil des années, William est devenu un développeur complet et polyvalent, capable de jongler avec une variété de langages de programmation, de technologies et de concepts complexes.
                            Sa passion et son dévouement pour l'informatique l'ont amené à embrasser une carrière diversifiée où il peut continuer à créer, innover et résoudre des défis informatiques passionnants.
                            Sa quête de connaissances est sans fin, et il est prêt à repousser les limites de la technologie pour façonner un avenir numérique prometteur.</p>
                    </div>
                </Container>
            </div>
        </div>;
    }
}
