import { umarAvatar } from '../images';
export default function ImpossibleList() {
    return (
        <section className="flex h-fit md:h-[calc(100vh-50px)] lg:h-[calc(100vh-50px)] flex-col lg:flex-row items-start justify-center lg:justify-start bg-midnightblue p-8 lg:px-16 lg:pb-16">
            <h2 className="font-bold text-4xl lg:text-6xl text-white">impossible/bucket list</h2>
        </section >
    );
}

export async function generateMetadata() {
    return {
        title: "Impossible/Bucket List | Muhammad Umar Waseem",
        description: "A list of goals to be acheived.",
        // image: umarAvatar,
        keywords: "goals, bucket list, wish, impossible",
        openGraph: {
            title: "Impossible/Bucket List | Muhammad Umar Waseem",
            description: "A list of goals to be acheived.",
            url: "https://muhammadumarwaseem.com/impossible-list/",
            // image: umarAvatar,
        },
    }
}