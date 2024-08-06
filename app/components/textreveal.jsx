"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import LinkIcon from "./icons/link-icon";
import Image from "next/image";

const TextRevealByWord = ({ text, className, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const words = text.split(" ");

    // Use scrollYProgress to control the link's visibility
    const linkOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

    return (
        <div ref={targetRef} className={`relative h-[200vh] ${className}`}>
            <div className={"sticky top-0 flex flex-col h-[50%] items-start justify-center bg-transparent"}>
                <div className="flex justify-start items-center w-1/2 lg:w-full pb-10">
                    <Image src="/umar.jpeg" alt="Umar's image" width={200} height={200} className="rounded-full" />
                </div>
                <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold pb-4'>{heading}</h2>
                <p className={"flex flex-wrap lg:text-2xl text-xl"}>
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
                <motion.div
                    style={{ opacity: linkOpacity }}
                    className="mt-4"
                >
                    <Link href="/about" className="text-green-500 text-xl">
                        Know about me in detail
                        <LinkIcon />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative mr-1">
            <span className={"absolute opacity-0"}>{children}</span>
            <motion.span style={{ opacity: opacity }} className={"text-gray-400"}>
                {children}
            </motion.span>
        </span>
    );
};

export default TextRevealByWord;
