"use client";
import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";
import { useState, useEffect  } from "react";

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
        <div className="flex flex-col justify-center items-center text-center gap-4 w-3/4 mx-auto">
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
                    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-12">
                        <div className="relative flex justify-center">
                            {/* Main card */}
                            <div className="bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-[right_top] bg-[length:80%] dark:bg-[#1d1d1d] bg-no-repeat relative z-10 bg-white rounded-2xl shadow-md w-3/4 md:w-2/3 py-2 lg:py-6 flex flex-col gap-1 md:gap-2 items-center border border-[#d8d8d8] dark:border-gray-600 hover:border-[#4285F4] dark:hover:hover:border-[#4285F4] transition-colors duration-200">
                                <img src="images/layers.png" alt="Layers Icon" className="w-6" />
                                <h3 className="text-[#116BFF] font-semibold text-xl md:text-2xl">IMPACT</h3>
                                <p className="text-sm text-pink-500">(60%)</p>
                            </div>
                            {/* Background gradient effect */}
                            <img className="absolute top-1/2 border border-[#BDBDBD] dark:border-gray-600 rounded-xl max-h-20" src="images/Mask group.svg" alt="" />
                        </div>
                        {/* expandable 1 */}
                        {showImpact && (
                            <ul className="flex flex-col gap-2 w-[90%] mx-auto text-left">
                                {impact.map((item, index) => (
                                    <li key={index} className="p-4 pr-8 flex flex-col gap-2">
                                        <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3998] to-[#116BFF]">{item.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button onClick={() => setShowImpact(!showImpact)} className="text-gray-400 font-semibold text-sm self-center md:hidden mt-2">
                            {showImpact ? "See Less" : "See More"}
                        </button>
                    </div>
                    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-12">
                        <div className="relative flex justify-center">
                            {/* Main card */}
                            <div className="bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-[right_top] bg-[length:80%] dark:bg-[#1d1d1d] bg-no-repeat relative z-10 bg-white rounded-2xl shadow-md w-3/4 md:w-2/3 py-2 lg:py-6 flex flex-col gap-1 md:gap-2 items-center border border-[#d8d8d8] dark:border-gray-600 hover:border-[#4285F4] dark:hover:hover:border-[#4285F4] transition-colors duration-200">
                                <img src="images/layers.png" alt="Layers Icon" className="w-6" />
                                <h3 className="text-[#116BFF] font-semibold text-2xl">TECHNICAL</h3>
                                <p className="text-sm text-pink-500">(20%)</p>
                            </div>
                            {/* Background gradient effect */}
                            <img className="absolute top-1/2 border border-[#BDBDBD] dark:border-gray-600 rounded-xl max-h-20" src="images/Mask group.svg" alt="" />
                        </div>
                        {/* expandable 2 */}
                        {showTech && (
                            <ul className="flex flex-col gap-2 w-[90%] mx-auto text-left">
                                {tech.map((item, index) => (
                                    <li key={index} className="p-4 pr-8 flex flex-col gap-2">
                                        <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3998] to-[#116BFF]">{item.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button onClick={() => setShowTech(!showTech)} className="text-gray-400 font-semibold text-sm self-center md:hidden mt-2">
                            {showTech ? "See Less" : "See More"}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-10 lg:gap-14">
                    <div className="relative flex w-full justify-center">
                        {/* Main card */}
                        <div className="bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-[right_top] bg-[length:30%] dark:bg-[#1d1d1d] bg-no-repeat relative z-10 bg-white rounded-2xl shadow-md w-3/4 md:w-5/6 py-2 lg:py-10 flex flex-col gap-2 items-center border border-[#d8d8d8] dark:border-gray-600 hover:border-[#4285F4] dark:hover:hover:border-[#4285F4] transition-colors duration-200">
                            <img src="images/layers.png" alt="Layers Icon" className="w-6" />
                            <h3 className="text-[#116BFF] font-semibold text-lg md:text-2xl">ENSURING FAIR AND IMPARTIAL JUDGING</h3>
                        </div>
                        {/* Background gradient effect */}
                        <img className="hidden md:block absolute top-1/2 border border-[#BDBDBD] dark:border-gray-600 rounded-xl" src="images/Mask group Wide.svg" alt="" />
                        <img className="md:hidden absolute top-1/2 border border-[#BDBDBD] dark:border-gray-600 dark: rounded-xl max-h-20" src="images/Mask group.svg" alt="" />
                    </div>
                    {/* expandable 3 */}
                    {showJudging && (
                        <p className="text-left text-gray-600 dark:text-gray-400 w-5/6 mx-auto">
                            Ensuring fair and unbiased judging is crucial for the integrity of any competition. We implement measures to eliminate bias when evaluating submissions. <br /><br />
                            We average the scores from multiple judges and drop the highest and lowest scores. This helps to reduce the impact of any individual judge's opinion and focuses on the collective judgment of the group. <br /><br />
                            We believe that this measure helps to ensure fair and unbiased judging and contribute to the overall integrity of the competition. If you have any questions or feedback, please feel free to contact us.
                        </p>
                    )}
                    <button onClick={() => setShowJudging(!showJudging)} className="text-gray-400 font-semibold text-sm self-center md:hidden">
                      {showJudging ? "See Less" : "See More"}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default JudgingCriteriaSection;