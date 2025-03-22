"use client";

import Image from "next/image";
import "./style.css";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const HomeLandingSection = () => {

    const { theme } = useTheme();
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

    const imageSlideShow = [
        "/images/slideshow/Copy of IMG_1773.JPG",
        "/images/slideshow/Copy of IMG_1786.JPG",
        "/images/slideshow/IMG_0820.JPG",
        "/images/slideshow/IMG_1796.JPG",
        "/images/slideshow/IMG_1809.JPG",
        "/images/slideshow/IMG_1819.JPG",
        "/images/slideshow/IMG_1885.JPG",
        "/images/slideshow/IMG_4899.HEIC",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlideShow.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <section className="flex items-center lg:mt-20 z-10">
            <div className="container mx-auto z-10">

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
                                Innovate, Build and Compete!
                            </h1>
                            <p className="max-w-2xl mb-6 font-normal text-gray-700 dark:text-gray-400 lg:mb-8">
                                <strong><em>GDGoC KitaHack 2025</em></strong> is
                                the ultimate hackathon for developers, designers, and tech enthusiasts. Compete, collaborate, and create innovative
                                solutions. <span className="underline"><a href="">Explore Google's latest AI tools</a></span> through hands-on workshops,
                                inspiring sessions, and more.
                            </p>
                            {/* Buttons */}
                            <div className="flex space-x-4 justify-center lg:justify-start">
                                <a id="knowMoreButton" href="/#kitahack-info">
                                    <span className="text-center inline-block w-44 px-7 py-3 text-[#1D68E5] border border-[#1D68E5] rounded-full">
                                        Know More
                                        <Icon icon="mdi:wand" className="inline-block h-6 w-6 ml-2" />
                                    </span>
                                </a>
                                <a id="registerButton" href="https://docs.google.com/forms/d/e/1FAIpQLSeDYPVS5cLgbcmZulvzG-ElgBJJGd94WIdtpZP56IfOwp1F6Q/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                                    <span className="text-center inline-block w-40 px-7 py-3 bg-[#1D68E5] text-white rounded-full">
                                        Register Now
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* Pictures */}
                        <div className="mb-12 lg:mb-0 relative w-full lg:max-w-[456px] aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
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
                                                <Image src={theme === "dark" ? uni.logos.dark : uni.logos.light}
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
            </div>
        </section>
    );
};

export default HomeLandingSection;
