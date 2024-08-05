"use client"

import CopyButton from './copybutton'
import clsx from 'clsx'

export default function Pre({
    children,
    buttonClasses = 'absolute -top-3 right-3',
    ...props
}) {
    return (
        <pre {...props} className={clsx('relative', props.className)}>
            {children}
            <CopyButton text={children} className={buttonClasses} />
        </pre>
    )
}

