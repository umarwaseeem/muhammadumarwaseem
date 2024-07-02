import Link from "next/link";
import LinkIcon from "../components/icons/link-icon";

export default function Contact() {
    return (
        <section className="flex h-[93vh] flex-col items-center lg:items-start lg:justify-start bg-black p-6">
            <h2 className="font-bold text-4xl lg:text-8xl text-white mb-14">get in touch</h2>
            <div className="flex flex-col items-center lg:items-start space-y-6" >
                <div>
                    <span className="text-red-600 font-bold text-xl lg:text-4xl">Email: </span>
                    <Link className="hover:underline underline-offset-8 text-xl lg:text-4xl text-gray-200" href="mailto:umar.waseem@gmail.com" >umar.waseem@gmail.com</Link>
                    <LinkIcon />
                </div>
                <div>
                    <span className="text-gray-500 font-bold text-xl lg:text-4xl">Github: </span>
                    <Link className="hover:underline underline-offset-8 text-xl lg:text-4xl text-gray-200" href="https://github.com/Umar-Waseem" >@Umar-Waseem</Link>
                    <LinkIcon />
                </div>
                <div>
                    <span className="text-purple-500 font-bold text-xl lg:text-4xl">Twitter / X: </span>
                    <Link className="hover:underline underline-offset-8 text-xl lg:text-4xl text-gray-200" href="https://twitter.com/umar_terminator" >@umar_terminator</Link>
                    <LinkIcon />
                </div>
                <div>
                    <span className="text-gray-500 font-bold text-xl lg:text-4xl">Medium: </span>
                    <Link className="hover:underline underline-offset-8 text-xl lg:text-4xl text-gray-200" href="https://medium.com/@umar.waseem" >@umar.waseem</Link>
                    <LinkIcon />
                </div>
                <div>
                    <span className="text-pink-600 font-bold text-xl lg:text-4xl">Instagram: </span>
                    <Link className="hover:underline underline-offset-8 text-xl lg:text-4xl text-gray-200" href="https://www.instagram.com/umarwaseeem/" >@umarwaseeem</Link>
                    <LinkIcon />
                </div>
                <div>
                    <span className="text-blue-600 font-bold text-xl lg:text-4xl">Linkedin: </span>
                    <Link className="hover:underline underline-offset-8 text-xl lg:text-4xl text-gray-200" href="https://www.linkedin.com/in/umarwaseem/" >@umarwaseeem</Link>
                    <LinkIcon />
                </div>
            </div>
        </section>
    );
}
