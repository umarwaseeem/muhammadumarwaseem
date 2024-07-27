"use client"

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import ContactLink from './contactlink';

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
        text: '@umarwaseeem',
        color: 'text-gray-500',
    },
    {
        label: 'Twitter: ',
        href: 'https://twitter.com/umar_terminator',
        text: '@umarwaseeem',
        color: 'text-purple-500',
    },
    {
        label: 'Medium: ',
        href: 'https://medium.com/@umar.waseem',
        text: '@umarwaseeem',
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
        text: '@umarwaseeem',
        color: 'text-blue-600',
    },
];




export default function ContactList() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <div className="flex flex-col items-start lg:items-start space-y-6">
                <AnimatePresence>
                    {isVisible && (
                        <>
                            {contactLinks.map((link, index) => (
                                <ContactLink key={index} link={link} index={index} copyText={copyText} />
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}