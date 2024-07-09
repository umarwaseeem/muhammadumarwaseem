"use client"

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.replace("/blogs")} 
            className='py-2 text-gray-400'>
            {"<-"} back
        </button>
    );
}