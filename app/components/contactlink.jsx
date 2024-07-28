// components/ContactLink.js
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const listItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 20,
            duration: 0.6,
            bounce: 0.3,
        },
    },
};

const ContactLink = ({ link, index, copyText }) => {
    return (
        <motion.div
            className={`flex items-center space-x-2`}
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index}
        >
            <span className={`${link.color} font-bold text-lg md:text-xl lg:text-2xl`}>{link.label}</span>
            <Link href={link.href} className="hover:underline underline-offset-4 lg:underline-offset-8 text-lg md:text-xl lg:text-2xl text-gray-200">{link.text}</Link>
            <Image
                src={"/copy.svg"}
                className='cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out'
                alt={link.text} width={16} height={16}
                onClick={() => copyText(link.href)}
            />
        </motion.div>
    );
}

export default ContactLink;
