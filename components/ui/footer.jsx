import { Caveat } from 'next/font/google';
import Link from 'next/link';

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400"]
});

export default function Footer() {
    return (
        <section className="bg-black h-[40vh] lg:p-16 p-4 text-white flex flex-col justify-between">
            <div>
                <Link href={"/"} className={`text-4xl font-bold text-white ${caveat.className}`}>Umar Waseem</Link>
                <ul className='flex flex-col pl-1 pt-4 space-y-2'>
                    <l1><Link href={"/about"}>About</Link></l1>
                    <l1><Link href={"/projects"}>Projects</Link></l1>
                    <l1><Link href={"/contact"}>Contact</Link></l1>
                    <l1><Link href={"/resume"}>Resume</Link></l1>
                    <l1><Link href={"/now"}>Now</Link></l1>
                </ul>
            </div>
            <p className="text-lg text-gray-400">© 2024 muhammadumarwaseem.com</p>
        </section>
    )
}