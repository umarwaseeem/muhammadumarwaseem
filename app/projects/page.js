import PageWrapper from "../components/pagewrapper";

export default function About() {
    return (
        <PageWrapper>
            <section className="flex h-[calc(100vh-50px)] flex-col items-center lg:items-start lg:justify-start bg-midnightblue p-6 lg:p-16">
                <h2 className="font-bold text-4xl lg:text-8xl text-white mb-14">projects</h2>
            </section>
        </PageWrapper>

    );
}