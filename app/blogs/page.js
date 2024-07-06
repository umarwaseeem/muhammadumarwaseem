"use client"

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '../components/pagewrapper';
import { useEffect, useState } from 'react';

let blogs = [
    {
        title: 'how to get started with flutter?',
        link: '#',
        image: 'https://via.placeholder.com/150',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut in nulla elementum, lacinia purus vel, laoreet nisl.',
        date: '2021-10-10',
        time: '10:00 pm',
    },
    {
        title: 'blog 2 has this title',
        link: '#',
        image: 'https://via.placeholder.com/150',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut in nulla elementum, lacinia purus vel, laoreet nisl.',
        date: '2021-10-10',
        time: '10:00 pm',
    },
    {
        title: 'this title belongs to blog 3',
        link: '#',
        image: 'https://via.placeholder.com/150',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut in nulla elementum, lacinia purus vel, laoreet nisl.',
        date: '2021-10-10',
        time: '10:00 pm',
    },
    {
        title: 'blog 4 has no title',
        link: '#',
        image: 'https://via.placeholder.com/150',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut in nulla elementum, lacinia purus vel, laoreet nisl.',
        date: '2021-10-10',
        time: '10:00 pm',
    },
];

export default function BlogsIntro() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <PageWrapper>
            <section className="flex h-[calc(100vh-50px)] flex-col items-center lg:items-start lg:justify-start bg-midnightblue p-6 lg:p-16">
                {/* Top-left heading */}
                <h2 className="font-bold text-4xl lg:text-8xl text-white mb-14">recent writings</h2>

                {/* Bottom-right box links */}
                <div className="flex flex-col lg:flex-col items-end absolute bottom-6 right-6 space-y-4 mb-20 w-full max-w-full pl-10 lg:max-w-3xl">
                    <AnimatePresence>
                        {isVisible && (
                            <>
                                {blogs.map((blog, index) => (
                                    <Link key={index} href={blog.link}>
                                        <motion.div
                                            className={`flex flex-col group text-white py-3 rounded-lg overflow-hidden text-right w-full`}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <span className="text-red-400 mr-2 text-xs">{blog.date} - {blog.time}</span>
                                            <div className="flex flex-row items-center justify-end">
                                                <Image src="/arrow-top-left.svg" alt="arrow icon" width={20} height={20} />
                                                <span className="text-white mr-2 text-lg lg:text-5xl py-2 relative truncate">
                                                    {blog.title}
                                                    <span className="absolute bottom-2 lg:bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-right"></span>
                                                </span>
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </>
                        )}
                    </AnimatePresence>

                    <Button className="bg-transparent hover:bg-gray-700 border text-white py-2 lg:py-2 lg:px-3 px-1 rounded-md mt-4 lg:w-1/2 w-full">View All</Button>
                </div>
            </section>
        </PageWrapper>
    );
}
