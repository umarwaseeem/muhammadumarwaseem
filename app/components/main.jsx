import SocialIcons from './socialicons';
import AnimatedLink from './animatedlink';
import TextRevealByWord from "../components/textreveal";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import LinkIcon from './icons/link-icon'
import Image from 'next/image';
import { projects, ProjectStatus } from '../projects';


export default function Main() {
    const h1 = "building software for startups and businesses";
    const aboutText = "A software engineer from Pakistan with a Bachelors degree in Computer Science. I have experience with working in team based software engineering with a touch of AI/ML based solutions as well as facing a wide range of different problems in the freelance domain whether its building mobile apps with flutter, web apps with Next.js or no-code apps using Webflow. Coding software interests me as it allows me to have control on what I create!"

    const blogDir = "blogs"

    const files = fs.readdirSync(path.join(blogDir))

    const blogs = files.map(filename => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

        const { data: frontMatter } = matter(fileContent)
        const slug = filename.replace('.mdx', '')
        // const views = getViews(slug);

        return {
            meta: frontMatter,
            slug: slug,
            // views: views
        }
    })

    const getProjectStatusColor = (status) => {
        switch (status) {
            case ProjectStatus.COMPLETED:
                return "text-green-500"
            case ProjectStatus.IN_PROGRESS:
                return "text-yellow-500"
            case ProjectStatus.COMING_SOON:
                return "text-red-500"
        }
    }

    return (
        <div className="flex flex-col bg-midnightblue">
            <main className="bg-midnightblue">
                <div className="flex h-[calc(100vh-68px)] flex-col lg:w-3/5 lg:items-start items-start justify-center lg:justify-end p-4 lg:p-16 lg:pb-20 pt-20">
                    <SocialIcons />
                    <h1 className="px-2 font-semibold text-3xl md:text-5xl lg:text-6xl text-white lg:text-left mb-2 text-left">{h1}</h1>
                    <div className="flex flex-row items-center justify-center">
                        <Link href={"/contact"} className="text-white rounded-full lg:text-lg text-sm hover:bg-white hover:text-black font-semibold bg-red-500 border lg:px-4 lg:py-2 px-3 py-2 ml-2 mt-2">Get In Touch</Link>
                        <div className="flex flex-row justify-evenly space-x-2 pl-4 mt-2">
                            <AnimatedLink href={"/projects"} linkText="See Projects" custom={0} className={""} />
                            {/* <AnimatedLink href={"/blogs"} linkText="Read my tech blog" custom={1} className={""} /> */}
                            <AnimatedLink href={"/resume"} linkText="See resume" custom={1} className={""} />
                        </div>
                    </div>
                </div>
            </main>
            <section className='h-[200vh] flex flex-col lg:items-start items-start justify-center p-4 lg:p-16'>
                <div className="flex flex-col lg:w-3/5">
                    <TextRevealByWord heading={"hello, I am Umar"} text={aboutText} />
                </div>
            </section>
            <section className='min-h-screen flex flex-col p-4 lg:p-16'>
                <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold pb-10'>
                    featured projects
                    <Link href="/projects" className="text-green-500 lg:text-lg text-sm ml-4">
                        See All Projects
                        <LinkIcon />
                    </Link>
                </h2>
                <div className="flex-1 flex lg:flex-row flex-col">
                    {
                        projects.map((item) => (
                            <div

                                key={item.href}
                                className={`relative flex-1 border border-gray-400 group bg-transparent p-4 bg-gray-500 flex flex-col justify-end bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out hover:flex-[2]`}
                                // background image
                                style={{ backgroundImage: `url(${item.featuredImage})` }}
                            >
                                <div className="absolute inset-0 bg-black lg:bg-opacity-0 bg-opacity-60 lg:group-hover:bg-opacity-75 transition-opacity duration-300 flex flex-row justify-between items-end p-4">
                                    <div className="flex flex-col w-3/4">

                                        <div className={`${getProjectStatusColor(item.projectStatus)} text-xs lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-300`}>
                                            {item.projectStatus}
                                        </div>

                                        <Link href={item.href ? item.href : "#"} className='text-white hover:text-blue-600 lg:text-3xl text-2xl lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-300'>{item.title}<LinkIcon height={30} width={30} /></Link>
                                        <p className='text-gray-300 lg:text-lg text-md lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-300'>{item.subtitle}</p>
                                    </div>
                                    <div className='flex space-x-4 lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-300'>
                                        {item.webLink &&
                                            <Link href={item.webLink} target="_blank" rel="noopener noreferrer">
                                                <Image src="/chain.png" alt="Web Link" className='h-8 w-8' width={300} height={300} />
                                            </Link>
                                        }
                                        {
                                            item.appStore &&
                                            <Link href={item.appStore} target="_blank" rel="noopener noreferrer">
                                                <Image src="/app-store.png" alt="Apple Store" className='h-8 w-8' width={300} height={300} />
                                            </Link>
                                        }
                                        {
                                            item.playStore &&
                                            <Link href={item.playStore} target="_blank" rel="noopener noreferrer">
                                                <Image src="/play-store.png" alt="Play Store" className='h-8 w-8' width={300} height={300} />
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section >

            <section className='min-h-screen flex flex-col lg:items-start items-start justify-center p-4 lg:p-16'>
                <div className="flex flex-col w-full">
                    <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold pb-10'>writings</h2>
                    {blogs.map((blog, index) => (
                        <Link className='lg:w-1/2 w-full' href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                            <div className="relative flex flex-col rounded-lg overflow-hidden shadow-lg group w-full mb-6">
                                <span className='text-red-400 italic text-xs'>{blog.meta.date}</span>
                                <h3 className='text-white text-lg md:text-xl lg:text-2xl font-semibold'>
                                    {index + 1}. {blog.meta.title}
                                </h3>
                                <p className='text-gray-400'>{blog.meta.description}</p>
                            </div>
                        </Link>
                    ))}
                    <Link href="/blogs" className="text-green-500 text-lg font-semibold">Read all posts <LinkIcon /> </Link>
                </div>
            </section>

        </div >
    );
}