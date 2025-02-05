"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMail, FiGithub, FiTwitter, FiInstagram, FiLinkedin, FiBookOpen, FiCopy, FiCheck } from 'react-icons/fi';

const contactLinks = [
    {
        label: 'Email',
        href: 'mailto:umar.waseem@gmail.com',
        text: 'umar.waseem@gmail.com',
        icon: FiMail,
        color: 'hover:bg-red-500/10 hover:text-red-500',
        borderColor: 'group-hover:border-red-500',
    },
    {
        label: 'Github',
        href: 'https://github.com/umarwaseeem',
        text: '@umarwaseeem',
        icon: FiGithub,
        color: 'hover:bg-gray-500/10 hover:text-gray-300',
        borderColor: 'group-hover:border-gray-300',
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/umarwaseeem',
        text: '@umarwaseeem',
        icon: FiTwitter,
        color: 'hover:bg-blue-400/10 hover:text-blue-400',
        borderColor: 'group-hover:border-blue-400',
    },
    {
        label: 'Medium',
        href: 'https://umarwaseeem.medium.com/',
        text: '@umarwaseeem',
        icon: FiBookOpen,
        color: 'hover:bg-green-500/10 hover:text-green-500',
        borderColor: 'group-hover:border-green-500',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/umarwaseeem/',
        text: '@umarwaseeem',
        icon: FiInstagram,
        color: 'hover:bg-pink-500/10 hover:text-pink-500',
        borderColor: 'group-hover:border-pink-500',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/umarwaseeem/',
        text: '@umarwaseeem',
        icon: FiLinkedin,
        color: 'hover:bg-blue-600/10 hover:text-blue-600',
        borderColor: 'group-hover:border-blue-600',
    },
];

function ContactCard({ link, index, onCopy }) {
    const [copied, setCopied] = useState(false);
    const Icon = link.icon;

    const handleCopy = () => {
        navigator.clipboard.writeText(link.href);
        setCopied(true);
        onCopy(link.href);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`group w-full relative rounded-xl border border-white/10 backdrop-blur-sm 
                       transition-all duration-300 ${link.color}`}
        >
            <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 space-x-4"
            >
                <div className={`p-3 rounded-lg transition-colors duration-300 ${link.color}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-400">{link.label}</p>
                    <p className="text-white font-medium">{link.text}</p>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleCopy();
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    title="Copy to clipboard"
                >
                    {copied ? (
                        <FiCheck className="w-5 h-5 text-green-500" />
                    ) : (
                        <FiCopy className="w-5 h-5 text-gray-400" />
                    )}
                </button>
            </a>
            <div className={`absolute inset-x-0 -bottom-[1px] h-[1px] bg-gradient-to-r from-transparent via-white/0 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />
        </motion.div>
    );
}

export default function ContactList() {
    const [isVisible, setIsVisible] = useState(false);
    const [copiedText, setCopiedText] = useState('');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleCopy = (text) => {
        setCopiedText(text);
    };

    return (
        <div className="w-full max-w-5xl">
            <h3 className="text-white text-xl font-medium mb-6">Or reach out through social media</h3>
            <AnimatePresence>
                {isVisible && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        {contactLinks.map((link, index) => (
                            <ContactCard
                                key={index}
                                link={link}
                                index={index}
                                onCopy={handleCopy}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}