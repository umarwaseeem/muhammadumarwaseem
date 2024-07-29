"use client"

import { motion } from 'framer-motion';
import GithubIcon from './icons/github-icon';
import LinkedinIcon from './icons/linkedin-icon';
import TwitterIcon from './icons/twitter-icon';
import InstagramIcon from './icons/instagram-icon';
import EmailIcon from './icons/email-icon';
import Link from 'next/link';

const iconData = [
    {
        href: "https://www.instagram.com/umarwaseeem/",
        ariaLabel: "muhammad umar waseem instagram link",
        icon: InstagramIcon,
        colorClass: "text-red-500"
    },
    {
        href: "https://twitter.com/umarwaseeem",
        ariaLabel: "muhammad umar waseem twitter link",
        icon: TwitterIcon,
        colorClass: "text-purple-500"
    },
    {
        href: "https://www.linkedin.com/in/umarwaseeem/",
        ariaLabel: "muhammad umar waseem linkedin link",
        icon: LinkedinIcon,
        colorClass: "text-blue-500"
    },
    {
        href: "https://github.com/umarwaseeem",
        ariaLabel: "muhammad umar waseem github link",
        icon: GithubIcon,
        colorClass: "text-gray-200"
    },
    {
        href: "mailto:umar.waseem@gmail.com",
        ariaLabel: "muhammad umar waseem email",
        icon: EmailIcon,
        colorClass: "text-red-500"
    },
];

const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const staggerItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

export default function SocialIcons() {
    return (
        <motion.div
            className="flex px-2 items-center mb-4 space-x-4"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
        >
            {iconData.map(({ href, ariaLabel, icon: Icon, colorClass }, index) => (
                <motion.div key={index} variants={staggerItem}>
                    <Link
                        aria-label={ariaLabel}
                        passHref
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon className={`w-8 h-8 ${colorClass} hover:text-gray-400 hover:-translate-y-1 hover:transition`} />
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}
