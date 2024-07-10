"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function GradualSpacing({
    text,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    className,
    topClassname,
}) {
    return (
        <h1 className={`whitespace-pre-wrap ${topClassname}`}>
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={framerProps}
                        transition={{ duration, delay: i * delayMultiple }}
                        className={`inline-block ${className}`}
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.span>
                ))}
            </AnimatePresence>
        </h1>
    );
}
