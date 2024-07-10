import PageWrapper from "../components/pagewrapper";

export default function About() {
    return (
        <PageWrapper>
            <section className="flex h-[calc(100vh-50px)] flex-col items-start lg:justify-start bg-midnightblue p-8 lg:px-16 lg:pb-16">
                <h2 className="font-bold text-4xl lg:text-6xl text-white mb-14">projects</h2>
            </section>
        </PageWrapper>

    );
}

const openGraphImage = "https://avatars.githubusercontent.com/u/76011160?v=4"

export async function generateMetadata() {

    return {
        title: "Projects | Muhammad Umar Waseem",
        description: "Get to know about the projects that Muhammad Umar has worked on and the ones he is currently working on.",
        image: openGraphImage,
        keywords: "projects, Muhammad Umar Waseem, software engineer, web developer, full stack developer, tensorflow, pytorch, flutter, javascript, Next.js, ReactJs, Golang",
        openGraph: {
            title: "Projects | Muhammad Umar Waseem",
            description: "Get to know about the projects that Muhammad Umar has worked on and the ones he is currently working on.",
            url: "https://muhammadumarwaseem.com/projects/",
            image: openGraphImage,
            
        },
    };
}