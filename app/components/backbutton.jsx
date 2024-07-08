"use client"

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.replace("/blogs")} 
            className='py-4 text-xl'>
            {"<"} Back
        </button>
    );
}