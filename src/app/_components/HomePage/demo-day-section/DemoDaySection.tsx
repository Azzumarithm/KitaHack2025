"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const demoMarqueeImages = [
    "/images/homepage/demoDay/demo-1.png",
    "/images/homepage/demoDay/demo-2.png",
    "/images/homepage/demoDay/demo-3.png",
    "/images/homepage/demoDay/demo-4.png",
    "/images/homepage/demoDay/demo-5.png",
    "/images/homepage/demoDay/demo-6.png",
    "/images/homepage/demoDay/demo-7.png",
    "/images/homepage/demoDay/demo-8.png",
];

const DemoDaySection = () => {
    return (

        <motion.div
            id="demo-day"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="relative h-max">
            {/* Background with mask image */}
            <div className="absolute inset-0 z-0 bg-[url('/images/homepage/demoDay/Map-Background.png')] bg-cover bg-center [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%,transparent_100%)] pointer-events-none" />

            {/* Foreground Content */}
            <div className="relative z-10">
                {/* Part 1 */}
                <div className="flex flex-col justify-center items-center text-center gap-4 mb-24">
                    <div className="space-y-6 p-6 md:px-12 xl:px-52">
                        {/* Badge */}
                        <span
                            id="demo-day-section"
                            className="bg-[#F6F3FF] inline-flex items-center rounded-full border border-[#7C3AED] px-3 py-1 text-sm text-purple-700"
                        >
                            <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                            <span className="ml-1">demo-day</span>
                        </span>

                        {/* Title */}
                        <h1
                            id="demo-day_title"
                            className="font-semibold text-3xl text-black md:text-5xl xl:text-6xl dark:text-white"
                        >
                            <span className="bg-gradient-to-r from-[#FF3998] to-[#116BFF] bg-clip-text text-transparent">
                                Demo Day
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="max-w-2xl lg:mb-8">
                            <i className="text-[#5A5A5A] dark:text-gray-400">
                                The culmination of innovation, collaboration, and creativity.
                                After an intense period of developing, learning, and building.
                            </i>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 items-center sm:flex-row sm:space-x-4 justify-center lg:justify-start">
                        <a
                            id="knowMoreButton"
                            href="https://waze.com/ul/hw281rvzw9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-center inline-block px-7 py-3 text-[#1D68E5] border border-[#1D68E5] rounded-full hover:bg-[#1D68E5] hover:text-white transition">
                                Open Waze
                            </span>
                        </a>
                        <a
                            id="registerButton"
                            href="/images/demo-day/demoDay.ics"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-center inline-block px-7 py-3 bg-gradient-to-r from-[#FF3998] to-[#116BFF] text-white border-gray-100/10 rounded-full">
                                Save The Date
                            </span>
                        </a>
                    </div>
                </div>

                {/* for md screen */}
                <div className={"hidden md:block lg:hidden"}>

                    <div className="flex relative items-center justify-center pt-25">
                        {/* Glow effect behind the phone */}
                        <div className="absolute lg:block w-[210px] h-[420px] bg-white blur-xl opacity-50 z-20" />

                        {/* Phone image */}
                        <Image
                            src="/images/homepage/demoDay/phone-demo.png"
                            width={200}
                            height={300}
                            alt="phone-demo"
                            className="relative z-30"
                        />
                    </div>
                </div>


                {/* Marquee & Phone for web screen*/}
                <div className="hidden md:flex items-center justify-center h-[500px] lg:h-[650px] relative overflow-hidden">
                    {/* Phone image */}
                    <div className="relative flex items-center justify-center min-h-screen">
                        {/* Glow effect behind the phone */}
                        <div className="absolute hidden lg:block w-[240px] h-[460px] bg-white blur-xl opacity-50 z-20" />

                        {/* Phone image */}
                        <Image
                            src="/images/homepage/demoDay/phone-demo.png"
                            width={250}
                            height={500}
                            alt="phone-demo"
                            className="relative z-30 hidden lg:block"
                        />
                    </div>

                    {/* Marquee */}
                    <div className="absolute z-10 w-full">
                        <div className="flex">
                            {/* First loop */}
                            <motion.div
                                initial={{ x: "0%" }}
                                animate={{ x: "-100%" }}
                                transition={{
                                    duration: 60,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="flex flex-shrink-0"
                            >
                                {demoMarqueeImages.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={`demo-${index}`}
                                        width={300}
                                        height={300}
                                        className="h-[300px] w-auto pr-10"
                                    />
                                ))}
                            </motion.div>

                            {/* Second loop */}
                            <motion.div
                                initial={{ x: "0%" }}
                                animate={{ x: "-100%" }}
                                transition={{
                                    duration: 60,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="flex flex-shrink-0"
                            >
                                {demoMarqueeImages.map((image, index) => (
                                    <Image
                                        key={index + 100}
                                        src={image}
                                        alt={`demo-${index}-copy`}
                                        width={300}
                                        height={300}
                                        className="h-[300px] w-auto pr-10"
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>


                {/* Marquee & Phone for mobile screen*/}
                <div className={"block md:hidden mb-10 "}>
                    <div className="relative flex items-center justify-center mb-20">
                        {/* Glow effect behind the phone */}
                        <div className="absolute lg:block w-[210px] h-[420px] bg-white blur-xl opacity-50 z-20" />

                        {/* Phone image */}
                        <Image
                            src="/images/homepage/demoDay/phone-demo.png"
                            width={200}
                            height={300}
                            alt="phone-demo"
                            className="relative z-30"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 px-4">
                        <img
                            src="/images/homepage/demoDay/demo-3.png"
                            alt="phone-demo"
                            className="relative z-30 w-[160px] sm:w-[250px]"
                        />
                        <img
                            src="/images/homepage/demoDay/demo-5.png"
                            alt="phone-demo"
                            className="relative z-30 w-[160px] sm:w-[250px]"
                        />
                    </div>

                </div>





                {/* Part 3 - Venue, Agenda, Time */}
                <div className="space-y-6 p-6 md:px-12 xl:px-52">
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-4 text-center">
                        {/* Venue */}
                        <div className="space-y-3 flex flex-col items-center text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src="images/demo-day/venue.svg"
                                    alt="venue-icon"
                                    className="w-[91px] h-[89px]"
                                />
                            </div>
                            <p className="text-gray-600 text-sm md:text-base dark:text-gray-400">
                                <i>
                                    Monash University Malaysia <br />Jalan Lagoon Selatan 47500, Bandar Sunway, <br /> Selangor, Malaysia
                                </i>
                            </p>
                        </div>

                        {/* Agenda */}
                        <div className="space-y-3 flex flex-col items-center text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src="images/demo-day/agenda.svg"
                                    alt="agenda-icon"
                                    className="w-[91px] h-[89px]"
                                />
                            </div>
                            <p className="text-gray-600 text-sm md:text-base dark:text-gray-400">
                                <i>Pitching, Closing Ceremony, and More!</i>
                            </p>
                        </div>

                        {/* Time */}
                        <div className="space-y-3 flex flex-col items-center text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src="images/demo-day/time.svg"
                                    alt="time-icon"
                                    className="w-[91px] h-[89px]"
                                />
                            </div>
                            <p className="text-gray-600 text-sm md:text-base dark:text-gray-400">
                                <i>Sunday, May 4, 2025 <br />10:00 AM – 3:00 PM (MYT)</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DemoDaySection;
