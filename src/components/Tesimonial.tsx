import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { testimonials } from "../utils/constant";



const Testimonial:React.FC = () => {
    return (
        <section className="bg-black body-font mt-[-16]">
            <div className="container px-3 py-24 mx-auto">
                <h1 className="flex justify-center font-bold tracking-wider text-lg lg:text-3xl mb-4 text-white">
                    What {""} <span className=" mx-2 text-orange-500"> clients</span> {""} say?
                </h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-orange-500 mb-5 inline-flex" />
                </div>
                <div className="flex flex-wrap -m-4 rounded-md mb-5">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[350px] h-[25rem] p-4 mx-auto group relative 
                transition-all duration-300 ease-in-out transform hover:scale-105
                hover:shadow-2xl rounded-xl
                before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent 
                before:to-orange-500/5 before:rounded-xl before:opacity-0 before:transition-opacity 
                before:duration-300 hover:before:opacity-100"
                        >


                            <div className="h-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl 
                border border-gray-800 transition-all duration-300 
                hover:border-orange-500/20 relative z-10
                shadow-lg shadow-black/20 hover:shadow-orange-500/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className=" w-7 h-6 top-3 right-3 text-orange-500 mb-8"
                                    viewBox="0 0 975.036 975.036"
                                >
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                    </path>
                                </svg>
                                {/* Star Rating */}
                                <div className="flex text-orange-500 items-center mb-4 transition-transform duration-300 group-hover:scale-110">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="transition-all duration-300 hover:scale-125">
                                            {i < testimonial.rating ? (
                                                <span>
                                                    <Icon icon="ic:round-star" width="21" height="21" />
                                                </span>
                                            ) : (
                                                <span className="text-gray-700">
                                                    <Icon icon="mynaui:star" width="20" height="20" />
                                                </span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                                <p className="leading-relaxed mb-6 text-gray-300 text-sm sm:text-base
                  transition-all duration-300 group-hover:text-white">
                                    {testimonial.text}
                                </p>
                                <div className="inline-flex items-center transition-transform duration-300 group-hover:translate-y-[-4px]">
                                    <img
                                        alt="testimonial"
                                        src={testimonial.imgSrc}
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center
                      transition-transform duration-300 group-hover:scale-110 
                      ring-2 ring-orange-500 group-hover:ring-orange-500"
                                        loading="lazy"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white transition-colors duration-300 
                      group-hover:text-orange-500">

                                            {testimonial.name}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase tracking-wider group-hover:text-gray-400">
                                            {testimonial.role}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
