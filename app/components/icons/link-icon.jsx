import Image from 'next/image';

export default function LinkIcon({ height = 15, width = 15}) {
    return (
        <Image 
            src="/arrow-top-left.svg" 
            alt="Link icon" 
            className="rotate-90 inline" 
            width={width}
            height={height}
        />
    )
}