import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactLink: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        console.log("Component mounted");
        return () => console.log("Component unmounted");
    }, []);

    // Animated triangle positions
    const triangles = [
        { top: "10%", left: "10%", rotate: 0 },
        { top: "20%", right: "15%", rotate: 45 },
        { bottom: "30%", left: "20%", rotate: 180 },
        { top: "40%", right: "10%", rotate: 90 },
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4">
            {triangles.map((triangle, index) => (
                <motion.div
                    key={index}
                    className="absolute w-0 h-0"
                    style={{
                        top: triangle.top,
                        left: triangle.left,
                        right: triangle.right,
                        bottom: triangle.bottom,
                        transform: `rotate(${triangle.rotate}deg)`,
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderBottom: "16px solid rgb(249, 115, 22)", // orange-500
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Main content */}
            <div className="text-center max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Let&apos;s{" "}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        team up and
                    </motion.span>{" "}
                    create something {" "}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="relative"
                    >
                        amazing
                        <motion.div
                            className="absolute -right-6 top-0 w-0 h-0"
                            style={{
                                borderLeft: "6px solid transparent",
                                borderRight: "6px solid transparent",
                                borderBottom: "12px solid rgb(249, 115, 22)", // orange-500
                            }}
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </motion.span>{" "}
                    together
                </motion.h1>
                <Link to="/contact">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <motion.a
                            href="#"
                            className="inline-flex items-center text-white hover:text-orange-500 transition-colors group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            whileHover={{ x: 5 }}
                        >
                            <span className="text-xl">Apply For Meeting</span>
                            <motion.span
                                className="ml-2"
                                animate={{ x: isHovered ? 5 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </motion.span>
                        </motion.a>
                    </motion.div>
                </Link>
            </div>

            {/* Curved line decoration */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0 120C240 120 480 0 720 0C960 0 1200 120 1440 120V120H0V120Z"
                        fill="none"
                        stroke="rgba(249, 115, 22, 0.2)" // orange-500 with opacity
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </motion.div>
        </div>
    );
}
export default ContactLink;