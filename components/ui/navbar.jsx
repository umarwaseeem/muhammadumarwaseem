"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-midnightblue pt-6">
            <ul className="flex flex-row space-x-4 justify-center">
                <li>
                    <Link href="/" passHref>
                        <motion.div
                            initial={{ color: 'gray' }}
                            animate={{ color: pathname === '/' ? '#FFFFFF' : '#808080' }}
                            className={`text-lg lg:text-2xl font-bold lg:hover:underline underline-offset-4`}
                        >
                            home
                        </motion.div>
                    </Link>
                </li>
                <li>
                    <Link href="/about" passHref>
                        <motion.div
                            initial={{ color: 'gray' }}
                            animate={{ color: pathname === '/about' ? '#FFFFFF' : '#808080' }}
                            className={`text-lg lg:text-2xl font-bold lg:hover:underline underline-offset-4`}
                        >
                            about
                        </motion.div>
                    </Link>
                </li>
                <li>
                    <Link href="/projects" passHref>
                        <motion.div
                            initial={{ color: 'gray' }}
                            animate={{ color: pathname === '/projects' ? '#FFFFFF' : '#808080' }}
                            className={`text-lg lg:text-2xl font-bold lg:hover:underline underline-offset-4`}
                        >
                            projects
                        </motion.div>
                    </Link>
                </li>
                <li>
                    <Link href="/blogs" passHref>
                        <motion.div
                            initial={{ color: 'gray' }}
                            animate={{ color: pathname === '/blogs' ? '#FFFFFF' : '#808080' }}
                            className={`text-lg lg:text-2xl font-bold lg:hover:underline underline-offset-4`}
                        >
                            blogs
                        </motion.div>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" passHref>
                        <motion.div
                            initial={{ color: 'gray' }}
                            animate={{ color: pathname === '/contact' ? '#FFFFFF' : '#808080' }}
                            className={`text-lg lg:text-2xl font-bold lg:hover:underline underline-offset-4`}
                        >
                            contact
                        </motion.div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
