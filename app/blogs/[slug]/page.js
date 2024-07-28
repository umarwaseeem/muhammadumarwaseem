import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BackButton from '../../components/backbutton';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blogs'));

    const paths = files.map((filename) => ({
        slug: filename.replace('.mdx', ''),
    }));

    return paths;
}

function getPost(slug) {
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8');

    const { data: frontMatter, content } = matter(markdownFile);

    return {
        frontMatter,
        slug,
        content,
    };
}

async function getHeadings(source) {
    const headingLines = source.split('\n').filter((line) => {
        return line.match(/^#{1,6}\s/);
    });

    return headingLines.map((raw) => {
        const text = raw.replace(/^#{1,6}\s/, '').trim();
        const level = raw.match(/^#{1,6}/)[0].length;

        return { text, level };
    });
}

function getAllBlogs() {
    const blogDir = 'blogs';
    const files = fs.readdirSync(path.join(blogDir));

    const blogs = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
        const { data: frontMatter } = matter(fileContent);
        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', ''),
        };
    });

    // Sort blogs by some criteria here if needed
    blogs.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1)); // Example: Sorting by date descending

    return blogs;
}

export default async function Post({ params }) {
    const props = getPost(params.slug);
    const headings = await getHeadings(props.content);
    const allBlogs = getAllBlogs();

    const currentIndex = allBlogs.findIndex((blog) => blog.slug === params.slug);

    const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

    return (
        <section className="flex flex-col lg:flex-row bg-midnightblue min-h-screen">
            <div class="flex flex-col w-full">
                <Image src={props.frontMatter.coverImage} className="w-full object-cover h-60 lg:h-80" alt={props.frontMatter.title} height={300} width={400} />
                <div className='flex flex-row'>
                    <div className="hidden lg:block lg:w-1/4 px-16 py-4 text-white">
                        <div className="sticky top-20 flex flex-col">
                            <h2 className="text-3xl font-bold mb-4">Other Blogs</h2>
                            <ul className="text-lg text-gray-400 space-y-2">
                                {allBlogs.map((blog, index) => (
                                    <li key={blog.slug} className="truncate">
                                        <Link href={`/blogs/${blog.slug}`} className="text-gray-400 group py-1">
                                            <span className="text-white">{index} - </span>
                                            {blog.meta.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Main content */}
                    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert lg:mx-auto bg-midnightblue break-words lg:w-1/2 max-w-full px-8">
                        <BackButton />
                        <h1>{props.frontMatter.title}</h1>
                        <MDXRemote source={props.content} />
                        {/* Navigation links */}
                        <div className="mt-8 flex justify-between text-gray-400 truncate mb-8">
                            {!prevBlog && <div></div>}
                            {prevBlog && (
                                <Link href={`/blogs/${prevBlog.slug}`} passHref className='no-underline font-extrabold'>
                                    {"<-"} Previous
                                </Link>
                            )}
                            {!nextBlog && <div></div>}
                            {nextBlog && (
                                <Link href={`/blogs/${nextBlog.slug}`} passHref className='no-underline font-extrabold'>
                                    Next {"->"}
                                </Link>
                            )}
                        </div>
                    </article>
                    {/* Right Sidebar with table of contents */}
                    <div className="hidden lg:block lg:w-1/4 text-white px-16 py-4">
                        <div className="sticky flex flex-col top-20">
                            <h2 className="text-3xl font-bold mb-4">Table of Contents</h2>
                            <ul className="text-lg">
                                {headings.map((heading, index) => (
                                    <li key={index} style={{ marginLeft: `${(heading.level - 1) * 1.5}rem` }}>
                                        <p className="text-gray-400">{"# "}{heading.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export async function generateMetadata({ params }) {
    const blog = getPost(params.slug);

    return {
        title: blog.frontMatter.title + ' | Muhammad Umar Waseem ',
        description: blog.frontMatter.description,
        image: blog.frontMatter.coverImage,
        openGraph: {
            title: blog.frontMatter.title + ' | Muhammad Umar Waseem ' + "| " + blog.frontMatter.date,
            description: blog.frontMatter.description,
            type: 'article',
            url: `https://muhammadumarwaseem.com/blogs/${params.slug}`,
            images: blog.frontMatter.coverImage,
            locale: 'en-US',
        },
    };
}
