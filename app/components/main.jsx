import SocialIcons from './socialicons';
import AnimatedLink from './animatedlink';
import TextRevealByWord from "../components/textreveal";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import SmallCard from './smallcard';
import LinkIcon from './icons/link-icon';

export default function Main() {
    const h1 = "building full-stack AI based solutions";
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
        </div>
    );
}
