"use client"

import Link from 'next/link';
import LinkIcon from './icons/link-icon';


import { motion } from 'framer-motion';

const linkVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
        },
    }),
};

export default function AnimatedLink({ linkText, custom, className, href }) {
    return (
        <motion.div
            custom={custom}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className={className}
        >
            <Link href={href} className="text-green-500 font-extrabold text-lg">
                {linkText}
                <LinkIcon />
            </Link>
        </motion.div>
    )
}