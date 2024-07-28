"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Select from 'react-select'; // Import react-select
import LinkIcon from "./icons/link-icon";

async function fetchGitHubRepos() {
    const perPage = 100;
    const response = await fetch(`https://api.github.com/users/umarwaseeem/repos?per_page=${perPage}`);
    if (!response.ok) {
        throw new Error('Failed to fetch repositories');
    }
    const repos = await response.json();
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    return repos;
}

export default function RepoList() {
    const [repos, setRepos] = useState([]);
    const [filteredRepos, setFilteredRepos] = useState([]);
    const [topics, setTopics] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);

    useEffect(() => {
        fetchGitHubRepos().then(repos => {
            setRepos(repos);
            setFilteredRepos(repos);
            // Extract unique topics
            const allTopics = repos.flatMap(repo => repo.topics || []);
            const uniqueTopics = [...new Set(allTopics)];
            const topicOptions = uniqueTopics.map(topic => ({ value: topic, label: topic }));
            setTopics(topicOptions);
        });
    }, []);

    useEffect(() => {
        if (selectedTopics.length > 0) {
            const selectedValues = selectedTopics.map(topic => topic.value);
            setFilteredRepos(repos.filter(repo => repo.topics?.some(topic => selectedValues.includes(topic))));
        } else {
            setFilteredRepos(repos);
        }
    }, [selectedTopics, repos]);

    const handleTopicChange = (selectedOptions) => {
        setSelectedTopics(selectedOptions || []);
    };

    const handleClearSelection = () => {
        setSelectedTopics([]);
    };

    return (
        <div>
            <div className="mb-4 items-center lg:w-1/2 w-full">
                <Select
                    isMulti
                    options={topics}
                    closeMenuOnSelect={false}
                    aria-label="Select tags to filter projects"
                    value={selectedTopics}
                    onChange={handleTopicChange}
                    placeholder="Select tags..."
                />
                {selectedTopics.length > 0 && (
                    <button
                        onClick={handleClearSelection}
                        className="bg-gray-600 text-white text-xs lg:text-sm px-3 py-1 rounded-full ml-2"
                    >
                        Clear All
                    </button>
                )}
            </div>
            <ul className="space-y-4 w-full">
                {filteredRepos.map((repo) => {
                    return (
                        !repo.fork && (
                            <li key={repo.id} className="bg-gray-800 lg:w-1/2 w-full p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-row items-center">
                                    <Link href={repo.owner.html_url} target="_blank" rel="noopener noreferrer">
                                        <Image src={repo.owner.avatar_url} alt={repo.name} width={32} height={32} className="rounded-full mr-2" />
                                    </Link>
                                    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-md md:text-xl lg:text-2xl font-semibold text-white lg:hover:text-blue-600 flex items-center space-x-2">
                                        {repo.name}
                                        <LinkIcon />
                                    </Link>
                                </div>
                                <p className="text-gray-400 mt-2 text-xs md:text-sm">{repo.description || "No description available"}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {repo.topics && repo.topics.map((topic, index) => (
                                        <span key={index} className="bg-gray-600 text-white text-[0.6rem] lg:text-xs px-2 lg:px-3 py-1 rounded-full">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex space-x-4">
                                    {repo.homepage && (
                                        <Link href={repo.homepage} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-2 py-1 lg:px-3 rounded-lg text-xs lg:text-sm transition-colors duration-300">
                                            View Live
                                        </Link>
                                    )}
                                    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-2 py-1 lg:px-3 rounded-lg text-xs lg:text-sm transition-colors duration-300">
                                        View on GitHub
                                    </Link>
                                </div>
                            </li>
                        )
                    );
                })}
            </ul>
        </div>
    );
}
