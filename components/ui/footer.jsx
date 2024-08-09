import { Caveat } from 'next/font/google';
import Link from 'next/link';

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400"]
});

export default function Footer() {
    return (
        <section className="bg-black h-[50vh] lg:p-16 p-4 text-white flex flex-col justify-between">
            <div>
                <Link href={"/"} className={`text-3xl font-bold text-white ${caveat.className}`}>Umar Waseem</Link>
                <ul className='flex flex-col pl-1 pt-4 space-y-2'>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                    <li><Link href={"/blogs"}>Blogs</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                    <li><Link href={"/resume"}>Resume</Link></li>
                    <li><Link href={"/now"}>Now</Link></li>
                </ul>
            </div>
            <p className="text-md text-gray-400">© 2024 muhammadumarwaseem.com</p>
        </section>
    )
}