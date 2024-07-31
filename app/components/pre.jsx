"use client"

import CopyButton from './copybutton'
import clsx from 'clsx'

export default function Pre({
    children,
    raw,
    buttonClasses = 'absolute top-1 right-3',
    ...props
}) {
    return (
        <pre {...props} className={clsx('relative', props.className)}>
            {children}
            <CopyButton text={raw} className={buttonClasses} />
        </pre>
    )
}

