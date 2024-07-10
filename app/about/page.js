import Image from "next/image";
import Link from "next/link";
import LinkIcon from "../components/icons/link-icon";
import { umarAvatar } from "../images";

export default function About() {
    return (
            <section className="flex h-fit md:h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)] flex-col lg:flex-row items-center justify-center lg:justify-evenly bg-midnightblue p-8 lg:px-16">
                <div className="flex flex-col w-full lg:w-3/12 justify-start items-start lg:justify-center h-fit lg:h-full">
                    <div className="flex justify-start items-center w-1/2 lg:w-full mt-10">
                        <Image src="/umar.jpeg" alt="Umar's image" width={350} height={350} className="rounded-full" />
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start lg:w-9/12 lg:pl-10">
                    <h2 className="font-bold text-4xl lg:text-6xl text-white pt-6 lg:pt-0 lg:pb-6">about:</h2>
                    <h3 className="text-xl lg:text-3xl text-gray-300 text-left pt-6 lg:pt-0 pb-6 lg:leading-[3rem]">muhammad is a software engineer with expertise in building full stack applications, based in islamabad pakistan</h3>
                    <h4 className="text-xl lg:text-3xl text-white pb-4 underline underline-offset-8">technical expertise: </h4>
                    <ul className="text-gray-300 text-md lg:text-2xl text-left lg:text-left list-disc px-4 leading-6 lg:leading-8">
                        <li className="mb-4">
                            <Link href="https://www.nu.edu.pk/" className="text-blue-600 hover:underline underline-offset-4">
                                fast nuces
                                <LinkIcon />
                            </Link>{" "}
                            computer science graduate
                        </li>
                        <li className="mb-4">
                            actively engaged in converting ideas into software solutions as entrepreneurial ventures
                        </li>
                        <li className="mb-4">
                            expertise with building full stack <span className="hover:text-purple-500">web </span> 
                            apps using latest versions of 
                            <span className="hover:text-purple-500 italic"> ReactJs, </span> 
                            <span className="hover:text-purple-500 italic"> NodeJs, </span> 
                            and
                            <span className="hover:text-purple-500 italic"> Next.js.</span>{" "}
                            <Link href={"/projects"} className="text-green-600 hover:underline underline-offset-4 items-center">
                                see projects
                                <LinkIcon />
                            </Link>
                        </li>
                        <li className="mb-4">
                            building
                            <span className="hover:text-purple-500"> mobile </span>
                            apps using frameworks like{" "}
                            <Link href="https://flutter.dev/" className="text-blue-600 hover:underline underline-offset-4 italic">flutter
                            <LinkIcon />
                            </Link>
                            and{" "}
                            <Link href="https://reactnative.dev/" className="text-blue-600 hover:underline underline-offset-4 italic">react native
                                <LinkIcon />
                            </Link>
                        </li>
                        <li className="mb-4">
                            hands on experience working with creating <span className="hover:text-purple-500 italic">machine </span>
                            and{" "}
                            <span className="hover:text-purple-500 italic">deep learning </span>
                            projects solutions using tools like {" "}
                            <Link href="https://www.tensorflow.org/" className="text-blue-600 hover:underline underline-offset-4 italic">tensorflow 
                                <LinkIcon />
                            </Link>
                            and {" "}
                            <Link href="https://pytorch.org/" className="text-blue-600 hover:underline underline-offset-4 italic">pytorch 
                                <LinkIcon />
                            </Link>
                            and deployement of such models and solutions to the cloud.
                        </li>
                        <li className="mb-4">
                            experience with
                            <span className="italic hover:text-purple-500"> Devops</span> and
                            <span className="italic hover:text-purple-500"> MLops </span>
                            tools like{" "}
                            <Link href="https://www.docker.com/" className="text-blue-600 hover:underline underline-offset-4 italic">docker 
                                <LinkIcon />
                            </Link>
                            <Link href="https://kubernetes.io/" className="text-blue-600 hover:underline underline-offset-4 italic">kubernetes 
                                <LinkIcon />
                            </Link>
                            <Link href="https://www.jenkins.io/" className="text-blue-600 hover:underline underline-offset-4 italic">jenkins 
                                <LinkIcon />
                            </Link>
                            <Link href="https://github.com/actions" className="text-blue-600 hover:underline underline-offset-4 italic">github-actions  
                                <LinkIcon />
                            </Link>
                            and {" "}
                            <Link href="https://mlflow.org/" className="text-blue-600 hover:underline underline-offset-4 italic">MLflow
                                <LinkIcon />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
    );
}


export async function generateMetadata() {

    return {
        title: "About | Muhammad Umar Waseem",
        description: "Who is Muhammad Umar? Get to know him out of professional life and in his professional life with his expertise and background.",
        image: umarAvatar,
        keywords: "about, Muhammad Umar Waseem, software engineer, web developer, full stack developer, tensorflow, pytorch, flutter, javascript, Next.js, ReactJs, Golang",
        openGraph: {
            title: "About | Muhammad Umar Waseem",
            description: "Who is Muhammad Umar? Get to know him out of professional life and in his professional life with his expertise and background.",
            url: "https://muhammadumarwaseem.com/about/",
            image: umarAvatar,
            
        },
    };
}