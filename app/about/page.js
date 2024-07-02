import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="flex h-[93vh] flex-col lg:flex-row items-start justify-start lg:justify-evenly bg-black p-6">
            {/* Left side content */}
            <div className="flex flex-col lg:w-1/2 justify-center items-center lg:items-start lg:justify-start h-fit lg:h-full">
                <h2 className="font-bold text-4xl lg:text-8xl text-white mb-16 lg:mb-10 lg:mr-8">about</h2>
                <ul className="text-white text-xl lg:text-3xl mb-4 lg:mb-6 text-left lg:text-left list-disc px-4 leading-8">
                    <li className="mb-4">
                        software engineer from islamabad, pakistan
                    </li>
                    <li className="mb-4">
                        <a href="https://www.nu.edu.pk/" className="text-blue-600 hover:underline underline-offset-4">
                            fast nuces<Image src="/arrow-top-left.svg" alt="Projects" className="rotate-90 inline" width={20} height={20} />
                        </a>{" "}
                        computer science graduate
                    </li>
                    <li className="mb-4">
                        actively engaged in converting ideas into software solutions as entrepreneurial ventures
                    </li>
                    <li className="mb-4">
                        expertise with building full stack <span className="italic font-extrabold">mobile</span> / <span className="italic font-extrabold">web</span> apps, and creating <span className="italic font-extrabold">machine learning</span> and <span className="italic font-extrabold">artificial intelligence</span> based solutions,{" "}
                        <Link href={"/projects"} className="text-green-600 hover:underline underline-offset-4 items-center">
                            see projects
                            <Image src="/arrow-top-left.svg" alt="Projects" className="rotate-90 inline" width={20} height={20} />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Right side image */}
            <div className="flex justify-center items-center lg:justify-end lg:items-end lg:w-1/2 mt-10">
                <div className="flex justify-center items-center w-1/2 lg:w-full">
                    <Image src="/umar.jpeg" alt="Umar's image" width={500} height={500} className="rounded-full" />
                </div>
            </div>
        </section>
    );
}
