"use client"

import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Resume() {
    return (
        <section className="p-6 bg-midnightblue text-white lg:px-[20%]">
            {/* download resume */}
            <div className="flex flex-col items-center">
                <Link href="/ResumeUmarWaseem.pdf" className="text-sm lg:text-md text-red-500 font-semibold mb-6 underline underline-offset-4">Download The Resume</Link>

                <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-center">Muhammad Umar Waseem</h1>
                    <p className="text-sm mb-4 text-center">
                        <a href="mailto:umar.waseem@gmail.com" className="text-blue-500 hover:underline">umar.waseem@gmail.com</a> | Islamabad, Pakistan | <a href="https://muhammadumarwaseem.com" className="text-blue-500 hover:underline">https://muhammadumarwaseem.com</a>
                    </p>
                    <h2 className="text-xl lg:text-3xl font-semibold my-2 underline underline-offset-8">Professional Summary</h2>
                    <p className="mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        Muhammad Umar is a Computer Science graduate with hands-on experience in developing and deploying Full Stack Web and Mobile App solutions to cloud providers like Azure and AWS, including Machine and Deep Learning microservices. Muhammad also has experience solving various problems while working with different people as a freelance software engineer.
                    </p>
                    <h2 className="text-xl lg:text-3xl font-semibold my-2 underline underline-offset-8">Experience</h2>
                    <h3 className="text-lg lg:text-xl font-semibold">Software Engineer</h3>
                    <p className="italic mb-1">Cowlar Design Studio, Islamabad, Pakistan</p>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Collaborated with teams of Web, Mobile, ML, and Embedded System Engineers, integrating embedded systems, IoT devices, low energy devices, Bluetooth systems, online web APIs with mobile and web apps, resulting in seamless and enhanced user experiences.</li>
                        <li>Automated workflows using Github Actions and Gitlab DevOps workflows, ensuring product quality and agility, significantly reducing errors and improving development speed.</li>
                        <li>Optimized product performance and costs for mobile platforms, achieving a 50-60% improvement in efficiency and cost-effectiveness.</li>
                        <li>Worked on initiatives to improve existing team workflows, such as suggesting agile no-code tools and keeping team members aware of new libraries and improvements.</li>
                    </ul>
                    <h3 className="text-lg lg:text-xl font-semibold">Head App Development</h3>
                    <p className="italic mb-1">Google Student Developers Club, Islamabad, Pakistan</p>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Developed mobile applications using Flutter, providing innovative solutions and contributing to various projects within the community.</li>
                        <li>Conducted over 5 workshops to educate and enable students, successfully familiarizing at least 50% of the attendees with essential software engineering skills and technologies.</li>
                        <li>Led app development initiatives, mentoring peers and fostering a collaborative learning environment to enhance the technical capabilities of the club members.</li>
                    </ul>
                    <h3 className="text-lg lg:text-xl font-semibold">Freelance Software Engineer</h3>
                    <p className="italic mb-1">Google Student Developers Club, Islamabad, Pakistan</p>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Fixed bugs and made major modifications in existing codebases.</li>
                        <li>Deployed on cloud platforms such as AWS and Azure using DevOps techniques.</li>
                        <li>Worked with a diverse set of problems and use cases.</li>
                        <li>Fulfilled various requirements, including management systems, simple to complex apps like apps handling whole operations of a hotel/restaurant, social media competitors, etc.</li>
                    </ul>
                    <h2 className="text-xl lg:text-3xl font-semibold my-2 underline underline-offset-8">Skills</h2>
                    <p className="mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">Python - TensorFlow / Keras / PyTorch - Numpy / Pandas - MLflow - Flask / Django / Model Deployments - Docker / Kubernetes / GitHub Actions / Jenkins - Jira / Airflow / C++ / Backend Development / Node.js / Golang</p>
                    <h2 className="text-xl lg:text-3xl font-semibold mb-2 underline underline-offset-8">Projects</h2>
                    <h3 className="text-lg lg:text-xl font-semibold">Retrieval Augmented Gemini Chatbot</h3>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Uses LangChain, a new framework for working with different AI models</li>
                        <li>Uses Google’s Gemini as a large language model</li>
                        <li>Reduces hallucination and gets the latest data ensuring privacy and concise answers</li>
                    </ul>
                    <h3 className="text-lg lg:text-xl font-semibold">Airflow Data Extraction Pipeline</h3>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Seamless ETL pipeline</li>
                        <li>Extracts data from source, performs cleaning, and sends to storage</li>
                        <li>Scheduled and manual pipeline triggers</li>
                    </ul>
                    <h3 className="text-lg lg:text-xl font-semibold">IslamKGHub Final Year Project</h3>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Knowledge graph based Q&A system for relevant stakeholders to study and ask about Islamic Hadith, a vast database of knowledge maintained over many years</li>
                        <li>Uses natural language processing to serve user queries</li>
                        <li>Graph DB and SparQL queries to extract data from the knowledge graph</li>
                        <li>Backend system APIs fully deployed and seamless for communication of the graph to frontend</li>
                    </ul>
                    <h3 className="text-lg lg:text-xl font-semibold">GAN Cifar-10 Generative Image Modeling</h3>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Generative Adversarial Network trained on CIFAR-10 dataset</li>
                        <li>Compute-intensive model training while saving model checkpoints to continue training in supervision or on a different platform for GPU availability</li>
                        <li>CUDA and CUDNN usage for model training over a range of 200 epochs on an NVIDIA RTX 3060ti</li>
                    </ul>
                    <h3 className="text-lg lg:text-xl font-semibold">Siamese Networks Image Similarity</h3>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Siamese neural network for image similarity calculation</li>
                        <li>This model contains a pair of neural networks with shared weights for better performance and similarity calculation</li>
                    </ul>
                    <h3 className="text-lg lg:text-xl font-semibold">Golang Blockchain</h3>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>A fully fledged blockchain implemented in Golang</li>
                        <li>Peer-to-peer network system for nodes</li>
                        <li>Asynchronous Go routines to handle different processes in the blockchain</li>
                        <li>Adjustable block mining difficulty to simulate the real world</li>
                        <li>Structured Merkle tree made from each transaction and block mined</li>
                    </ul>
                    <p className="mb-4">Find more projects on <a href="https://github.com/Umar-Waseem" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/Umar-Waseem</a> or on <Link href="/projects" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">/projects</Link></p>
                    <h2 className="text-xl lg:text-3xl font-semibold my-2 underline underline-offset-8">Education</h2>
                    <h3 className="text-lg lg:text-xl font-semibold">Bachelors of Computer Science</h3>
                    <div className="flex flex-row justify-between">
                        <p className="mb-4 text-white text-sm lg:text-md leading-6 lg:leading-7 italic">Fast National University of Computer and Emerging Sciences</p>
                        <p className="text-md">2020 - 2024</p>
                    </div>
                    <p className="text-gray-400"><span className="text-white font-extrabold">Subjects: </span>Data Structures, OOP, Artificial Intelligence , Generative AI, MLops </p>

                    <h2 className="text-xl lg:text-3xl font-semibold my-2 underline underline-offset-8">Certifications</h2>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <li>Azure AZ900</li>
                        <li>Aws Certified Cloud Practitioner (in progress)</li>
                    </ul>
                    <h2 className="text-xl lg:text-3xl font-semibold mb-2 underline underline-offset-8">Volunteer Work</h2>
                    <ul className="list-disc pl-5 mb-4 text-gray-400 text-md lg:text-lg leading-6 lg:leading-7">
                        <div className="flex flex-row justify-between">
                            <li>Community Volunteer with Pakistan Red Crescent May</li><p className="text-white text-md">2024</p>
                        </div>
                    </ul>
                </motion.div>
            </div>

        </section>

    );
}
