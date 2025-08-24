import {motion} from "framer-motion";
import {ReactNode} from "react";

const pageVariants = {
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

export const PageTransition = ({children}: {children: ReactNode}) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    );
};