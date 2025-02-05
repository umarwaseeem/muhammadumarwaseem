import PageWrapper from "../components/pagewrapper";
import { umarAvatar } from "../images";
import { projects } from "../projects";
import Image from "next/image";
import LinkIcon from "../components/icons/link-icon";
import Link from "next/link";

export default function Projects() {
    // Filter projects with and without images
    const projectsWithImages = projects.filter(project => project.featuredImage);
    const additionalProjects = [
        {
            title: "Retrieval Augmented Gemini Chatbot",
            subtitle: "AI-powered chatbot with reduced hallucination",
            description: "Uses LangChain framework and Google's Gemini as a large language model. Reduces hallucination and gets the latest data ensuring privacy and concise answers.",
            projectStatus: "COMPLETED / RELEASED",
            webLink: "https://github.com/umarwaseeem/thesis-rag-chatbot-gemini"
        },
        {
            title: "Airflow Data Extraction Pipeline",
            subtitle: "Seamless ETL pipeline implementation",
            description: "Extracts data from source, performs cleaning, and sends to storage. Features scheduled and manual pipeline triggers.",
            projectStatus: "COMPLETED / RELEASED",
            webLink: "https://github.com/umarwaseeem/airflow-data-extraction-pipeline"
        },
        {
            title: "GAN Cifar-10 Generative Image Modeling",
            subtitle: "Advanced image generation using GANs",
            description: "Generative Adversarial Network trained on CIFAR-10 dataset with CUDA and CUDNN optimization.",
            projectStatus: "COMPLETED / RELEASED",
            webLink: "https://github.com/umarwaseeem/gan-cifar-10"
        },
        {
            title: "Golang Blockchain",
            subtitle: "Full-featured blockchain implementation",
            description: "A fully fledged blockchain implemented in Golang with peer-to-peer network system and asynchronous Go routines.",
            projectStatus: "COMPLETED / RELEASED",
            webLink: "https://github.com/umarwaseeem/golang-blockchain"
        }
    ];

    return (
        <PageWrapper>
            <section className="flex min-h-screen flex-col items-start lg:justify-start bg-midnightblue p-4 lg:px-16 lg:pb-16">
                <h2 className="font-semibold text-4xl lg:text-6xl text-white mb-10 pt-20">projects</h2>
                
                {/* Projects with images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projectsWithImages.map((project, index) => (
                        <div key={index} className="bg-slate-900 rounded-lg p-6 hover:bg-slate-800 transition-all duration-300">
                            {project.featuredImage && (
                                <div className="relative w-full h-48 mb-4">
                                    <Image
                                        src={project.featuredImage}
                                        alt={project.title}
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            )}
                            
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.subtitle}</p>
                                
                                <div className="flex items-center space-x-2">
                                    <span className={`text-xs px-2 py-1 rounded ${
                                        project.projectStatus === "COMPLETED / RELEASED" 
                                            ? "bg-green-900 text-green-300"
                                            : project.projectStatus === "IN PROGRESS"
                                            ? "bg-blue-900 text-blue-300"
                                            : "bg-yellow-900 text-yellow-300"
                                    }`}>
                                        {project.projectStatus}
                                    </span>
                                </div>

                                {project.description && (
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                )}

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.appStore && (
                                        <a href={project.appStore} target="_blank" rel="noopener noreferrer" 
                                           className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full text-sm text-white">
                                            <img src="/app-store.png" alt="App Store" className="w-4 h-4" />
                                            App Store
                                        </a>
                                    )}
                                    {project.playStore && (
                                        <a href={project.playStore} target="_blank" rel="noopener noreferrer"
                                           className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full text-sm text-white">
                                            <img src="/play-store.png" alt="Play Store" className="w-4 h-4" />
                                            Play Store
                                        </a>
                                    )}
                                    {project.webLink && (
                                        <a href={project.webLink} target="_blank" rel="noopener noreferrer"
                                           className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full text-sm text-white">
                                            Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional projects section */}
                <h3 className="font-semibold text-2xl lg:text-4xl text-white mb-8 mt-16">more projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {additionalProjects.map((project, index) => (
                        <div key={index} className="bg-[#1a1f35] rounded-lg p-6 hover:bg-[#232942] transition-all duration-300">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                    {project.webLink && (
                                        <Link 
                                            href={project.webLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-green-500 hover:text-green-400"
                                        >
                                            <LinkIcon height={20} width={20} />
                                        </Link>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm">{project.subtitle}</p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs px-2 py-1 rounded bg-green-900 text-green-300">
                                        {project.projectStatus}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
}

export async function generateMetadata() {

    return {
        title: "Projects | Muhammad Umar Waseem",
        description: "Get to know about the projects that Muhammad Umar has worked on and the ones he is currently working on.",
        image: umarAvatar,
        keywords: "projects, Muhammad Umar Waseem, software engineer, web developer, full stack developer, tensorflow, pytorch, flutter, javascript, Next.js, ReactJs, Golang",
        openGraph: {
            title: "Projects | Muhammad Umar Waseem",
            description: "Get to know about the projects that Muhammad Umar has worked on and the ones he is currently working on.",
            url: "https://muhammadumarwaseem.com/projects/",
            images: umarAvatar,

        },
    };
}