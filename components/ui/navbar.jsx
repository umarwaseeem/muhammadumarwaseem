import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-black pt-8">
            <ul className="flex flex-row space-x-4 justify-center">
                <li>
                    <Link href="/" className="text-white text-lg lg:text-2xl lg:hover:text-gray-400">home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-white text-lg lg:text-2xl lg:hover:text-gray-400">about</Link>
                </li>
                <li>
                    <Link href="/projects" className="text-white text-lg lg:text-2xl lg:hover:text-gray-400">projects</Link>
                </li>
                <li>
                    <Link href="/blogs" className="text-white text-lg lg:text-2xl lg:hover:text-gray-400">blogs</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white text-lg lg:text-2xl lg:hover:text-gray-400">contact</Link>
                </li>

            </ul>
        </nav >
    );
}