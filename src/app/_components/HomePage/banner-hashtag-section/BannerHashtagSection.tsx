"use client"
import { motion } from "framer-motion";
import React from "react";
import "tailwindcss/tailwind.css";


const hashtags = [" #KitaHack25", "#GDGOnCampus", "#GDGOnCampusMY "];

const Marquee = () => {
    return (
        <div className="relative overflow-hidden w-full bg-blue-500 py-3 ">
            <div className={"[mask-image:linear-gradient(to_right,transparent_5%,black_30%,black_70%,transparent_95%)]"}>

                <div className="flex w-full whitespace-nowrap">
                    <motion.div
                        className="flex space-x-6 w-max"
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                    >
                        {[...hashtags, ...hashtags].map((tag, index) => (
                            <span key={index} className="text-white font-bold text-5xl md:text-7xl italic">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex space-x-6 w-max"
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                    >
                        {[...hashtags, ...hashtags].map((tag, index) => (
                            <span key={index} className="text-white font-bold text-5xl  md:text-7xl italic">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default Marquee;