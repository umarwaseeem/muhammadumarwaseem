import Link from "next/link";

export default function Now() {
    return (

        <section className="flex min-h-screen flex-col items-start justify-start bg-midnightblue p-4 lg:px-16 lg:pb-16">
            <div className="lg:w-1/2 w-full">
                <h2 className="font-bold text-4xl lg:text-6xl text-white">now</h2>

                <p className="italic text-white pt-4">
                    View nownownow.com <Link target="_blank" href={"https://nownownow.com/p/2JqY"} className="text-blue-600 hover:underline underline-offset-4">profile</Link>.
                </p>

                <h3 className="font-semibold text-xl lg:text-3xl text-white mt-8">what I am focused on nowadays:</h3>
                <h4 className="mt-4 text-gray-200 text-md lg:text-xl">* (28th July, 2024)</h4>
                <ul className="text-gray-400 text-md lg:text-xl text-left lg:text-left list-disc px-4 leading-6 lg:leading-8 mt-4 mb-8">
                    <li className="mb-2">improving my understanding of <Link href={"https://pytorch.org/"} className="text-orange-500 italic">pytorch</Link> deep learning framework.</li>
                    <li className="mb-2">starting a public <Link href={"https://www.instagram.com/umarwaseeem/"} className="text-red-500 italic">instagram account</Link>, brainstorming for ideas</li>
                    <li className="mb-2">studying for azure and aws cloud certifications</li>
                    <li className="mb-2">coding an android/iOS mobile app, for improved diagnostic process between doctors and patients, a part of which contains Google's LLM Gemini.</li>
                    <li className="mb-2">studying up to improve Search Engine Optimization of my website</li>
                    <li className="mb-2">thinking I may have bought a very lengthy domain name!</li>
                </ul>

                <hr />

                <h3 className="font-semibold text-xl lg:text-3xl text-white mt-8">near future plans:</h3>
                <h4 className="mt-4 text-gray-200 text-md lg:text-xl">* (28th July, 2024)</h4>
                <ul className="text-gray-400 text-md lg:text-xl text-left lg:text-left list-disc px-4 leading-6 lg:leading-8 mt-4 mb-8">
                    <li className="mb-2">been planning to play the video game elden ring becuase of the hype in the gaming community</li>
                    <li className="mb-2">download and install cyber punk 2077, yearning to explore its few endings out of many</li>
                    <li className="mb-2">read a new fiction book, i like fiction, and reading a book helps me imrpove attention span</li>
                    <li className="mb-2">explore and experiment with <Link href={"https://threejs.org/"} className="text-yellow-400 italic">three.js</Link></li>
                </ul>

                <hr />

                <h3 className="font-semibold text-xl lg:text-3xl text-white mt-10">what's that now?</h3>
                <p className="text-gray-400 text-md lg:text-xl mt-4 leading-6 lg:leading-8">
                    this is a <Link className="text-blue-600 hover:underline underline-offset-4" href={"https://nownownow.com/about"}>now page</Link>, an update page about things that I am currently doing with some addition of my own. This page is primarily inspired by <Link href="https://nownownow.com/" className="text-blue-600 hover:underline underline-offset-4">nownownow.com</Link>.
                    {" "}To put it short, a now page consists of something you'd tell a friend, you haven't seen in a year.

                </p>
            </div>
        </section >


    );
}
export async function generateMetadata() {
    return {
        title: "Now | Muhammad Umar Waseem",
        description: "Things that Muhammad Umar Waseem is currently doing.",
        // image: umarAvatar,
        keywords: "goals, bucket list, wish, impossible",
        openGraph: {
            title: "Now | Muhammad Umar Waseem",
            description: "Things that Muhammad Umar Waseem is currently doing.",
            url: "https://muhammadumarwaseem.com/now/",
            // image: umarAvatar,
        },
    }
}
