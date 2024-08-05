import Link from 'next/link';

export default function AllBlogsList({ allBlogs, slug }) {
    return (
        <div className="hidden lg:block lg:w-1/4 px-8 py-4 text-white">
            <div className="sticky top-20 flex flex-col">
                <h2 className="text-3xl font-semibold mb-4">Other Blogs</h2>
                <ul className="text-lg text-gray-400 space-y-2">
                    {allBlogs.map((blog, index) => {

                        return (
                            <li key={blog.slug} className="">
                                <Link href={`/blogs/${blog.slug}`} className="text-gray-400 group py-1">
                                    <span className="text-white">{index + 1} - </span>
                                    <span className={`${blog.slug == slug ? 'text-white font-bold' : 'text-gray-400'}`}>{blog.meta.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}