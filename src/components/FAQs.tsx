import { useState } from "react";
import { faqs } from "../utils/constant";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-auto mx-auto px-4 py-12 bg-gradient-to-b from-black to-gray-900 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-16 text-white relative">
                Frequently <span className="text-orange-500">Asked</span> Questions
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`group border-l-4 border-orange-500/40 rounded-lg overflow-hidden bg-black/40 hover:bg-black/60 
            transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-orange-500/10 
            ${openIndex === index ? "border-l-orange-500" : "hover:border-l-orange-500/60"}`}
                    >
                        <button
                            type="button"
                            className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-content-${index}`}
                        >
                            <div className="flex justify-between items-center group " >
                                <span className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                                    {faq.question}
                                </span>
                                <span
                                    className={`ml-4 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center 
                  transition-all duration-500 transform group-hover:scale-110 
                  ${openIndex === index ? "bg-orange-500 rotate-180" : ""}`}
                                >
                                    <svg
                                        className={`w-5 h-5 transition-all duration-500 
                    ${openIndex === index ? "text-white" : "text-orange-500"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </button>

                        <div
                            id={`accordion-content-${index}`}
                            role="region"
                            aria-labelledby={`accordion-button-${index}`}
                            className={`transition-all duration-500 ease-in-out 
              ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
              overflow-hidden`}
                        >
                            <div className="p-6 pt-0">
                                <p className="text-gray-300">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
