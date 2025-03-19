"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventShowcaseSection: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-6 px-6 md:px-12 py-12 bg-white dark:bg-[#121212]">
      {/* Left Section: Event Image */}
      <div className="relative w-full md:w-[55%] flex justify-center">
        {/* Event Poster */}
        <div className="relative">
          <Image 
            src="/images/Left-Image.png" 
            alt="Workshop Poster with Speaker" 
            width={900} 
            height={630} 
          />
        </div>
      </div>

      {/* Right Section: Event Details */}
      <div className="w-full md:w-[45%] space-y-4 text-center md:text-left">
        {/* Workshop Label */}
        <div className="flex justify-center md:justify-start">
          <Link href="https://your-workshop-link.com" target="_blank">
            <span className="px-3 py-1 text-sm font-semibold text-purple-700 bg-purple-100 dark:bg-purple-900 dark:text-purple-300 rounded-full">
              @workshop
            </span>
          </Link>
        </div>

        {/* Workshop Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white">
          Google Workspace with Appsheet
        </h2>

        {/* Event Schedule and Agenda */}
        <p className="text-gray-700 dark:text-gray-400 text-base md:text-lg">
          <strong>Date and Time:</strong> 8th March 2025, 10:00am – 12:00pm <br />
          <strong>Agenda:</strong> Introduction to Neural Networks, Introduction to TensorFlow, 
          Computer Vision - Image Recognition, and Image Classification using CNN.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
          {/* RSVP Button */}
          <Link href="https://your-rsvp-link.com" target="_blank">
            <button className="px-6 py-3 text-lg text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
              RSVP Now
            </button>
          </Link>
          {/* View All Workshops Button */}
          <Link href="https://your-all-workshops-link.com" target="_blank">
            <button className="px-6 py-3 text-lg text-blue-600 border border-blue-600 rounded-full shadow-md hover:bg-blue-100 transition dark:text-blue-400 dark:border-blue-400 dark:hover:bg-[#1d1d1d]">
              View All Workshops
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventShowcaseSection;