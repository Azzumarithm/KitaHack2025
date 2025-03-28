"use client";
import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const JudgingCriteriaSection = () => {
    const [showImpact, setShowImpact] = useState(false);
    const [showTech, setShowTech] = useState(false);
    const [showJudging, setShowJudging] = useState(false);

    useEffect(() => {
        // Check screen width on mount
        if (window.innerWidth >= 768) { // 768px is Tailwind's "md"
            setShowImpact(true);
            setShowTech(true);
            setShowJudging(true);
        }
    }, []);

    const impact = [
        {
            title: "PROBLEM STATEMENT & SDG ALIGNMENT",
            description: "The team must define a problem, align it with an SDG, and show how AI or technology can solve it."
        },
        {
            title: "USER FEEDBACK & ITERATION",
            description: "The team must collect user feedback, identify three key insights, and show how they refined their solution."
        },
        {
            title: "SUCCESS METRICS & SCALABILITY",
            description: "The team must set success metrics and outline a clear scaling roadmap."
        },
        {
            title: "AI INTEGRATION",
            description: "The team must integrate AI (e.g., Google AI Studio, Gemini, Vertex AI), justify their choice, and explain its impact."
        },
        {
            title: "TECHNOLOGY INNOVATION",
            description: "The team must creatively tackle SDG-related issues using technology to solve real-world problems."
        }
    ];

    const tech = [
        {
            title: "TECHNICAL ARCHITECTURE & GOOGLE TECHNOLOGIES",
            description: "The team must clearly describe their system architecture, outlining key components and responsibilities, while justifying their use of Google Cloud, Firebase, Gemini, or other Google technologies."
        },
        {
            title: "TECHNICAL IMPLEMENTATION & CHALLENGES",
            description: "The team must successfully implement all required technical components, highlight a major technical challenge, explain how they resolved it, and describe key technical decisions."
        },
        {
            title: "COMPLETENESS & DEMONSTRATION",
            description: "The team must develop a functional prototype, preferably with real coding, but at least using a low-code platform, and successfully demonstrate it."
        }
    ];


    return (
        <motion.div
            id="criteria"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex flex-col justify-center items-center text-center gap-4 w-3/4 mx-auto">
            <span className="mx-auto bg-purple-100 inline-flex items-center rounded-full border border-purple-500 px-3 py-1 text-sm text-purple-700">
                <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                <span className="ml-1">Judging Criteria</span>
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-[#116BFF]">
                Key Criteria for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3998] to-[#116BFF]">
                    Evaluation
                </span>
            </h1>

            <section className="mt-4 md:mt-12 flex flex-col gap-6 md:gap-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="flex flex-col w-full gap-8 md:gap-8 lg:gap-12"
                    >
                        <div className="relative flex justify-center">
                            {/* Main card */}
                            <div className="bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-[right_top] bg-[length:80%] dark:bg-[#1d1d1d] bg-no-repeat relative z-10 bg-white rounded-2xl shadow-md w-3/5 sm:w-3/5 md:w-2/3 py-2 lg:py-6 flex flex-col gap-1 md:gap-2 items-center border border-[#d8d8d8] dark:border-gray-600 hover:border-[#4285F4] dark:hover:border-[#4285F4] transition-colors duration-200"
                            >
                                <img src="images/layers.png" alt="Layers Icon" className="w-6" />
                                <h3 className="text-[#116BFF] font-semibold text-xl md:text-2xl">IMPACT</h3>
                                <p className="text-sm text-pink-500">(60%)</p>
                            </div>
                            {/* Background gradient effect */}
                            <img
                                className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] md:w-[600px] lg:w-[700px] border border-[#BDBDBD] dark:border-gray-600 rounded-xl max-h-20 md:max-h-30 lg:max-h-40"
                                src="images/Mask group.svg"
                                alt=""
                            />
                        </div>

                        {/* Expandable Section with Animation */}
                        <AnimatePresence>
                            {showImpact && (
                                <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="flex flex-col gap-2 w-[90%] mx-auto text-left pt-5 sm:pt-5 md:pt-0 overflow-hidden"
                                >
                                    {impact.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="p-4 pr-8 flex flex-col gap-2"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3998] to-[#116BFF]">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => setShowImpact(!showImpact)}
                            className="text-gray-400 font-semibold text-sm self-center md:hidden mt-2"
                        >
                            {showImpact ? "See Less" : "See More"}
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="flex flex-col w-full gap-8 md:gap-8 lg:gap-12"
                    >
                        <div className="relative flex justify-center">
                            {/* Main card */}
                            <div className="bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-[right_top] bg-[length:80%] dark:bg-[#1d1d1d] bg-no-repeat relative z-10 bg-white rounded-2xl shadow-md w-3/4 sm:w-3/5 md:w-2/3 py-2 lg:py-6 flex flex-col gap-1 md:gap-2 items-center border border-[#d8d8d8] dark:border-gray-600 hover:border-[#4285F4] dark:hover:border-[#4285F4] transition-colors duration-200"
                            >
                                <img src="images/layers.png" alt="Layers Icon" className="w-6" />
                                <h3 className="text-[#116BFF] font-semibold text-2xl">TECHNICAL</h3>
                                <p className="text-sm text-pink-500">(20%)</p>
                            </div>
                            {/* Background gradient effect */}
                            <img
                                className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] md:w-[600px] lg:w-[700px] border border-[#BDBDBD] dark:border-gray-600 rounded-xl max-h-20 md:max-h-30 lg:max-h-40"
                                src="images/Mask group.svg"
                                alt=""
                            />
                        </div>

                        {/* Expandable Section with Animation */}
                        <AnimatePresence>
                            {showTech && (
                                <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="flex flex-col gap-2 w-[90%] mx-auto text-left pt-5 sm:pt-5 md:pt-0 overflow-hidden"
                                >
                                    {tech.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="p-4 pr-8 flex flex-col gap-2"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3998] to-[#116BFF]">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => setShowTech(!showTech)}
                            className="text-gray-400 font-semibold text-sm self-center md:hidden mt-2"
                        >
                            {showTech ? "See Less" : "See More"}
                        </button>
                    </motion.div>

                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="flex flex-col w-full gap-8 lg:gap-14"
                >
                    <div className="relative flex w-full justify-center">
                        {/* Main card */}
                        <div className="bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-[right_top] bg-[length:70%] sm:bg-[length:45%] md:bg-[length:40%] lg:bg-[length:35%] xl:bg-[length:30%] dark:bg-[#1d1d1d] bg-no-repeat relative z-10 bg-white rounded-2xl shadow-md w-3/4 sm:w-3/5 md:w-2/3 p-4 lg:py-10 flex flex-col gap-2 items-center border border-[#d8d8d8] dark:border-gray-600 hover:border-[#4285F4] dark:hover:border-[#4285F4] transition-colors duration-200"
                        >
                            <img src="images/layers.png" alt="Layers Icon" className="w-6" />
                            <h3 className="text-[#116BFF] font-semibold text-md md:text-2xl">
                                ENSURING FAIR AND IMPARTIAL JUDGING
                            </h3>
                        </div>
                        {/* Background gradient effect */}
                        <img
                            className="hidden md:block absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[760px] md:w-[1200px] lg:w-[1400px] border border-[#BDBDBD] dark:border-gray-600 rounded-xl"
                            src="images/Mask group Wide.svg"
                            alt=""
                        />
                        <img
                            className="block md:hidden absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] md:w-[600px] lg:w-[700px] border border-[#BDBDBD] dark:border-gray-600 rounded-xl max-h-20 md:max-h-30 lg:max-h-40"
                            src="images/Mask group.svg"
                            alt=""
                        />
                    </div>

                    {/* Expandable Section with Animation */}
                    <AnimatePresence>
                        {showJudging && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="text-left text-gray-600 dark:text-gray-400 w-5/6 mx-auto pt-5 sm:pt-5 md:pt-0 overflow-hidden"
                            >
                                Ensuring fair and unbiased judging is crucial for the integrity of any competition.
                                We implement measures to eliminate bias when evaluating submissions. <br /><br />
                                We average the scores from multiple judges and drop the highest and lowest scores.
                                This helps to reduce the impact of any individual judge's opinion and focuses on the
                                collective judgment of the group. <br /><br />
                                We believe that this measure helps to ensure fair and unbiased judging and contribute
                                to the overall integrity of the competition. If you have any questions or feedback,
                                please feel free to contact us.
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setShowJudging(!showJudging)}
                        className="text-gray-400 font-semibold text-sm self-center md:hidden"
                    >
                        {showJudging ? "See Less" : "See More"}
                    </button>
                </motion.div>

            </section>
        </motion.div>
    );
};

export default JudgingCriteriaSection;