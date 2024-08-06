
import HeadingItem from "./headingitem"
import ShareLinksComponent from "./sharelinkscomponent";

export default function TableOfContent({ headings, slug }) {


    return (
        <div className="hidden lg:block lg:w-1/4 text-white px-0 py-4">
            <div className="sticky flex flex-col top-20">
                <h2 className="text-3xl font-semibold mb-4">Table of Contents</h2>
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
                <ShareLinksComponent slug={slug} />
            </div>
        </div>)
}