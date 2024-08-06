"use client"

import CopyButton from './copybutton'
import clsx from 'clsx'

export default function Pre({
    children,
    buttonClasses = 'absolute top-2 right-3',
    ...props
}) {
    return (
        <pre {...props} className={clsx('relative', props.className, "bg-black text-gray-300 p-4 my-4 overflow-auto")}>
            {children}
            <CopyButton text={children} className={buttonClasses} />
        </pre>
    )
}

