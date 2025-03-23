"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";

const EventShowcaseSection: React.FC = () => {

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const image =
    (theme || resolvedTheme) !== "dark"
      ? "/images/Left-Image.png"
      : "/images/Left-Image-dark.png";


  return (
    <section className="flex items-center lg:mt-20 z-10">
      <div className="container mx-auto z-10">


        <div className={"flex flex-col-reverse lg:flex-row items-center gap-6 px-12 md:px-12 xl:px-40 py-12"}>

          {/* Left Section: Event Image */}
          <div className="relative w-full md:w-[100%] flex justify-center">
            {/* Event Poster */}
            <div className="relative">
              <Image
                src={image}
                alt="Workshop Poster with Speaker"
                width={900}
                height={630}
              />
            </div>
          </div>

          {/* Right Section: Event Details */}
          <div className="w-full space-y-10 text-center lg:text-left">
            {/* Workshop Label */}
            <span className="bg-purple-100 inline-flex items-center rounded-full border border-purple-500 px-3 py-1 text-sm text-purple-700">
              <GlobeAltIcon className="h-4 w-4 text-purple-500" />
              <span className="ml-1">Workshop</span>
            </span>

            {/* Workshop Title */}
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Google Workspace with Appsheet</span>
            </h2>

            {/* Event Schedule and Agenda */}
            <p className="text-gray-700 dark:text-gray-400 text-base md:text-lg">
              <strong>Date and Time:</strong> 8th March 2025, 10:00am – 12:00pm <br />
              <strong>Agenda:</strong> Introduction to Neural Networks, Introduction to TensorFlow,
              Computer Vision - Image Recognition, and Image Classification using CNN.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center lg:justify-start mt-6">
              {/* View All Workshops Button */}
              <button className="px-12 py-3 text-lg text-blue-600 border border-blue-600 rounded-full shadow-md bg-transparent hover:bg-blue-600 hover:text-white transition dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-600 dark:hover:text-white">
                <Link href="https://your-all-workshops-link.com" target="_blank" className="md:text-md lg:text-lg">
                  RSVP NOW
                </Link>
              </button>

              <button className="px-12 py-3 text-lg text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
                <Link href="https://your-rsvp-link.com" target="_blank" className={" md:text-md lg:text-lg"}>
                  Review All Workshop
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventShowcaseSection;