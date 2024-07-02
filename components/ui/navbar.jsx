import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-black pt-8">
            <ul className="flex flex-row space-x-4 justify-center">
                <li>
                    <Link href="/" className="text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl lg:hover:text-white">home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl lg:hover:text-white">about</Link>
                </li>
                <li>
                    <Link href="/projects" className="text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl lg:hover:text-white">projects</Link>
                </li>
                <li>
                    <Link href="/blogs" className="text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl lg:hover:text-white">blogs</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-gray-400 lg:hover:underline underline-offset-4 text-lg lg:text-2xl lg:hover:text-white">contact</Link>
                </li>

            </ul>
        </nav >
    );
}