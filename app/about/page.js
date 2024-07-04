import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../components/pagewrapper";

export default function About() {
    return (
        <PageWrapper>

            <section className="flex h-[93vh] flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-evenly bg-midnightblue p-16">
                {/* Left side content */}
                <div className="flex flex-col lg:w-1/2 justify-center items-center lg:items-start lg:justify-start h-fit lg:h-full">
                    <h2 className="font-bold text-4xl lg:text-8xl text-white mb-16 lg:mb-10 lg:mr-8">about</h2>
                    <ul className="text-white text-xl lg:text-3xl mb-4 lg:mb-6 text-left lg:text-left list-disc px-4 leading-8 lg:leading-10">
                        <li className="mb-4">
                            software engineer from islamabad, pakistan
                        </li>
                        <li className="mb-4">
                            <Link href="https://www.nu.edu.pk/" className="text-blue-600 hover:underline underline-offset-4">
                                fast nuces<Image src="/arrow-top-left.svg" alt="Projects" className="rotate-90 inline" width={20} height={20} />
                            </Link>{" "}
                            computer science graduate
                        </li>
                        <li className="mb-4">
                            actively engaged in converting ideas into software solutions as entrepreneurial ventures
                        </li>
                        <li className="mb-4">
                            expertise with building full stack <span className="hover:text-purple-500">mobile</span> / <span className="hover:text-purple-500">web</span> apps, and creating <span className="hover:text-red-500">machine learning</span> and <span className="hover:text-red-500">artificial intelligence</span> based solutions,{" "}
                            <Link href={"/projects"} className="text-green-600 hover:underline underline-offset-4 items-center">
                                see projects
                                <Image src="/arrow-top-left.svg" alt="Projects" className="rotate-90 inline" width={20} height={20} />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right side image */}
                <div className="flex justify-center items-center lg:justify-end lg:items-end lg:w-1/2">
                    <div className="flex justify-end items-center w-1/2 lg:w-full">
                        <Image src="/umar.jpeg" alt="Umar's image" width={500} height={500} className="rounded-full" />
                    </div>
                </div>
            </section>
        </PageWrapper>

    );
}
