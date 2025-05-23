"use client"
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";



const KitahackWinnerSection = () => {
    return (

        <section>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="container mx-auto z-10">
                <div className="px-6 md:px-12 xl:px-40 space-y-12">
                    <div className="space-y-4 text-center">
                        {/* Badge */}
                        <span
                            id="demo-day-section"
                            className="bg-[#F6F3FF] inline-flex items-center rounded-full border border-[#7C3AED] px-3 py-1 text-sm text-purple-700"
                        >
                            <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                            <span className="ml-1">KitaHack-2025-Winners</span>
                        </span>

                        {/* Title */}
                        <h1
                            id="kitahack-winner"
                            className="font-semibold text-4xl text-black md:text-5xl xl:text-6xl dark:text-white"
                        >
                            <span className="bg-gradient-to-r from-[#FF3998] to-[#116BFF] bg-clip-text text-transparent">
                                <span className="font-light">Congratulations!</span> <br />
                                <p className="bg-gradient-to-r from-[#FF3998] to-[#116BFF] bg-clip-text text-transparent font-black">
                                    Ctrl + C Ctrl + V!
                                </p>
                            </span>

                        </h1>

                        {/* Subtext */}
                        <p className="text-[#5A5A5A] dark:text-gray-400 text-center italic">
                            EqualLens – An AI-powered recruitment platform tackling bias and inefficiency in hiring. Judges were impressed by the real-world relevance, seamless automation, and commitment to fairness and equal opportunity.
                        </p>
                        
                    </div>

                    <div className={"space-y-16 md:space-y-36"}>

                        <div className="grid grid-cols-2 gap-16 md:gap-44">

                            {/* Top full-width image with bottom caption */}
                            <div className="relative col-span-2 group">
                                <img
                                    src="images/homepage/winnners/champion-desktop.JPG"
                                    alt=""
                                    className="w-full border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300 rounded-3xl hidden md:block"
                                />

                                <img
                                    src="images/homepage/winnners/champion.jpg"
                                    alt=""
                                    className="w-full border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300 rounded-3xl block md:hidden"
                                />

                                <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 bg-white w-3/4 md:w-1/2 py-4 px-2 md:py-8 md:px-2 text-sm sm:text-md md:text-lg lg:text-2xl xl:text-2xl font-bold text-blue-500 text-center shadow-lg rounded-3xl border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300">
                                    KITAHACK 2025 CHAMPION
                                </div>
                            </div>

                            {/* Two side-by-side images with top captions */}
                            <div className="col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 min-w-full gap-16 md:gap-4">

                                    {/* First image group */}
                                    <div className="relative flex justify-center group">
                                        <img
                                            src="images/homepage/winnners/first-runnerup.JPG"
                                            className="w-[570px] border-2 border-gray-300  group-hover:border-blue-500 transition-all duration-300 rounded-3xl"
                                            alt=""
                                        />
                                        <div className="absolute bottom-0 translate-x-[-50%] translate-y-1/2 md:bottom-auto md:top-0 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white w-3/4 md:w-4/6 py-4 px-2 md:py-8 md:px-2 text-blue-500 shadow-md rounded-3xl text-center border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300">
                                            <p className={"text-xs md:text-sm"}>1ST RUNNER UP</p>
                                            <h1 className={"text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold"}>Hokkien Mee is Red</h1>

                                        </div>
                                    </div>

                                    {/* Second image group */}
                                    <div className="relative flex justify-center group">
                                        <img
                                            src="images/homepage/winnners/second-runnerup.JPG"
                                            className="w-[570px] border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300 rounded-3xl"
                                            alt=""
                                        />
                                        <div className="absolute bottom-0 translate-x-[-50%] translate-y-1/2 md:bottom-auto  md:top-0 left-1/2  md:-translate-x-1/2 md:-translate-y-1/2 bg-white w-3/4 md:w-4/6 py-4 px-2 md:py-8 md:px-2 text-blue-500 shadow-md rounded-3xl text-center border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300">
                                            <p className={"text-xs md:text-sm"}>2ND RUNNER UP</p>
                                            <h1 className={"text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold"}>The Green Reapers</h1>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom single image */}
                        <div className="flex justify-center relative group">
                            <img
                                src="images/homepage/winnners/speacial-award.JPG"
                                className="w-[570px] border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300 rounded-3xl"
                                alt=""
                            />
                            <div className="absolute bottom-0 translate-x-[-50%] translate-y-1/2 md:bottom-auto md:top-0 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white w-3/4 md:w-1/3 py-4 md:py-8 text-blue-500 shadow-md rounded-3xl text-center border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300">
                                <p className={"text-xs md:text-sm"}>SPECIAL AWARD</p>
                                <h1 className={"text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold"}>KatakHack</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>


        </section >

    )
}
export default KitahackWinnerSection