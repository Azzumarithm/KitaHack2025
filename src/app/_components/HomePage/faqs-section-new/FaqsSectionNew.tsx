// components/FAQsSection.js
"use client";

import { GlobeAltIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section id="faqs-section" className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className=" text-gray-800 lg:text-left px-6 md:px-12 xl:px-40">
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
          <div className="w-full space-y-4 lg:mr-3">
            {faqs.map((faq, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-300 dark:border-gray-800 rounded-xl ">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left p-4 text-lg font-semibold text-[#4285F4]"
                >
                  <p className={"w-5/6"}>
                    {faq.q}
                  </p>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#5A5A5A] text-sm dark:text-gray-400 px-4 mb-4 italic w-5/6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="w-full mt-4 lg:w-2/5 space-y-4 lg:ml-6 lg:mt-0">
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
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default FAQsSectionNew;
