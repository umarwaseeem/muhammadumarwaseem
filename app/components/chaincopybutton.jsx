"use client"

import Image from 'next/image';

export default function ChainCopyButton({ link }) {
    return (
        <button onClick={async () => await navigator.clipboard.writeText(link)}>
            <Image src={"/chain.svg"} width={20} height={20} className="mr-2 pb-2" alt="heading copy icon" />
        </button>
    )
}