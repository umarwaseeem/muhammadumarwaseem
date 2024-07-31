"use client"

import Link from "next/link"

export default function HeadingItem({ level, text, index, headingNumber }) {
    const onClick = (e) => {
        e.preventDefault(); // Prevent the default anchor click behavior
        const element = document.getElementById(text);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
            window.history.pushState(null, '', `#${text}`);
        }
    };

    return (
        <li key={index} style={{ marginLeft: `${(level - 1) * 1.5}rem` }}>
            <Link onClick={onClick} href={`#${text}`} scroll={false}>
                {headingNumber}{". "}
                <span className='text-gray-400'>{text}</span>
            </Link>
        </li>
    );
}
