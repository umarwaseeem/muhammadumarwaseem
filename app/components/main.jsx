
import PageWrapper from './pagewrapper';

import LinkIcon from '../components/icons/link-icon';
import GradualSpacing  from '../components/gradualspacing';
import SocialIcons from '../components/socialicons';

import Link from 'next/link';

export default function Main() {
    return (
        <PageWrapper>

            <main className="flex h-[calc(100vh-100px)] flex-col lg:w-3/5 lg:items-start items-start justify-center lg:justify-end bg-midnightblue p-6 lg:p-16 lg:pb-40">
                <SocialIcons />
                <GradualSpacing topClassname={"pl-2"} className="font-bold text-4xl md:text-6xl lg:text-7xl text-white lg:text-left mb-2 text-left" text="muhammad umar waseem" />
                <h2 className="px-2 text-xl md:text-3xl lg:text-3xl text-gray-400 lg:text-left text-left">muhammad umar is a pakistan based 
                        <span className='hover:text-green-500'> full stack software</span> and computer science graduate skilled in
                        <span className='hover:text-red-500'> web </span>, 
                        <span className='hover:text-red-500'> mobile </span>and
                        <span className='hover:text-red-500'> AI </span>
                        based solutions.
                </h2>
                <div className="flex flex-col justify-evenly">
                    <Link href="/blogs" className="mt-6  px-2 text-green-500 font-extrabold text-lg">
                        Read my tech blog
                        <LinkIcon />
                    </Link>
                    <Link href="/contact" className="mt-2 px-2 text-green-500 font-extrabold text-lg">
                        Let me know how I can help
                        <LinkIcon />
                    </Link>
                </div>
            </main>
        </PageWrapper>
    );
}
