"use client";

import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const SdgAISection = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const pattern =
        (theme || resolvedTheme) === "dark"
            ? "/images/homepage/sdgAI/Pattern-BG-dark.svg"
            : "/images/homepage/sdgAI/Pattern-BG.svg";

    const aiTools = [
        {
            name: "GOOGLE AI STUDIO",
            description:
                "A web-based platform for quickly prototyping, testing, and deploying AI models using Google's advanced technologies.",
            imageSrc: "/images/ai-studio-icon.png",
        },
        {
            name: "GEMINI",
            description:
                "A cutting-edge multimodal AI model designed for natural language understanding, code generation, and more.",
            imageSrc: "/images/Gemini-icon.png",
        },
        {
            name: "VERTEX AI",
            description:
                "A unified platform for building, deploying, and scaling machine learning models efficiently.",
            imageSrc: "/images/VertexAI-icon.webp",
        },
    ];


    return (
        <section className="flex items-center lg:mt-20 z-10 min-w-full">
            <div className="container mx-auto z-10">
                <div className="flex justify-center px-6 md:px-12 xl:px-40 ">
                    <span className="bg-purple-100 inline-flex items-center rounded-full border border-purple-500 px-3 py-1 text-sm text-purple-700">
                        <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                        <span className="ml-1">SDGs and Google AI</span>
                    </span>
                </div>

                <h1
                    id="hero_title"
                    className="font-semibold text-3xl text-black md:text-5xl xl:text-6xl dark:text-white text-center break-words mt-5"
                >
                    Advancing SDGs <br /> with  Google AI
                </h1>

                <div className="flex justify-center pt-16 px-6 md:px-12 xl:px-40 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 container">
                        <Image
                            src="/images/homepage/sdgAI/sdg-ai.png"
                            alt="sdg-ai"
                            width={500}
                            height={350}
                            className="rounded-lg h-full w-full flex justify-center items-center"
                        />
                        <div className="relative rounded-2xl border-[3px] border-gray-200 shadow-md shadow-gray-300 dark:shadow-gray-600 dark:border-gray-600  hover:border-blue-600 hover:shadow-blue-300 hover:shadow-md bg-white dark:bg-[#1d1d1d] dark:hover:border-blue-600 dark:hover:shadow-blue-500 cursor-pointer transition-all duration-300 bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] container" style={{
                            backgroundSize: "70%",
                            backgroundPosition: "top right",
                            backgroundRepeat: "no-repeat"
                        }} >
                            <div className={"z-10 p-8 md:p-16 space-y-4"}>
                                <h1 className="relative text-lg font-semibold text-blue-600 z-10">SUSTAINABLE DEVELOPMENT GOALS</h1>

                                <p className={"relative z-10 italic text-gray-700 dark:text-gray-400"}>In 2015, the United Nations established 17 Sustainable Development Goals (SDGs) to be achieved by 2030, aiming to end poverty, ensure prosperity, and protect the planet. These goals were agreed upon by all 193 United Nations Member States as a global blueprint for a better future.</p>

                            </div>
                            {/* <Image
                                src={pattern}
                                alt="Background"
                                width={350}
                                height={300}
                                className="absolute top-0 right-0 rounded-2xl z-0"
                            /> */}
                        </div>
                    </div>
                </div>

                <div className={"flex justify-center min-w-screen pt-16"}>
                    <p className={"text-center w-8/12 italic text-gray-700 dark:text-gray-400"}>
                        We encourage participants to develop projects that contribute to one or more of the 17 SDGs using&nbsp;
                        <a href="https://ai.google/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Google's AI technologies
                        </a>, such as Gemini AI, Vertex AI, and Google AI Studio. By leveraging these powerful tools, participants can build innovative solutions that tackle global challenges, drive sustainability, and create meaningful change.
                    </p>
                </div>


                <div className={"flex justify-center px-6 md:px-12 xl:px-40 "}>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 pt-16">
                        <div className="relative rounded-2xl border-[3px] border-gray-200 shadow-md shadow-gray-300 dark:shadow-gray-600 dark:border-gray-600  hover:border-blue-600 hover:shadow-blue-300 hover:shadow-md bg-white dark:bg-[#1d1d1d] dark:hover:border-blue-600 dark:hover:shadow-blue-500 cursor-pointer transition-all duration-300 container">
                            <div className={"z-10 p-8 md:p-16 space-y-4"}>
                                <h1 className="relative text-lg font-semibold text-blue-600 z-10">ARTIFICIAL INTELLIGENCE</h1>

                                <p className={"relative z-10 italic text-gray-700 dark:text-gray-400"}>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, enabling them to learn, reason, and make decisions. AI is revolutionizing industries by automating tasks, optimizing processes, and providing data-driven insights to solve complex problems.</p>

                            </div>

                        </div>
                        <div className="relative grid grid-cols-1 gap-5 container">
                            {aiTools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl border-[3px] border-gray-200 shadow-md shadow-gray-300 dark:shadow-gray-600 dark:border-gray-600 hover:border-blue-600 hover:shadow-blue-300 hover:shadow-md bg-white dark:bg-[#1d1d1d] dark:hover:border-blue-600 dark:hover:shadow-blue-500 cursor-pointer transition-all duration-300 flex items-center px-5 py-2"
                                >
                                    <div className="flex items-center space-x-5 group-hover:flex-col group-hover:items-start group-hover:justify-center group-hover:space-x-0">
                                        <div className="flex items-center space-x-5 group-hover:space-x-2 ">
                                            <Image
                                                src={tool.imageSrc}
                                                alt="Logo"
                                                width={50}
                                                height={50}
                                                className="w-10 h-10 sm:w-16 sm:h-16 transition-transform group-hover:size-5"
                                            />
                                            <span className="text-blue-600 font-bold text-xl sm:text-4xl group-hover:text-sm flex items-center">
                                                {tool.name}
                                            </span>
                                        </div>
                                        <p className="hidden group-hover:block text-gray-600 dark:text-gray-400 text-sm mt-1 italic">
                                            {tool.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>



            </div>
        </section>
    );
};

export default SdgAISection;
