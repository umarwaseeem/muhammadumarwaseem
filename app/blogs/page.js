import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

import { umarAvatar } from '../images';
import SmallCard from '../components/smallcard';

export default function BlogsIntro() {

    const blogDir = "blogs"

    const files = fs.readdirSync(path.join(blogDir))

    const blogs = files.map(filename => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

        const { data: frontMatter } = matter(fileContent)

        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        }
    })

    return (
        <section className="flex h-[calc(100vh-68px)] overflow-auto flex-col items-start justify-start bg-midnightblue p-8 lg:px-16 lg:pb-16">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-14">recent writings</h2>
            <div className="flex flex-col w-full">
                {blogs.map((blog) => (
                    <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                        <div className="relative flex flex-col rounded-lg overflow-hidden shadow-lg group w-full lg:w-1/2 mb-6">
                            <SmallCard
                                title={blog.meta.title}
                                description={blog.meta.description}
                                date={blog.meta.date}
                                coverImage={blog.meta.coverImage}
                                category={blog.meta.category}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}



export async function generateMetadata() {
    return {
        title: "Blogs | Muhammad Umar Waseem",
        description: "A collection of blogs written by Muhammad Umar Waseem who is a young software engineer and an aspiring entrepreneur.",
        image: umarAvatar,
        openGraph: {
            title: "Blogs | Muhammad Umar Waseem",
            description: "A collection of blogs written by Muhammad Umar Waseem who is a young software engineer and an aspiring entrepreneur.",
            url: "https://muhammadumarwaseem.com/blogs",
            image: umarAvatar,
        },
    };
}
