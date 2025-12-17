export const opacity = {
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

export const slide = {
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

export const anim = (variants) => ({
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: variants,
});