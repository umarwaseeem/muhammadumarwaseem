// "use client"

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

import LinkIcon from '../components/icons/link-icon';


export default function BlogsIntro() {

    // 1) Set blogs directory
    const blogDir = "blogs"

    // 2) Find all files in the blog directory
    const files = fs.readdirSync(path.join(blogDir))

    // 3) For each blog found
    const blogs = files.map(filename => {
        // 4) Read the content of that blog
        const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

        // 5) Extract the metadata from the blog's content
        const { data: frontMatter } = matter(fileContent)

        // 6) Return the metadata and page slug
        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        }
    })

    return (
        <section className="flex h-[calc(100vh-100px)] flex-col items-start justify-start bg-midnightblue p-8 lg:px-16 lg:pb-16">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-14">recent writings</h2>

            <div className="flex flex-col items-start space-y-4 mb-20 w-full max-w-full lg:max-w-3xl">
                <div>
                    {(
                        <div>
                            {blogs.map((blog, index) => (
                                <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                                    <div
                                        className={`flex flex-col items-start group text-white rounded-lg overflow-hidden text-left w-full pb-6`}>
                                        <span className="text-red-400 text-xs">{blog.meta.date}</span>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-row items-center justify-start">
                                                <span className="text-white mr-2 text-lg md:text-2xl lg:text-3xl relative py-1 truncate bg-transparent">
                                                    {blog.meta.title}
                                                    <span className="absolute bottom-2 lg:bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                                                </span>
                                                <LinkIcon />
                                            </div>
                                            <span className="text-gray-400 text-xs md:text-sm lg:text-base">
                                                {blog.meta.description}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

const openGraphImage = "https://avatars.githubusercontent.com/u/76011160?v=4"

export async function generateMetadata() {

    return {
        title: "Blogs | Muhammad Umar Waseem",
        description: "A collection of blogs written by Muhammad Umar Waseem who is a young software engineer and an aspiring entrepreneur.",
        image: openGraphImage,
        openGraph: {
            title: "Blogs | Muhammad Umar Waseem",
            description: "A collection of blogs written by Muhammad Umar Waseem who is a young software engineer and an aspiring entrepreneur.",
            url: "https://muhammadumarwaseem.com/blogs",
            image: openGraphImage,
        },
    };
}
