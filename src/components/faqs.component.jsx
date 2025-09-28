"use client";
import React, { useState } from "react";

export default function Faqs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-4 text-left cursor-pointer"
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="p-4 border-t border-gray-200 text-gray-600">
                        {faq.answer}
                    </div>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
