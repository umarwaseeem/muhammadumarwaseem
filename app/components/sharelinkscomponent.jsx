import Link from "next/link";

import LinkedinIcon from "../components/icons/linkedin-icon";
import TwitterIcon from "../components/icons/twitter-icon";
import FacebookIcon from "../components/icons/facebook-icon";
import RedditIcon from "../components/icons/reddit-icon";
import WhatsappIcon from "../components/icons/whatsapp-icon";
import clsx from "clsx";

export default function ShareLinksComponent({ slug, className }) {
    const baseURL = 'https://muhammadumarwaseem.com/blogs/';
    const articleURL = `${baseURL}${slug}`;

    const text = `Check out this article by Muhammad Umar Waseem.\n\n`;

    const encodedText = encodeURIComponent(text + articleURL);

    const whatsAppShareLink = `https://api.whatsapp.com/send?text=${encodedText}`;

    const linkedinShareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${articleURL}&title=Check out this article by Muhammad Umar Waseem.`;

    const twitterShareLink = `https://x.com/intent/tweet?url=https://muhammadumarwaseem.com/blogs/${slug}&text=${text}`

    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${articleURL}&t=${text}`

    const redditShareLink = `https://www.reddit.com/submit?url=${articleURL}&title=${text}`

    return (
        <div className={clsx("flex flex-col", className)}>
            <h2 className="text-3xl font-semibold mb-4 mt-8 text-white">Share The Article</h2>
            <div className={"flex flex-row justify-start"}>
                <Link href={linkedinShareLink} target="_blank" className="hover:text-blue-500 text-white hover:underline mr-2"><LinkedinIcon /></Link>
                <Link href={twitterShareLink} target="_blank" className="hover:text-purple-500 text-white hover:underline mr-2"><TwitterIcon /></Link>
                <Link href={facebookShareLink} target="_blank" className="hover:text-blue-500 hover:underline mr-2"><FacebookIcon /></Link>
                <Link href={redditShareLink} target="_blank" className="hover:text-orange-500 hover:underline mr-2"><RedditIcon /></Link>
                <Link href={whatsAppShareLink} target="_blank" className="hover:text-green-500 hover:underline mr-2"><WhatsappIcon /></Link>
            </div >
        </div>
    )
}