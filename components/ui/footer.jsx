import Link from 'next/link';
import SocialIcons from '../../app/components/socialicons';


export default function Footer() {
    return (
        <footer className="bg-black h-fit lg:p-16 p-4 text-white flex flex-col space-y-4 justify-between items-center">
            <Link href={"mailto:umar.waseem@gmail.com"} className={`lg:text-6xl text-center text-3xl font-bold text-white`}>umar.waseem@gmail.com</Link>
            <SocialIcons height={24} width={24} />
            <p className='text-center italic text-md lg:text-lg px-20'>If you have an interesting project, or just want to get in contact, feel free to reach out</p>
            <ul className='flex flex-row justify-center space-x-2 text-sm lg:text-lg'>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/blogs"}>Blogs</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
                <li><Link href={"/resume"}>Resume</Link></li>
                <li><Link className='text-red-500' href={"/now"}>Now</Link></li>
            </ul>
            <p className="text-sm text-gray-400 text-center">© 2024 Muhammad Umar Waseem</p>
        </footer>
    )
}