import GithubIcon from './icons/github-icon';
import LinkedinIcon from './icons/linkedin-icon';
import TwitterIcon from './icons/twitter-icon';
import InstagramIcon from './icons/instagram-icon';

export default function Main() {
    return (
        <main className="flex h-[94vh] flex-col items-center justify-center bg-midnightblue pb-20">
            <div className="flex items-center mb-4 space-x-4">
                <a href="https://www.instagram.com/umarwaseeem/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="w-8 h-8 text-red-500 hover:text-gray-400" />
                </a>
                <a href="https://twitter.com/umar_terminator" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="w-8 h-8 text-purple-500 hover:text-gray-400" />
                </a>
                <a href="https://www.linkedin.com/in/umarwaseem/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-8 h-8 text-blue-500 hover:text-gray-400" />
                </a>
                <a href="https://github.com/Umar-Waseem" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-8 h-8 text-gray-200 hover:text-gray-400" />
                </a>
            </div>
            <h1 className="font-bold text-4xl lg:text-8xl text-white text-center mb-2">muhammad umar waseem</h1>
            <h2 className="px-12 text-xl lg:text-3xl text-gray-400 text-center">pakistan based <span className='hover:text-green-500'>full stack software</span> and <span className='hover:text-red-500'>machine learning engineer</span></h2>
        </main>
    );
}
