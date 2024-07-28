"use client"

import LinkIcon from "../components/icons/link-icon";
import PageWrapper from "../components/pagewrapper";
import { umarAvatar } from "../images";
import { useEffect, useState } from "react";

async function fetchGitHubRepos() {
    const response = await fetch('https://api.github.com/users/umarwaseeem/repos');
    if (!response.ok) {
        throw new Error('Failed to fetch repositories');
    }
    const repos = await response.json();
    console.log(repos);
    return repos;
}

export default function About() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchGitHubRepos().then(setRepos);
    }, []);

    return (
        <PageWrapper>
            <section className="flex min-h-screen flex-col items-start lg:justify-start bg-midnightblue p-8 lg:px-16 lg:pb-16">
                <h2 className="font-bold text-4xl lg:text-6xl text-white mb-14">projects</h2>
                <ul className="space-y-4">
                    {repos.map(repo => {
                        return (
                            <li key={repo.id} className="bg-gray-800 lg:w-1/2 w-full p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-blue-600">
                                    {repo.name}<LinkIcon />
                                </a>
                                <p className="text-gray-400 mt-2">{repo.description || "No description available"}</p>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </PageWrapper>
    );
}

// export async function generateMetadata() {

//     return {
//         title: "Projects | Muhammad Umar Waseem",
//         description: "Get to know about the projects that Muhammad Umar has worked on and the ones he is currently working on.",
//         image: umarAvatar,
//         keywords: "projects, Muhammad Umar Waseem, software engineer, web developer, full stack developer, tensorflow, pytorch, flutter, javascript, Next.js, ReactJs, Golang",
//         openGraph: {
//             title: "Projects | Muhammad Umar Waseem",
//             description: "Get to know about the projects that Muhammad Umar has worked on and the ones he is currently working on.",
//             url: "https://muhammadumarwaseem.com/projects/",
//             images: umarAvatar,

//         },
//     };
// }