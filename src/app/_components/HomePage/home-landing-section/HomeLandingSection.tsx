"use client";

import Image from "next/image";
import "./style.css";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"



const HomeLandingSection = () => {

    // const { theme } = useTheme();

    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);



    // const universitylogo =
    //     (theme || resolvedTheme) === "dark"
    //         ? "/images/homepage/sdgAI/Pattern-BG-dark.svg"
    //         : "/images/homepage/sdgAI/Pattern-BG.svg";

    const universityLogos = [
        {
            name: "APU",
            link: "https://gdg.community.dev/gdg-on-campus-asia-pacific-university-of-technology-innovation-kuala-lumpur-malaysia/",
            logos: {
                light: "/images/university-logos/APU.svg",
                dark: "/images/university-logos/APU-dark.svg"
            }
        },
        {
            name: "IIUM",
            link: "https://gdg.community.dev/gdg-on-campus-international-islamic-university-malaysia-selangor-malaysia/",
            logos: {
                light: "/images/university-logos/IIUM.svg",
                dark: "/images/university-logos/IIUM-dark.svg"
            }
        },
        {
            name: "MMU",
            link: "https://gdg.community.dev/gdg-on-campus-multimedia-university-selangor-malaysia/",
            logos: {
                light: "/images/university-logos/MMU.svg",
                dark: "/images/university-logos/MMU-dark.svg"
            }
        },
        {
            name: "MUM",
            link: "https://gdg.community.dev/gdg-on-campus-monash-university-malaysia-selangor-malaysia/",
            logos: {
                light: "/images/university-logos/MUM.svg",
                dark: "/images/university-logos/MUM-dark.svg"
            }
        },
        {
            name: "SUM",
            link: "https://gdg.community.dev/gdg-on-campus-sunway-university-selangor-malaysia/",
            logos: {
                light: "/images/university-logos/SUM.svg",
                dark: "/images/university-logos/SUM-dark.svg"
            }
        },
        {
            name: "tarumt",
            link: "https://gdg.community.dev/gdg-on-campus-tunku-abdul-rahman-university-of-management-and-technology-kuala-lumpur-malaysia/",
            logos: {
                light: "/images/university-logos/tarumt.svg",
                dark: "/images/university-logos/tarumt-dark.svg"
            }
        },
        {
            name: "UM",
            link: "https://gdg.community.dev/gdg-on-campus-universiti-malaya-kuala-lumpur-malaysia/",
            logos: {
                light: "/images/university-logos/UM.svg",
                dark: "/images/university-logos/UM-dark.svg"
            }
        },
        {
            name: "UPM",
            link: "https://gdg.community.dev/gdg-on-campus-universiti-putra-malaysia-selangor-malaysia/",
            logos: {
                light: "/images/university-logos/UPM.svg",
                dark: "/images/university-logos/UPM-dark.svg"
            }
        },
        {
            name: "USM",
            link: "https://gdg.community.dev/gdg-on-campus-universiti-sains-malaysia-penang-malaysia/",
            logos: {
                light: "/images/university-logos/USM.svg",
                dark: "/images/university-logos/USM-dark.svg"
            }
        },
        {
            name: "UTM",
            link: "https://gdg.community.dev/gdg-on-campus-universiti-teknologi-malaysia-johor-bahru-malaysia/",
            logos: {
                light: "/images/university-logos/UTM.svg",
                dark: "/images/university-logos/UTM-dark.svg"
            }
        }
    ];

    const sponsorsLogo = [
        {
            name: "CIMB",
            logos: {
                light: "/images/sponsors/CIMB-red.png",
                dark: "/images/sponsors/CIMB-white.png"
            }
        },
        {
            name: "SEEK",
            logos: {
                light: "/images/sponsors/SEEK-light.png",
                dark: "/images/sponsors/SEEK-dark.png"
            }
        },
        {
            name: "Cradle",
            logos: {
                light: "/images/sponsors/Cradle.jpg",
                dark: "/images/sponsors/Cradle.jpg"
            }
        },
        {
            name: "GDG Cloud",
            logos: {
                light: "/images/sponsors/gdg-cloud.png",
                dark: "/images/sponsors/gdg-cloud.png"
            }
        },
        {
            name: "GDG KL",
            logos: {
                light: "/images/sponsors/gdgkl-light.png",
                dark: "/images/sponsors/gdgkl-dark.png"
            }
        },
        {
            name: "ZUS Coffee",
            logos: {
                light: "/images/sponsors/ZUS.png",
                dark: "/images/sponsors/ZUS.png"
            }
        },
        {
            name: "Malaysiakini",
            logos: {
                light: "/images/sponsors/malaysiakini.png",
                dark: "/images/sponsors/malaysiakini.png"
            }
        }
    ];

    const imageSlideShow = [
        "/images/slideshow/Copy_of_IMG_1773.JPG",
        "/images/slideshow/Copy_of_IMG_1786.JPG",
        "/images/slideshow/IMG_0820.JPG",
        "/images/slideshow/IMG_1796.JPG",
        "/images/slideshow/IMG_1809.JPG",
        "/images/slideshow/IMG_1819.JPG",
        "/images/slideshow/IMG_1885.JPG",
        "/images/slideshow/IMG_4899.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlideShow.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    if (!mounted) return null;
    return (
        <section className="flex items-center lg:mt-20 z-10">
            <motion.div
                id="hero"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="container mx-auto z-10">

                <div className="text-center text-gray-800 px-6 md:px-12 xl:px-40 lg:text-left">

                    {/* Grid Layout */}
                    <div className="grid items-center gap-12 lg:grid-cols-2" id="sponsors">
                        <div className="mt-12 lg:mt-0">
                            {/* Component Badge */}
                            <span className="bg-purple-100 inline-flex items-center rounded-full border border-purple-500 px-3 py-1 text-sm text-purple-700">
                                <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                                <span className="ml-1">KitaHack2025</span>
                            </span>
                            {/* Header and Paragraph */}
                            <h1 id="hero_title" className="font-semibold mt-3 mb-6 text-5xl text-black md:text-6xl xl:text-6xl dark:text-white">
                                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Innovate</span>, <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Build</span> and <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Compete!</span>
                            </h1>
                            <p className="max-w-2xl mb-6 font-normal text-gray-700 dark:text-gray-400 lg:mb-8">
                                <strong><em>GDGoC KitaHack 2025</em></strong> is
                                the ultimate hackathon for developers, designers, and tech enthusiasts. Compete, collaborate, and create innovative
                                solutions. <span className="underline"><a href="">Explore Google's latest AI tools</a></span> through hands-on workshops,
                                inspiring sessions, and more.
                            </p>
                            {/* Buttons */}
                            <div className="flex flex-col gap-5 items-center sm:flex-row sm:space-x-4 justify-center lg:justify-start">
                                <a id="knowMoreButton" href="/#kitahack-info">
                                    <span className="text-center inline-block px-7 py-3 text-[#1D68E5] border border-[#1D68E5] rounded-full">
                                        Know More
                                        <Icon icon="mdi:wand" className="inline-block h-6 w-6 ml-2" />
                                    </span>
                                </a>
                                <a id="registerButton" href="" target="_blank" rel="noopener noreferrer">
                                    <span className="text-center inline-block px-7 py-3 bg-gray-200/80 text-gray-400 dark:bg-gray-100/5 dark:text-gray-500 border-gray-100/10 rounded-full">
                                        Submit Prototype
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* Pictures */}
                        <div className="mb-12 lg:mb-0 relative w-full lg:max-w-[456px] aspect-[3/2] overflow-hidden rounded-xl shadow-2xl justify-self-end">
                            <img
                                src={imageSlideShow[currentIndex]}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* University Logos */}
                    <div className="relative bg-[#FCFBFD] mt-24 p-8 rounded-2xl dark:bg-[#1A1A1A]">
                        <div className="w-full space-x-10 overflow-x-auto no-scrollbar scroll-smooth snap-x">
                            <div className="flex space-x-1 min-w-max w-full animate-scroll">
                                {[...Array(2)].map((_, i) => (
                                    universityLogos.map((uni) => (
                                        <>
                                            <a key={`${uni.name}-${i}`} href={uni.link} target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                                <Image src={(theme || resolvedTheme) === "dark" ? uni.logos.dark : uni.logos.light}
                                                    alt={uni.name}
                                                    width={300}
                                                    height={100}
                                                    className="opacity-50 hover:opacity-100"
                                                />
                                            </a>
                                        </>
                                    ))
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sponsor Logos */}
                    <div className="relative bg-[#FCFBFD] mt-8 p-8 rounded-2xl dark:bg-[#1A1A1A]" id={"sponsor"}>
                        <div className="w-full space-x-10 overflow-x-auto no-scrollbar scroll-smooth snap-x">
                            <div className="flex space-x-1 min-w-max w-full animate-scroll-reverse">
                            {[...Array(2)].map((_, i) =>
                                sponsorsLogo.map((sps) => {
                                const isSpecial = sps.name === "GDG Cloud"; // <- change name accordingly

                                return (
                                    <a key={`${sps.name}-${i}`} className="snap-center flex items-center">
                                        <Image src={(theme || resolvedTheme) === "dark" ? sps.logos.dark : sps.logos.light}
                                            alt={sps.name}
                                            width={300}
                                            height={100}
                                            className={
                                            isSpecial
                                                ? "h-20 w-auto object-contain opacity-100"
                                                : "max-h-20 max-w-[230px] object-contain opacity-100"
                                            }
                                        />
                                    </a>
                                );
                                })
                            )}
                            </div>
                        </div>
                    </div>

                    {/* JavaScript for manual scrolling */}
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        (function() {
                        const scrollContainer = document.getElementById('scrollContainer');
                        const scrollContent = document.getElementById('scrollContent');
                        let timeout;

                        // Pause animation when scrolling manually
                        scrollContainer.addEventListener('scroll', () => {
                            scrollContent.classList.add('paused');
                            clearTimeout(timeout);

                            // Resume after 3s of inactivity
                            timeout = setTimeout(() => {
                            scrollContent.classList.remove('paused');
                            }, 1000);
                        });
                        })();
                    `}} />
                </div>
            </motion.div>
        </section>
    );
};

export default HomeLandingSection;
