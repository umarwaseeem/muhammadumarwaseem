import GithubIcon from './svg-icons/gihtub-icon';
import LinkedinIcon from './svg-icons/linkedin-icon';
import TwitterIcon from './svg-icons/twitter-icon';
import InstagramIcon from './svg-icons/instagram-icon';

export default function Main() {
    return (
        <main className="flex h-[94vh] flex-col items-center justify-center bg-black pb-20">
            <div className="flex items-center mb-4 space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="w-8 h-8 text-red-500 hover:text-gray-400" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="w-8 h-8 text-purple-500 hover:text-gray-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-8 h-8 text-blue-500 hover:text-gray-400" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-8 h-8 text-gray-200 hover:text-gray-400" />
                </a>
            </div>
            <h1 className="font-bold text-4xl lg:text-8xl text-white text-center mb-2">muhammad umar waseem</h1>
            <h2 className="px-12 text-xl lg:text-3xl text-gray-400 text-center">pakistan based full stack software and machine learning engineer</h2>
        </main>
    );
}
