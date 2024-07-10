import GithubIcon from './icons/github-icon';
import LinkedinIcon from './icons/linkedin-icon';
import TwitterIcon from './icons/twitter-icon';
import InstagramIcon from './icons/instagram-icon';
import PageWrapper from './pagewrapper';

import LinkIcon from '../components/icons/link-icon';

import Link from 'next/link';

export default function Main() {
    return (
        <PageWrapper>

            <main className="flex h-[calc(100vh-100px)] flex-col lg:w-3/5 lg:items-start items-start justify-center bg-midnightblue p-6 lg:p-16 lg:pb-40">
                <div className="flex px-2 items-center mb-4 space-x-4">
                    <Link aria-label="muhammad umar waseem instagram link" passHref href="https://www.instagram.com/umarwaseeem/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className="w-8 h-8 text-red-500 hover:text-gray-400" />
                    </Link>
                    <Link aria-label="muhammad umar waseem twitter link" passHref href="https://twitter.com/umar_terminator" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon className="w-8 h-8 text-purple-500 hover:text-gray-400" />
                    </Link>
                    <Link aria-label="muhammad umar waseem linkedin link" passHref href="https://www.linkedin.com/in/umarwaseem/" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="w-8 h-8 text-blue-500 hover:text-gray-400" />
                    </Link>
                    <Link aria-label="muhammad umar waseem github link" passHref href="https://github.com/Umar-Waseem" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-8 h-8 text-gray-200 hover:text-gray-400" />
                    </Link>
                </div>
                <h1 className="font-bold px-2 text-4xl md:text-6xl lg:text-7xl text-white lg:text-left mb-2 text-left">muhammad umar waseem</h1>
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
