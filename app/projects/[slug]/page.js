import { projects } from "../../projects";

export default function ProjectPage({ params }) {

    const { slug } = params;
    const project = projects.find(project => project.href === `/projects/${slug}`);

    return (
        <section className="flex min-h-screen flex-col items-start lg:justify-start bg-midnightblue p-4 lg:px-16 lg:pb-16">
            <div className="w-1/2">
                <h2 className="font-semibold text-4xl lg:text-6xl text-white mb-10 pt-20">{project.title}</h2>
                <p className="text-white">{project.description}</p>
            </div>
        </section>
    );
}
