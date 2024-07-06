import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../components/pagewrapper";

export default function About() {
    return (
        <PageWrapper>

            <section className="flex h-fitx md:h-[calc(100vh-50px)] lg:h-[calc(100vh-50px)] flex-col lg:flex-row items-start justify-center lg:justify-evenly bg-midnightblue p-6 lg:px-16 lg:pb-16">
                <div className="flex flex-col lg:w-3/12 justify-center items-start lg:justify-start h-fit lg:h-full">
                    <h2 className="font-bold text-4xl lg:text-7xl text-white">about</h2>
                    <div className="flex justify-start items-start w-1/2 lg:w-full mt-10">
                        <Image src="/umar.jpeg" alt="Umar's image" width={350} height={350} className="rounded-full" />
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start lg:justify-end lg:items-end lg:w-9/12 lg:pl-10">
                    <h2 className="font-bold text-2xl lg:text-3xl text-white text-left pt-12 lg:pt-36 pb-6 lg:leading-[3rem]">muhammad is a software engineer with expertise in building full stack applications, based in islamabad pakistan</h2>
                    <ul className="text-white text-xl lg:text-2xl mb-4 lg:mb-6 text-left lg:text-left list-disc px-4 leading-8 lg:leading-10">
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
                            expertise with building <span className="italic">full stack</span> <span className="hover:text-purple-500">mobile</span> / <span className="hover:text-purple-500">web</span> apps, and creating <span className="hover:text-red-500">machine learning</span> and <span className="hover:text-red-500">artificial intelligence</span> based solutions,{" "}
                            <Link href={"/projects"} className="text-green-600 hover:underline underline-offset-4 items-center">
                                see projects
                                <Image src="/arrow-top-left.svg" alt="Projects" className="rotate-90 inline" width={20} height={20} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </PageWrapper>

    );
}
