"use client";

import { GlobeAltIcon } from "@heroicons/react/24/solid";

import Image from "next/image";

import { motion } from "framer-motion"



const TeamFormationSection = () => {
    return (
        <section id="team-formation" className="flex justify-center items-center lg:mt-20 z-10 min-w-full ">
            <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >



                <div className="container mx-auto z-10">
                    <div className="flex justify-center">
                        <span className="bg-purple-100 inline-flex items-center rounded-full  -purple-500 px-3 py-1 text-sm text-purple-700">
                            <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                            <span className="ml-1">Team Formation</span>
                        </span>
                    </div>

                    <div className={"flex flex-col items-center px-12 md:px-12 xl:px-40"}>
                        <h1
                            id="team_section"
                            className="font-semibold text-3xl md:text-5xl xl:text-6xl text-center break-words mt-5 text-black dark:text-white"
                        >
                            Build Your Own <br />
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                Dream Team
                            </span>
                        </h1>

                        <p className={"text-center mt-5 text-[#5A5A5A] dark:text-gray-400 lg:w-3/5 italic"}>
                            Collaborate with diverse talents to create something amazing— find your perfect team and bring your ideas to life!
                        </p>
                    </div>



                    <div className={"flex justify-center px-6 md:px-0 xl:px-4"}>


                        <div className="w-full pt-8 ">

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false }}
                            >

                                <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-[0fr_1fr_1fr_0fr]">
                                    <div className="p-2  flex justify-center">
                                        <Image src={"/images/homepage/teamFormation/teampic.png"} width={400} height={400} className={"block lg:hidden"} alt={"team pic"} />
                                    </div>
                                    <div className="lg:px-20  py-2 ">
                                        <div className={"grid grid-cols-[auto_1fr] gap-2"}>
                                            <Image src={"/images/homepage/teamFormation/numMembers.svg"} width={60} height={60} alt={"team pic"} />

                                            <div className={"mt-3"}>
                                                <h1 className={"text-blue-500 font-semibold"}>NUMBER OF MEMBERS</h1>
                                                <p className={"text-gray-400"}>A team can have only up to <span className={"text-blue-500"}>4 members in a team</span>. Please note that only one entry per person which means that you can only join one team.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:px-20  py-2 ">
                                        <div className={"grid grid-cols-[auto_1fr] gap-2"}>
                                            <Image src={"/images/homepage/teamFormation/magGlass.svg"} width={60} height={60} alt={"team pic"} />

                                            <div className={"mt-3"}>
                                                <h1 className={"text-blue-500 font-semibold"}>HOW TO FIND TEAM MEMBERS?</h1>
                                                <p className={"text-gray-400"}>You can invite your friends to join KitaHack with you. Alternatively, you can also join our Discord server to find team members.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2  hidden lg:block"></div>

                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false }}
                            >

                                <div className="grid grid-cols-1 gap-4 pt-4 lg:pt-0 lg:gap-0 lg:grid-cols-3">
                                    <div className=" py-2 lg:p-2 col-span-1 lg:pt-16">
                                        <div className={"grid grid-cols-[auto_1fr] gap-2"}>
                                            <Image src={"/images/homepage/teamFormation/doc.svg"} width={60} height={60} alt={"team pic"} />

                                            <div className={"mt-3"}>
                                                <h1 className={"text-blue-500 font-semibold"}>TEAM MEMBERS BACKGROUND</h1>
                                                <p className={"text-gray-400"}>You can have members from any academic background (undergraduate, graduate, art, science backgrounds). However, we encourage you to have members from different backgrounds to ensure that your team can work together effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-span-1 hidden lg:block justify-items-center">
                                        <Image src={"/images/homepage/teamFormation/teampic.png"} width={400} height={400} className={"hidden lg:block"} alt={"team pic"} />
                                    </div>
                                    <div className=" py-2 lg:p-2 col-span-1 lg:pt-16">
                                        <div className={"grid grid-cols-[auto_1fr] gap-2"}>
                                            <Image src={"/images/homepage/teamFormation/pencil.svg"} width={60} height={60} alt={"team pic"} />

                                            <div className={"mt-3"}>
                                                <h1 className={"text-blue-500 font-semibold"}>TEAM MEMBER ROLES</h1>
                                                <div className="text-gray-400">
                                                    <p>Here is a simple guideline for you when forming a team:</p>
                                                    <ul className="list-disc list-inside mt-2">
                                                        <li>Need to be part of GDGoC</li>
                                                        <li>Project Manager (Team Leader)</li>
                                                        <li>UI/UX Designer</li>
                                                        <li>Frontend Developer</li>
                                                        <li>Backend Developer</li>
                                                        <li>Problem Domain Experts</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>


                        </div>
                    </div>

                </div>
            </motion.div>
        </section>

    )
}
export default TeamFormationSection