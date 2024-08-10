import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BackButton from '../../components/backbutton';
import ViewIcon from '../../components/icons/view-icon';
import Link from 'next/link';
import Image from 'next/image';
import { preProcess, postProcess } from "../../rehype-pre-raw";
import AllBlogsList from "../../components/allblogslist";
import Pre from "../../components/pre"
import TableOfContent from "../../components/tableofcontents";
import ShareLinksComponent from '..//../components/sharelinkscomponent';
import HeadingItem from '../../components/headingitem';

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

function calculateReadingTime(mdxContent) {
    // Define the average reading speed (words per minute)
    const wordsPerMinute = 150;

    // Strip MDX/HTML tags and count the words
    const text = mdxContent.replace(/<\/?[^>]+(>|$)/g, '');
    const wordCount = text
        .split(/\s+/)
        .filter((word) => word.length > 0).length;

    // Calculate reading time
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return readingTime;
}



export default async function Post({ params }) {
    const props = getPost(params.slug);
    const headings = await getHeadings(props.content);
    const allBlogs = getAllBlogs();

    const currentIndex = allBlogs.findIndex((blog) => blog.slug === params.slug);

    const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

    const readingTime = calculateReadingTime(props.content);

    // const viewsCount = await recordView(params.slug);

    const mdxComponents = {
        pre: (props) => <Pre {...props} />,
        h2: (props) => {
            return (
                <h2
                    id={props.children}
                    className="text-3xl font-semibold text-white py-6"
                    {...props}
                />
            );
        },
        h3: (props) => {
            return (
                <h3
                    id={props.children}
                    className="text-2xl font-semibold text-white py-6"
                    {...props} />
            );
        },
        h4: (props) => {
            return (
                <h4
                    id={props.children}
                    className="text-xl font-semibold text-white py-6"
                    {...props} />
            );
        },
        p: (props) => <p className="lg:leading-8 leading-7 text-gray-400 py-2 lg:text-lg text-md" {...props} />,
        a: (props) => <Link target='_blank' className="italic underline-offset-4 hover:underline-offset-8 text-white underline font-semibold" {...props} />,
        strong: (props) => <strong className="font-semibold text-white" {...props} />,
        ul: (props) => <ul className="list-disc list-outside pl-6 py-2 text-gray-400 leading-8" {...props} />,
    };

    const mdxOptions = [
        preProcess,
        postProcess,
    ];



    return (
        <section className="flex flex-col lg:flex-row justify-between bg-midnightblue min-h-screen pb-20">
            <div className="flex flex-col w-full pt-20">
                <div className='flex flex-row'>
                    <AllBlogsList allBlogs={allBlogs} slug={params.slug} />
                    {/* Main content */}
                    <article className="lg:px-10 px-4 bg-midnightblue break-words lg:w-1/2 w-full relative z-10">
                        <BackButton />
                        <div className='flex flex-col pt-8'>
                            <div className='flex flex-row'>
                                <Image src="/umar.jpeg" alt="Umar's image" width={80} height={80} className="rounded-full" />
                                <div class="flex flex-col">
                                    <div class="flex flex-row ml-4 pt-4">
                                        <p className='text-xl text-white font-bold mr-2'>Muhammad Umar Waseem</p>
                                    </div>
                                    <div class="flex flex-row ml-4">
                                        <p className='hover:-translate-y-1 transition ease-in-out w-fit hover:text-yellow-500 text-white'>{readingTime} min(s) read</p>
                                        <p className='mr-1 ml-1 text-white'>.</p>
                                        <p className='hover:-translate-y-1 transition ease-in-out w-fit hover:text-red-500 text-white'>{props.frontMatter.date}</p>
                                        <p className='mr-1 ml-1 text-white'>.</p>
                                        <ViewIcon slug={params.slug} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className='font-semibold lg:text-6xl  xl text-4xl text-white py-6'>{props.frontMatter.title}</h1>
                        <Image src={props.frontMatter.coverImage} className="w-full object-cover h-60 lg:h-80" alt={props.frontMatter.title} height={300} width={400} />
                        <h2 className='text-white text-3xl font-semibold lg:hidden py-8'>Table Of Contents</h2>
                        <ul className="text-lg lg:hidden">
                            {(() => {
                                // This array tracks the numbering for each heading level
                                let levelCounters = [];

                                return headings.map((heading, index) => {
                                    const currentLevel = heading.level;

                                    // Ensure the levelCounters array has enough elements for current level
                                    while (levelCounters.length < currentLevel) {
                                        levelCounters.push(0);
                                    }

                                    // Increment the current level counter
                                    levelCounters[currentLevel - 1]++;

                                    // Reset all lower level counters
                                    for (let i = currentLevel; i < levelCounters.length; i++) {
                                        levelCounters[i] = 0;
                                    }

                                    // Construct the heading number string, filtering out zeros
                                    const headingNumber = levelCounters
                                        .slice(0, currentLevel)
                                        .filter(num => num > 0)
                                        .join(".");

                                    return (
                                        <HeadingItem text={heading.text} index={index} level={heading.level} headingNumber={headingNumber} />
                                    );
                                });
                            })()}
                        </ul>
                        <MDXRemote source={props.content} options={mdxOptions} components={mdxComponents} />
                        {/* Navigation links */}
                        <div className="mt-8 flex justify-between text-gray-400 truncate mb-8">
                            {!prevBlog && <div></div>}
                            {prevBlog && (
                                <Link href={`/blogs/${prevBlog.slug}`} passHref className='no-underline font-extrabold flex flex-row group text-white'>
                                    <p>{"<-"}</p>
                                    <p className='hidden group-hover:block'>---</p>
                                    <p>Previous</p>
                                </Link>
                            )}
                            {!nextBlog && <div></div>}
                            {nextBlog && (
                                <Link href={`/blogs/${nextBlog.slug}`} passHref className='no-underline font-extrabold flex flex-row group text-white'>
                                    <p>Next</p>
                                    <p className='hidden group-hover:block'>---</p>
                                    <p>{"->"}</p>
                                </Link>
                            )}
                        </div>
                        <ShareLinksComponent slug={params.slug} className={"lg:hidden block"} />
                    </article>
                    {/* Right Sidebar with table of contents */}
                    <TableOfContent headings={headings} slug={params.slug} />

                </div>
            </div>
        </section >
    );
}


export async function generateMetadata({ params }) {
    const blog = getPost(params.slug);
    const readTime = calculateReadingTime(blog.content);
    return {
        title: blog.frontMatter.title + ' | Muhammad Umar Waseem ',
        description: blog.frontMatter.description,
        images: blog.frontMatter.coverImage,
        openGraph: {
            title: blog.frontMatter.title + ' | Muhammad Umar Waseem ' + "| " + blog.frontMatter.date + " | " + readTime + " min(s) read",
            description: blog.frontMatter.description,
            type: 'article',
            url: `https://muhammadumarwaseem.com/blogs/${params.slug}`,
            images: blog.frontMatter.coverImage,
            locale: 'en-US',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.frontMatter.title + ' | Muhammad Umar Waseem ' + "| " + blog.frontMatter.date + " | " + readTime + " min(s) read",
            description: blog.frontMatter.description,
            images: blog.frontMatter.coverImage,
        },
        metadataBase: new URL(`https://muhammadumarwaseem.com/blogs/${params.slug}`),
    };
}