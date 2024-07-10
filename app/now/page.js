import { umarAvatar } from '../images';
export default function Now() {
    return (

        <section className="flex h-fit md:h-[calc(100vh-50px)] lg:h-[calc(100vh-100px)] flex-col lg:flex-row items-start justify-center lg:justify-start bg-midnightblue p-8 lg:px-16 lg:pb-16">
            <h2 className="font-bold text-4xl lg:text-6xl text-white">now</h2>
        </section >

    );
}
export async function generateMetadata() {
return {
    title: "Now | Muhammad Umar Waseem",
    description: "Things that Muhammad Umar Waseem is currently doing.",
    image: openGraphImage,
    keywords: "goals, bucket list, wish, impossible",
    openGraph: {
        title: "Now | Muhammad Umar Waseem",
        description: "Things that Muhammad Umar Waseem is currently doing.",
        url: "https://muhammadumarwaseem.com/now/",
        image: umarAvatar,
        
    },
}
}
