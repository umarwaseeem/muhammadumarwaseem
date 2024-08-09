import SocialIcons from './socialicons';
import AnimatedLink from './animatedlink';
import TextRevealByWord from "../components/textreveal";

export default function Main() {
    const h1 = "building full-stack AI based solutions";
    const aboutText = "A software engineer from Pakistan with a Bachelors degree in Computer Science. I have experience with working in team based software engineering with a touch of AI/ML based solutions as well as facing a wide range of different problems in the freelance domain. Coding software interests me as it allows me to have control on what I create!"

    return (
        <div className="flex flex-col bg-midnightblue">
            <main className="bg-midnightblue">
                <div className="flex h-[calc(100vh-68px)] flex-col lg:w-3/5 lg:items-start items-start justify-center lg:justify-end p-4 lg:p-16 lg:pb-20 pt-20">
                    <SocialIcons />
                    <h1 className="px-2 font-semibold text-3xl md:text-5xl lg:text-6xl text-white lg:text-left mb-2 text-left">{h1}</h1>
                    <div className="flex flex-col justify-evenly">
                        <AnimatedLink href={"/blogs"} linkText="Read my tech blog" custom={0} className={"mt-2 px-2"} />
                        <AnimatedLink href={"/contact"} linkText="Let me know how I can help" custom={1} className={"mt-0 px-2"} />
                        <AnimatedLink href={"/resume"} linkText="See resume" custom={2} className={"mt-0 px-2"} />
                    </div>
                </div>
            </main>
            <section className='h-[200vh] flex flex-col lg:items-start items-start justify-center p-4 lg:p-16'>
                <div className="flex flex-col lg:w-3/5">
                    <TextRevealByWord heading={"hello, I am Umar"} text={aboutText} />
                </div>
            </section>
        </div>
    );
}
