import {motion} from "framer-motion";
import React, {ReactNode} from "react";
import Particles from "@tsparticles/react";
import {Application} from "../core/Application";
import {ParticleOptsMenuDark} from "../types/ParticlesDark";
import {ParticleOptsMenu} from "../types/Particles";
import {Container} from "react-bootstrap";

export const Page = ({title, children}: {title?: string, children: ReactNode}) => {
    const opacity = {
        initial: {
            opacity: 0,
            y: 10,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1.25,
            },
        },
    };

    const slide = {
        initial: {
            top: "100vh"
        },
        animate: {
            top: "100vh"
        },
        exit: {
            top: "0",
            transition: {
                duration: 1.25,
                ease: [0.43, 0.13, 0.23, 0.96]
            },
        },
    };

    const anim = (variants) => ({
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants: variants,
    });

    return (
        <Container>
            <Particles options={Application.isDarkMode() ? ParticleOptsMenuDark : ParticleOptsMenu}/>
            <motion.div {...anim(slide)}/>
            <motion.div {...anim(opacity)}>
                <h2 className="my-5">{title}</h2>
                {children}
            </motion.div>
        </Container>
    );
};