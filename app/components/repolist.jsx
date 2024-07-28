"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Select from 'react-select';
import LinkIcon from "./icons/link-icon";
import { motion } from 'framer-motion';

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

const listItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 20,
            duration: 0.6,
            bounce: 0.3,
        },
    },
};


export default function RepoList() {
    const [repos, setRepos] = useState([]);
    const [filteredRepos, setFilteredRepos] = useState([]);
    const [topics, setTopics] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [showLiveDemosOnly, setShowLiveDemosOnly] = useState(false);

    useEffect(() => {
        fetchGitHubRepos().then(repos => {
            setRepos(repos);
            setFilteredRepos(repos);
            // Extract unique topics
            const allTopics = repos.flatMap(repo => repo.topics || []);
            const uniqueTopics = [...new Set(allTopics)];
            const topicOptions = uniqueTopics.map(topic => ({ value: topic, label: topic }));
            // sort by alphabetical order
            topicOptions.sort((a, b) => a.label.localeCompare(b.label));
            setTopics(topicOptions);
        });
    }, []);

    useEffect(() => {
        let filtered = repos;

        if (selectedTopics.length > 0) {
            const selectedValues = selectedTopics.map(topic => topic.value);
            filtered = filtered.filter(repo => repo.topics?.some(topic => selectedValues.includes(topic)));
        }

        if (showLiveDemosOnly) {
            filtered = filtered.filter(repo => repo.homepage);
        }

        setFilteredRepos(filtered);
    }, [selectedTopics, showLiveDemosOnly, repos]);

    const handleTopicChange = (selectedOptions) => {
        setSelectedTopics(selectedOptions || []);
    };

    const handleCheckboxChange = () => {
        setShowLiveDemosOnly(!showLiveDemosOnly);
    };

    return (
        <div className="lg:w-1/2 w-full">
            <div className="mb-4 items-center w-full">
                <Select
                    isMulti
                    options={topics}
                    closeMenuOnSelect={false}
                    aria-label="Select tags to filter projects"
                    value={selectedTopics}
                    onChange={handleTopicChange}
                    placeholder="Select tags..."
                />
                {/* <div className="mt-2 flex items-center">
                    <input
                        type="checkbox"
                        id="liveDemos"
                        checked={showLiveDemosOnly}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    <label htmlFor="liveDemos" className="text-white">Show projects with live demo only</label>
                </div> */}
                <p className="text-white mt-4">Showing <span className="text-red-500">{filteredRepos.length}</span> result(s):</p>
            </div>
            {repos.length === 0 && (
                <p className="text-white text-3xl">Loading...</p>
            )}
            <ul className="space-y-6 w-full">
                {filteredRepos.map((repo) => {
                    return (
                        !repo.fork && (
                            <motion.li
                                variants={listItemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                key={repo.id}
                                className="bg-gray-800 w-full p-4 rounded-lg shadow-md shadow-gray-800">
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
                            </motion.li>
                        )
                    );
                })}
            </ul>
        </div>
    );
}
