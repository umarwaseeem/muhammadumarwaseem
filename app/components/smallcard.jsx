import Image from 'next/image';
import LinkIcon from './icons/link-icon';

export default function SmallCard({ title, description, date, coverImage, category, className }) {
    return (
        <div className={`${className} relative flex flex-row rounded-lg overflow-hidden hover:shadow-lg h-40 lg:h-48 bg-gray-800`}>
            <div className="relative w-1/3 h-full">
                <Image
                    className="object-cover w-full h-full rounded-l-lg"
                    src={coverImage}
                    alt={title}
                    layout="fill"
                />
            </div>
            <div className="relative p-4 text-white flex flex-col justify-between w-2/3 z-10 rounded-r-lg">
                <div className="flex flex-col">
                    <span className="text-white text-[0.5rem] lg:text-xs bg-green-500 rounded mb-2 inline-block p-1 w-fit">{category}</span>
                    <span className="text-red-400 text-xs block lg:text-sm font-bold">{date}</span>
                    <h2 className="mt-2 text-md md:text-xl lg:text-2xl font-semibold leading-tight truncate hover:text-blue-600">
                        {title}<LinkIcon />
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-1 overflow-hidden line-clamp-2">
                        {description}
                    </p>
                </div>
                {/* <p className="text-xs lg:text-sm flex justify-end mt-2">
                    Read more <LinkIcon height={10} width={10} />
                </p> */}
            </div>
        </div>
    )
}
