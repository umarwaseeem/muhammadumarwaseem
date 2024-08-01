import Link from "next/link";
import ResumeComponent from "../components/resumecomponent";
import { umarAvatar } from "../images";

export default function Resume() {
    return (
        <section className="p-6 bg-midnightblue text-white lg:px-[20%]">
            <div className="flex flex-col items-center">
                <Link href="/ResumeUmarWaseem.pdf" className="text-sm lg:text-md text-red-500 font-semibold mb-6 underline underline-offset-4">Download The Resume</Link>
                <ResumeComponent />
            </div>
        </section>

    );
}

export async function generateMetadata() {
    return {
        title: "Resume | Muhammad Umar Waseem",
        description: "Professional resume of Muhammad Umar Waseem.",
        image: umarAvatar,
        openGraph: {
            title: "Resume | Muhammad Umar Waseem",
            description: "Professional resume of Muhammad Umar Waseem.",
            url: "https://muhammadumarwaseem.com/blogs",
            images: umarAvatar,
        },
    };
}

