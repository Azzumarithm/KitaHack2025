// components/FAQsSection.js
"use client";

import { GlobeAltIcon } from '@heroicons/react/24/solid';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const FAQsSectionNew = () => {
  const faqs = [
    {
      q: 'Can I participate in KitaHack as a solo team?',
      a: "Yes, you are welcome to participate as a solo team. However, if you're looking for team members, you can join our Discord server link to connect with other participants.",
    },
    {
      q: "I'm a beginner. Can I still participate in KitaHack?",
      a: 'Yes, absolutely! We offer beginner-friendly workshops to help you build your idea.',
    },
    {
      q: 'Who owns the app/solution that my team creates during KitaHack?',
      a: 'Participants will still retain the ownership of the app/solution that you create during KitaHack. However, participants will grant event organizers a non-exclusive royalty-free license to showcase and promote your projects for marketing and educational purposes.',
    },
    {
      q: 'Can I pick a solution outside the scope of AI and SDGs?',
      a: 'While you are welcome to explore any solution ideas, for the purpose of KitaHack 2025 competition, you are required relate your project with at least one of the 17 SDGs with the integration of AI.' 

    },
    {
      q: 'What happens after KitaHack?',
      a: "After KitaHack, you'll have the opportunity to refine and improve your solution for the 2024 Global Solution Challenge.",
    },
    {
      q: 'Can I participate in multiple teams?',
      a: 'No, each student is only allowed to be a part of one submission for KitaHack.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    
  return (
    <section id="faqs-section" className="container px-6 mx-auto">
        <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
            <div className="flex justify-center">
            <span className="bg-purple-100 inline-flex items-center rounded-full  -purple-500 px-3 py-1 text-sm text-purple-700">
                <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                <span className="ml-1">FAQs</span>
            </span>
            </div> 
            
            <div className={"flex flex-col items-center px-12 md:px-12 xl:px-40"}>
            <h1 className="font-semibold text-3xl md:text-5xl xl:text-6xl text-center break-words mt-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Questions
                </span>
            </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-between w-full py-10">

                {/* Left Side */}
                <div className="w-full lg:w-3/4 space-y-4 lg:mr-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 dark:border-gray-800 rounded-xl">
                            <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left p-4 text-lg font-semibold text-[#4285F4]"
                            >
                            {faq.q}
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                            </button>
                            {openIndex === index && (
                            <div>
                                <p className="text-[#5A5A5A] text-sm dark:text-gray-400 px-4 mb-4 italic mr-28">
                                {faq.a}
                                </p>
                            </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Side */}
                <div className="w-full mt-4 lg:w-2/5 space-y-4 lg:ml-6 lg:mt-0">
                    <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-12 text-center">
                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                            <svg className="w-20 h-16 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 2H4a2 2 0 0 0-2 2v20l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
                            </svg>
                        </div>

                        {/* Text */}
                        <p className="text-lg font-semibold text-[#4285F4]">
                            Do you have more questions?
                        </p>
                        <p className="italic text-[#5A5A5A] text-sm dark:text-gray-400 p-2">
                            Have more questions? Reach out to us via email—we're happy to help!
                        </p>

                        {/* Button */}
                        <div className="w-fit mx-auto">
                            <a href="mailto:dscmykita@gmail.com" className="w-64">
                            <span className="mt-5 w-full inline-block px-6 py-3 bg-[#1D68E5] text-white rounded-full text-center">
                                Send an Email!
                            </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </section>
  );
};

export default FAQsSectionNew;
