"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-midnightblue pt-8">
            <div className="flex flex-row justify-between items-center px-8">
                <Link href={"/"} className="text-2xl font-bold text-white lg:hidden font-serif">Umar Waseem</Link>
                <div className="lg:hidden">
                    <button onClick={toggleHamburger} className="focus:outline-none">
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </motion.svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 space-y-4 flex flex-col items-center justify-center bg-midnightblue text-white text-4xl z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <button onClick={closeMenu} className="absolute top-6 right-6 focus:outline-none">
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    </button>
                    <Link href="/" passHref>
                        <motion.div
                            onClick={closeMenu}
                            className="w-full py-2 px-8 text-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            home
                        </motion.div>
                    </Link>
                    <Link href="/about" passHref>
                        <motion.div
                            onClick={closeMenu}
                            className="w-full py-2 px-8 text-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            about
                        </motion.div>
                    </Link>
                    <Link href="/projects" passHref>
                        <motion.div
                            onClick={closeMenu}
                            className="w-full py-2 px-8 text-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            projects
                        </motion.div>
                    </Link>
                    <Link href="/blogs" passHref>
                        <motion.div
                            onClick={closeMenu}
                            className="w-full py-2 px-8 text-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            blogs
                        </motion.div>
                    </Link>
                    <Link href="/contact" passHref>
                        <motion.div
                            onClick={closeMenu}
                            className="w-full py-2 px-8 text-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            contact
                        </motion.div>
                    </Link>
                </motion.div>
            )}
            {!isOpen && (
                <ul className="hidden lg:flex flex-row space-x-4 lg:px-16 mb-8 lg:justify-start">
                    <li>
                        <Link href="/" passHref>
                            <motion.div
                                initial={{ color: 'gray' }}
                                animate={{ color: pathname === '/' ? '#FFFFFF' : '#808080' }}
                                className={`text-lg lg:text-2xl font-bold ${pathname === '/' ? "" : "lg:hover:underline underline-offset-4"}`}
                            >
                                {pathname === '/' ? "<home/>" : "home"}
                            </motion.div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                            <motion.div
                                initial={{ color: 'gray' }}
                                animate={{ color: pathname === '/about' ? '#FFFFFF' : '#808080' }}
                                className={`text-lg lg:text-2xl font-bold ${pathname === '/about' ? "" : "lg:hover:underline underline-offset-4"}`}
                            >
                                {pathname === '/about' ? "<about/>" : "about"}
                            </motion.div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" passHref>
                            <motion.div
                                initial={{ color: 'gray' }}
                                animate={{ color: pathname === '/projects' ? '#FFFFFF' : '#808080' }}
                                className={`text-lg lg:text-2xl font-bold ${pathname === '/projects' ? "" : "lg:hover:underline underline-offset-4"}`}
                            >
                                {pathname === '/projects' ? "<projects/>" : "projects"}
                            </motion.div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" passHref>
                            <motion.div
                                initial={{ color: 'gray' }}
                                animate={{ color: pathname === '/blogs' ? '#FFFFFF' : '#808080' }}
                                className={`text-lg lg:text-2xl font-bold ${pathname === '/blogs' ? "" : "lg:hover:underline underline-offset-4"}`}
                            >
                                {pathname === '/blogs' ? "<blogs/>" : "blogs"}
                            </motion.div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" passHref>
                            <motion.div
                                initial={{ color: 'gray' }}
                                animate={{ color: pathname === '/contact' ? '#FFFFFF' : '#808080' }}
                                className={`text-lg lg:text-2xl font-bold ${pathname === '/contact' ? "" : "lg:hover:underline underline-offset-4"}`}
                            >
                                {pathname === '/contact' ? "<contact/>" : "contact"}
                            </motion.div>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
