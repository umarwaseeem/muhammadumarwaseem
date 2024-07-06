import GithubIcon from './icons/github-icon';
import LinkedinIcon from './icons/linkedin-icon';
import TwitterIcon from './icons/twitter-icon';
import InstagramIcon from './icons/instagram-icon';
import PageWrapper from './pagewrapper';

export default function Main() {
    return (
        <PageWrapper>

            <main className="flex h-[calc(100vh-50px)] flex-col lg:items-start items-start justify-center bg-midnightblue p-6 lg:p-16 lg:pb-40 pb-36">
                <div className="flex px-2 items-center mb-4 space-x-4">
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
                <h1 className="font-bold px-2 text-4xl md:text-6xl lg:text-7xl text-white lg:text-left mb-2 text-left">muhammad umar waseem</h1>
                <h2 className="px-2 text-xl md:text-3xl lg:text-3xl text-gray-400 lg:text-left text-left">pakistan based <span className='hover:text-green-500'>full stack software</span> and <span className='hover:text-red-500'>machine learning engineer</span></h2>
            </main>
        </PageWrapper>
    );
}
