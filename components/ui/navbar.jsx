"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-midnightblue pt-6">
            <ul className="flex flex-row space-x-4 justify-center">
                <li>
                    <Link href="/" className={`text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl ${pathname === '/' ? 'text-white font-bold' : 'lg:hover:text-white'}`}>home</Link>
                </li>
                <li>
                    <Link href="/about" className={`text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl ${pathname === '/about' ? 'text-white font-bold' : 'lg:hover:text-white'}`}>about</Link>
                </li>
                <li>
                    <Link href="/projects" className={`text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl ${pathname === '/projects' ? 'text-white font-bold' : 'lg:hover:text-white'}`}>projects</Link>
                </li>
                <li>
                    <Link href="/blogs" className={`text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl ${pathname === '/blogs' ? 'text-white font-bold' : 'lg:hover:text-white'}`}>blogs</Link>
                </li>
                <li>
                    <Link href="/contact" className={`text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl ${pathname === '/contact' ? 'text-white font-bold' : 'lg:hover:text-white'}`}>contact</Link>
                </li>
            </ul>
        </nav>
    );
}
