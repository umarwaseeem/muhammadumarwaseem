"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LinkIcon from './icons/link-icon';
import EyeIcon from './icons/eyeicon';

import { getViews } from '../blogs/recordView'; // Ensure to import your getViews function correctly

export default function SmallCard({ title, description, date, coverImage, category, className, slug }) {
    const [views, setViews] = useState(0); // Initialize views state

    useEffect(() => {
        // Fetch the views count asynchronously
        const fetchViews = async () => {
            try {
                const viewsCount = await getViews(slug);
                setViews(viewsCount);
            } catch (error) {
                console.error('Failed to fetch views:', error);
            }
        };

        fetchViews();
    }, [slug]); // Dependency array to refetch if slug changes

    const formatViews = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(views);

    return (
        <div className={`${className} relative flex flex-row rounded-lg overflow-hidden hover:shadow-lg group`}>
            <div className="relative w-full h-full">
                <Image
                    className="object-cover lg:h-40 h-36 w-full rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                    src={coverImage}
                    width={200}
                    height={200}
                    alt={title}
                    sizes="(max-width: 768px) 100vw,"
                    priority={true}
                />
            </div>
            <div className="absolute inset-0 lg:h-40 h-36 bg-black bg-opacity-60 text-white flex flex-col justify-between rounded-lg transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex flex-col p-4">
                    <div className="flex flex-row justify-between">
                        <span className="text-white text-[0.5rem] lg:text-xs bg-green-500 rounded mb-2 inline-block p-1 w-fit">{category}</span>
                        <div className='flex flex-row'>
                            <EyeIcon />
                            <p className='text-xs'>{formatViews}</p>
                        </div>
                    </div>
                    <span className="text-red-400 text-xs block lg:text-sm italic">{date}</span>
                    <h2 className="text-md md:text-xl lg:text-2xl font-semibold leading-tight truncate hover:text-blue-600">
                        {title}<LinkIcon />
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-1 overflow-hidden line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
