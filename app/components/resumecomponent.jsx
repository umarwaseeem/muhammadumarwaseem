"use client"


import { motion } from "framer-motion";
import Link from "next/link";
import LinkIcon from "./icons/link-icon";

const fadeInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 20,
            duration: 0.6,
            bounce: 0.3,
        },
    },
};

export default function ResumeComponent() {
    return (
        <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-2xl lg:text-4xl font-semibold mb-2 text-center">Muhammad Umar Waseem</h1>
            <p className="text-sm mb-4 text-center">
                <a href="mailto:umar.waseem@gmail.com" className="text-blue-500 hover:underline">umar.waseem@gmail.com</a> | Islamabad, Pakistan | <a href="https://muhammadumarwaseem.com" className="text-blue-500 hover:underline">https://muhammadumarwaseem.com</a>
            </p>
            <h2 className="text-xl lg:text-3xl font-medium my-2 underline underline-offset-8">Professional Summary</h2>
            <p className="mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                Muhammad Umar is a Computer Science graduate with hands-on experience in developing and deploying Full Stack Web and Mobile App solutions. Muhammad also has experience solving various problems while working with different clients as a freelance software engineer. In addition to his technical skills, he leverages AI tools to get quicker, better results. He has worked on projects with teams on-site and also remotely while maintaining efficient communication and collaboration.
            </p>
            <h2 className="text-xl lg:text-3xl font-medium my-8 underline underline-offset-8">Experience</h2>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">Retail Media Group, London, England</summary>
                <p className="italic mb-1">Full Stack Software Engineer</p>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Built retail media focused android product from ground up.</li>
                    <li>Handled the technical aspects of the product ranging from backend, frontend, database to deployment.</li>
                    <li>Leveraged AI tools to enhance product features, user experience and get ahead of the market competition.</li>
                    <li>Integrated AI tools to bring unique features to the product.</li>
                    <li>Built fully integrated analytics system to track each aspect of the product usage.</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">Cowlar Design Studio, Islamabad, Pakistan</summary>
                <p className="italic mb-1">Software Engineer</p>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Collaborated with teams of Web, Mobile, ML, and Embedded System Engineers, integrating embedded systems, IoT devices, low energy devices, Bluetooth systems, online web APIs with mobile and web apps, resulting in seamless and enhanced user experiences.</li>
                    <li>Automated workflows using Github Actions and Gitlab DevOps workflows, ensuring product quality and agility, significantly reducing errors and improving development speed.</li>
                    <li>Optimized product performance and costs for mobile platforms, achieving a 50-60% improvement in efficiency and cost-effectiveness.</li>
                    <li>Worked on initiatives to improve existing team workflows, such as suggesting agile no-code tools and keeping team members aware of new libraries and improvements.</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">Google Student Developers Club, Islamabad, Pakistan</summary>
                <p className="italic mb-1">Head App Development</p>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Developed mobile applications using Flutter, providing innovative solutions and contributing to various projects within the community.</li>
                    <li>Conducted over 5 workshops to educate and enable students, successfully familiarizing at least 50% of the attendees with essential software engineering skills and technologies.</li>
                    <li>Led app development initiatives, mentoring peers and fostering a collaborative learning environment to enhance the technical capabilities of the club members.</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">Upwork, Freelance</summary>
                <p className="italic mb-1">Freelance Software Engineer</p>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Fixed bugs and made major modifications in existing codebases.</li>
                    <li>Deployed on cloud platforms such as AWS and Azure using DevOps techniques.</li>
                    <li>Worked with a diverse set of problems and use cases.</li>
                    <li>Fulfilled various requirements, including management systems, simple to complex apps like apps handling whole operations of a hotel/restaurant, social media competitors, etc.</li>
                </ul>
            </details>
            
            <h2 className="text-xl lg:text-3xl font-medium my-8 underline underline-offset-8">Skills</h2>
            <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7 mb-4">
                <li>Flutter / Dart to build hybrid mobile / desktop apps</li>
                <li>Typescript for type safe maintainable code,Next.js, React.js, Node.js, Shadcn UI, Tailwind CSS etc to build beautiful web app interfaces and PWAs</li>
                <li>Golang, Python, TensorFlow, Pandas, Numpy, MLflow</li>
                <li>Docker, GitHub Actions, Jenkins, Jira, Airflow, C++</li>
            </ul>
            <h2 className="text-xl lg:text-3xl font-medium my-8 underline underline-offset-8">Projects</h2>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">MD Voice</span>
                    <a href="https://apps.apple.com/us/app/md-voice/id6651860912" target="_blank" rel="noopener noreferrer">
                        <img src="/app-store.png" alt="App Store" className="inline-block w-5 h-5 mr-2" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=ai.hpemr.mdvoice&hl=en" target="_blank" rel="noopener noreferrer">
                        <img src="/play-store.png" alt="Play Store" className="inline-block w-5 h-5 mr-2" />
                    </a>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Transform Doctor-Patient Conversations into Accurate, Automated SOAP Notes in Real-Time.</li>
                    <li>Uses Google's Gemini as a medical assistant.</li>
                    <li>Allows doctors and physicains to focus more on patient care and less on paperwork.</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">Islam KG Hub</span>
                    <Link href="https://islamkghub.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline underline-offset-4 items-center">
                        <LinkIcon height={25} width={25} />
                    </Link>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Knowledge graph based Q&A system for relevant stakeholders to study and ask about Islamic Hadith</li>
                    <li>Uses natural language processing to serve user queries</li>
                    <li>Graph DB and SparQL queries to extract data from the knowledge graph</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">Uni-verse - One Stop App For Students</span>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>The one stop resource center for students</li>
                    <li>Students can look for past exams questions, assignments, and related documents.</li>
                    <li>Chat with a personalized bot to help you prepare by making you questions on topics you are weak in</li>
                    <li>Helps you analyze the trend of exam questions in past years using AI</li>
                    <li>Contribute to the resource database and get higher on a competing student leaderboard.</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">The Checker App</span>
                    <a href="https://apps.apple.com/us/app/the-checker-app/id1660197678" target="_blank" rel="noopener noreferrer">
                        <img src="/app-store.png" alt="App Store" className="inline-block w-5 h-5 mr-2" />
                    </a>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Goodbye to the hassle of manually tracking the cleaning process of hotel rooms.</li>
                    <li>Monitor and record the entire cleaning process of hotel rooms in a few simple steps.</li>
                    <li>The app provides a checklist of all the items that need to be checked during the cleaning process.</li>
                    <li>Can be used to optimize the cleaning process and reduce costs.</li>
                </ul>
            </details>

            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">Retrieval Augmented Gemini Chatbot</span>
                    <Link href="https://github.com/umarwaseeem/thesis-rag-chatbot-gemini" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline underline-offset-4 items-center">
                        <LinkIcon height={25} width={25} />
                    </Link>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Uses LangChain, a new framework for working with different AI models</li>
                    <li>Uses Google's Gemini as a large language model</li>
                    <li>Reduces hallucination and gets the latest data ensuring privacy and concise answers</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">Airflow Data Extraction Pipeline</span>
                    <Link href="https://github.com/umarwaseeem/airflow-data-extraction-pipeline" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline underline-offset-4 items-center">
                        <LinkIcon height={25} width={25} />
                    </Link>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Seamless ETL pipeline</li>
                    <li>Extracts data from source, performs cleaning, and sends to storage</li>
                    <li>Scheduled and manual pipeline triggers</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">GAN Cifar-10 Generative Image Modeling</span>
                    <Link href="https://github.com/umarwaseeem/gan-cifar-10" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline underline-offset-4 items-center">
                        <LinkIcon height={25} width={25} />
                    </Link>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Generative Adversarial Network trained on CIFAR-10 dataset</li>
                    <li>Compute-intensive model training while saving model checkpoints to continue training in supervision or on a different platform for GPU availability</li>
                    <li>CUDA and CUDNN usage for model training over a range of 200 epochs on an NVIDIA RTX 3060ti</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">Siamese Networks Image Similarity</span>
                    <Link href="https://github.com/umarwaseeem/siamese-networks-image-similarity" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline underline-offset-4 items-center">
                        <LinkIcon height={25} width={25} />
                    </Link>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>Siamese neural network for image similarity calculation</li>
                    <li>This model contains a pair of neural networks with shared weights for better performance and similarity calculation</li>
                </ul>
            </details>
            <details className="mb-4">
                <summary className="text-lg lg:text-xl font-normal cursor-pointer">
                    <span className="mr-4">Golang Blockchain</span>
                    <Link href="https://github.com/umarwaseeem/golang-blockchain" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline underline-offset-4 items-center">
                        <LinkIcon height={25} width={25} />
                    </Link>
                </summary>
                <ul className="list-disc pl-5 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                    <li>A fully fledged blockchain implemented in Golang</li>
                    <li>Peer-to-peer network system for nodes</li>
                    <li>Asynchronous Go routines to handle different processes in the blockchain</li>
                    <li>Adjustable block mining difficulty to simulate the real world</li>
                    <li>Structured Merkle tree made from each transaction and block mined</li>
                </ul>
            </details>
            <p className="mb-4">Find more projects on <a href="https://github.com/Umar-Waseem" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/Umar-Waseem</a> or on <Link href="/projects" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">/projects</Link></p>
            <h2 className="text-xl lg:text-3xl font-medium my-8 underline underline-offset-8">Education</h2>
            <h3 className="text-lg lg:text-xl font-normal">Bachelors of Computer Science</h3>
            <div className="flex flex-row justify-between">
                <p className="mb-4 text-white text-sm lg:text-md leading-6 lg:leading-7 italic">
                    <a href="https://www.nu.edu.pk/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Fast National University of Computer and Emerging Sciences</a>
                </p>
                <p className="text-md">2020 - 2024</p>
            </div>
            <p className="text-gray-400"><span className="text-white font-bold">Subjects: </span>Data Structures, OOP, Artificial Intelligence , Generative AI, MLops </p>

            <h2 className="text-xl lg:text-3xl font-medium my-2 underline underline-offset-8">Certifications</h2>
            <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                <li>Aws Certified Cloud Practitioner (in progress)</li>
            </ul>
            <h2 className="text-xl lg:text-3xl font-medium mb-2 underline underline-offset-8">Volunteer Work</h2>
            <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                <div className="flex flex-row justify-between">
                    <li>Community Volunteer with Pakistan Red Crescent May</li><p className="text-white text-md">2024</p>
                </div>
            </ul>
        </motion.div>
    )
}