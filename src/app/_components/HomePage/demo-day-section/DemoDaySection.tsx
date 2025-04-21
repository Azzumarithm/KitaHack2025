"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DemoDaySection = () => {
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

    

    return (
        <div className="bg-[url('/images/homepage/demoDay/Map-Background.png')] bg-cover bg-center h-[650px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]">
            <div className="flex items-center justify-center h-[650px] relative overflow-hidden">

                {/* Phone image in the center */}
                <div className="flex items-center justify-center absolute z-20">
                    
                    <Image
                        src="/images/homepage/demoDay/phone-demo.png"
                        width={250}
                        height={250}
                        alt="phone-demo"
                        className={"hidden lg:block"}
                    />
                </div>

                {/* Marquee effect */}
                <div className="absolute z-10 w-full">
                    {/* Upper Marquee */}
                    <div className="flex MyGradient">
                        {/* First Motion Div for seamless scrolling */}
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="flex flex-shrink-0"
                        >
                            {demoMarqueeImages.map((image, index) => (
                                <img className="h-[300px] pr-10" src={image} key={index} />
                            ))}
                        </motion.div>

                        {/* Second Motion Div to make it loop seamlessly */}
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="flex flex-shrink-0"
                        >
                            {demoMarqueeImages.map((image, index) => (
                                <img className="h-[300px] pr-10" src={image} key={index} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoDaySection;
