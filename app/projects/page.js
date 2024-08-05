import PageWrapper from "../components/pagewrapper";
import RepoList from "../components/repolist";
import { umarAvatar } from "../images";
import { Suspense } from 'react'

export default function About() {

    return (
        <PageWrapper>
            <section className="flex min-h-screen flex-col items-start lg:justify-start bg-midnightblue p-4 lg:px-16 lg:pb-16">
                <h2 className="font-semibold text-4xl lg:text-6xl text-white mb-10">projects</h2>
                <Suspense>
                    <RepoList />
                </Suspense>
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