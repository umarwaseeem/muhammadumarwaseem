"use client"

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import LinkIcon from '../components/icons/link-icon';
import PageWrapper from '../components/pagewrapper';
import { useEffect, useState } from 'react';

const contactLinks = [
    {
        label: 'Email: ',
        href: 'mailto:umar.waseem@gmail.com',
        text: 'umar.waseem@gmail.com',
        color: 'text-red-600',
    },
    {
        label: 'Github: ',
        href: 'https://github.com/Umar-Waseem',
        text: '@Umar-Waseem',
        color: 'text-gray-500',
    },
    {
        label: 'Twitter / X: ',
        href: 'https://twitter.com/umar_terminator',
        text: '@umar_terminator',
        color: 'text-purple-500',
    },
    {
        label: 'Medium: ',
        href: 'https://medium.com/@umar.waseem',
        text: '@umar.waseem',
        color: 'text-gray-500',
    },
    {
        label: 'Instagram: ',
        href: 'https://www.instagram.com/umarwaseeem/',
        text: '@umarwaseeem',
        color: 'text-pink-600',
    },
    {
        label: 'Linkedin: ',
        href: 'https://www.linkedin.com/in/umarwaseem/',
        text: '@umarwaseem',
        color: 'text-blue-600',
    },
];

const listItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <PageWrapper>
            <section className="flex h-[93vh] flex-col items-center lg:items-start lg:justify-start bg-midnightblue p-16">
                <h2 className="font-bold text-4xl lg:text-8xl text-white mb-14">get in touch</h2>
                <div className="flex flex-col items-center lg:items-start space-y-6">
                    <AnimatePresence>
                        {isVisible && (
                            <>
                                {contactLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        className={`flex items-center space-x-2`}
                                        variants={listItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        custom={index}
                                    >
                                        <span className={`${link.color} font-bold text-xl lg:text-4xl`}>{link.label}</span>
                                        <Link href={link.href} className="hover:underline underline-offset-8 text-xl lg:text-4xl text-gray-200">{link.text}</Link>
                                        <LinkIcon />
                                    </motion.div>
                                ))}
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </PageWrapper>
    );
}
