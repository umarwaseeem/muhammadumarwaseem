import Link from "next/link";
import HeadingItem from "./headingitem"
import LinkedinIcon from "./icons/linkedin-icon";
import TwitterIcon from "./icons/twitter-icon";
import FacebookIcon from "./icons/facebook-icon";
import RedditIcon from "./icons/reddit-icon";
import WhatsappIcon from "./icons/whatsapp-icon";

export default function TableOfContent({ headings, slug }) {

    const baseURL = 'https://muhammadumarwaseem.com/blogs/';
    const articleURL = `${baseURL}${slug}`;

    const text = `Check out this article by Muhammad Umar Waseem.\n\n`;

    const encodedText = encodeURIComponent(text + articleURL);

    const whatsAppShareLink = `https://api.whatsapp.com/send?text=${encodedText}`;

    const linkedinShareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${articleURL}&title=Check out this article by Muhammad Umar Waseem.`;

    const twitterShareLink = `https://x.com/intent/tweet?url=https://muhammadumarwaseem.com/blogs/${slug}&text=${text}`

    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${articleURL}&t=${text}`

    const redditShareLink = `https://www.reddit.com/submit?url=${articleURL}&title=${text}`

    return (<div className="hidden lg:block lg:w-1/4 text-white px-0 py-4">
        <div className="sticky flex flex-col top-20">
            <h2 className="text-3xl font-bold mb-4">Table of Contents</h2>
            <ul className="text-lg">
                {(() => {
                    // This array tracks the numbering for each heading level
                    let levelCounters = [];

                    return headings.map((heading, index) => {
                        const currentLevel = heading.level;

                        // Ensure the levelCounters array has enough elements for current level
                        while (levelCounters.length < currentLevel) {
                            levelCounters.push(0);
                        }

                        // Increment the current level counter
                        levelCounters[currentLevel - 1]++;

                        // Reset all lower level counters
                        for (let i = currentLevel; i < levelCounters.length; i++) {
                            levelCounters[i] = 0;
                        }

                        // Construct the heading number string, filtering out zeros
                        const headingNumber = levelCounters
                            .slice(0, currentLevel)
                            .filter(num => num > 0)
                            .join(".");

                        return (
                            <HeadingItem text={heading.text} index={index} level={heading.level} headingNumber={headingNumber} />
                        );
                    });
                })()}
            </ul>
            <h2 className="text-3xl font-bold mb-4 mt-8">Share The Article</h2>
            <div className="flex flex-row justify-start">
                <Link href={linkedinShareLink} target="_blank" className="hover:text-blue-500 hover:underline mr-2"><LinkedinIcon /></Link>
                <Link href={twitterShareLink} target="_blank" className="hover:text-purple-500 hover:underline mr-2"><TwitterIcon /></Link>
                <Link href={facebookShareLink} target="_blank" className="hover:text-blue-500 hover:underline mr-2"><FacebookIcon /></Link>
                <Link href={redditShareLink} target="_blank" className="hover:text-orange-500 hover:underline mr-2"><RedditIcon /></Link>
                <Link href={whatsAppShareLink} target="_blank" className="hover:text-green-500 hover:underline mr-2"><WhatsappIcon /></Link>
            </div>
        </div>
    </div>)
}