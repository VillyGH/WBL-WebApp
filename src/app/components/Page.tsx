import {motion} from "framer-motion";
import React, {ReactNode} from "react";
import Particles from "@tsparticles/react";
import {ParticleOptsMenuDark} from "../types/ParticlesDark";
import {ParticleOptsMenu} from "../types/Particles";
import {Container} from "react-bootstrap";
import {appIsDarkMode} from "../core/Application";
import {anim, opacity, slide} from "../types/Animations";

interface PageProps {
    title?: string;
    children: ReactNode;
}

export function Page(props: PageProps) {
    const {title, children} = props;

    return (
        <Container>
            <Particles options={appIsDarkMode() ? ParticleOptsMenuDark : ParticleOptsMenu}/>
            <motion.div {...anim(slide)}/>
            <motion.div {...anim(opacity)}/>
                <h2 className="my-5">{title}</h2>
                {children}
        </Container>
    );
}
