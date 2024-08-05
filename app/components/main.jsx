

import SocialIcons from './socialicons';
import AnimatedLink from './animatedlink';



export default function Main() {
    return (
        <main className="bg-midnightblue">
            <div className="flex h-[calc(100vh-68px)] flex-col lg:w-3/5 lg:items-start items-start justify-center lg:justify-end p-4 lg:p-16 lg:pb-40">
                <SocialIcons />
                <h1 className="px-2 font-semibold text-4xl md:text-5xl lg:text-6xl text-white lg:text-left mb-2 text-left">muhammad umar waseem</h1>
                <h2 className="px-2 text-xl md:text-3xl lg:text-3xl text-gray-400 lg:text-left text-left">muhammad umar is a pakistan based
                    <span className='hover:text-green-500'> full stack software</span> and computer science graduate skilled in
                    <span className='hover:text-red-500'> web </span>,
                    <span className='hover:text-red-500'> mobile </span>and
                    <span className='hover:text-red-500'> AI </span>
                    based solutions.
                </h2>
                <div className="flex flex-col justify-evenly">
                    <AnimatedLink href={"/blogs"} linkText="Read my tech blog" custom={0} className={"mt-4 px-2"} />
                    <AnimatedLink href={"/contact"} linkText="Get in touch and let me know how I can help" custom={1} className={"mt-1 px-2"} />
                    <AnimatedLink href={"/resume"} linkText="See resume" custom={2} className={"mt-1 px-2"} />
                </div>
            </div>
        </main>
    );
}
