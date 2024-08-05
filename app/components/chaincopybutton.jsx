"use client"

import Image from 'next/image';

export default function ChainCopyButton({ link, className }) {

    const copy = async () => {
        navigator.clipboard.writeText(link)

        const element = document.getElementById(link.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `${link}`);
        }
    }

    return (
        <button className={className} onClick={async () => copy()}>
            <Image src={"/chain.svg"} width={20} height={20} className='m-0 p-0 bg-blue-500' alt="heading copy icon" />
        </button>
    )
}