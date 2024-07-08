import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BackButton from '../../components/backbutton'

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blogs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost(slug){
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function Post({params}) {
    const props = getPost(params.slug);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto bg-midnightblue py-10 px-8'>
            <BackButton />
            <h1>{props.frontMatter.title}</h1>
            <MDXRemote source={props.content}/>
        </article>
    )
}

export async function generateMetadata({params}) {
    const blog = getPost(params.slug);

    return{
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
    }
}