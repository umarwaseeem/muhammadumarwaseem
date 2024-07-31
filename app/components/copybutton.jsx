"use client"

import { useState } from 'react'
import Image from 'next/image'

import clsx from 'clsx'

const buttonClasses = 'flex flex-col items-start justify-start text-xs text-white rounded'

export default function CopyButton({ text, className }) {
    const [isCopied, setIsCopied] = useState(false)

    const copy = async () => {
        await navigator.clipboard.writeText(text)
        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false)
        }, 2500)
    }

    const Icon = isCopied ? "Copied" : <Image className='' src="/copy.svg" alt={"copy button"} height={16} width={16} />

    return (
        <button
            disabled={isCopied}
            onClick={copy}
            className={clsx(buttonClasses, className) + ""}
        >
            {Icon}
            {/* <span>{isCopied ? 'Copied!' : 'Copy'}</span> */}
        </button>
    )
}

