import PageWrapper from "../components/pagewrapper";

export default function About() {
    return (
        <PageWrapper>
            <section className="flex h-[calc(100vh-50px)] flex-col items-start lg:justify-start bg-midnightblue p-8 lg:px-16 lg:pb-16">
                <h2 className="font-bold text-4xl lg:text-7xl text-white mb-14">projects</h2>
            </section>
        </PageWrapper>

    );
}