import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About:React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setCursorHovered(true);
    const handleMouseLeave = () => setCursorHovered(false);

    const interactiveElements = document.querySelectorAll("button, a");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden px-4 py-12 md:py-24">
      <section className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <header className="space-y-8">


            <motion.h1 className="text-4xl  font-bold leading-tight" variants={itemVariants}>
              Xsuite Digital Marketing Agency
              <br />
            </motion.h1>
            <p className="text-orange-500">Unlocking Success with Creative Marketing Strategies</p>

            <motion.p className="text-gray-400 text-lg" variants={itemVariants}>
              Xsuite Digital is a top-level marketing service provider, specializing in web development, search engine optimization, pay-per-click campaigns, and social media management. With a team of enthusiastic digital marketing experts, our creative agency optimizes your online presence with Google My Business, Google Analytics, and Google Search Console. Whether you require SEO or graphic designing for social media platforms, our digital marketing services can help you in the marketplace for your business advancements. Furthermore, Xsuite Digital is a trustworthy service-providing agency, helping you fulfill your digital requirements with the expertise of digital strategists.
            </motion.p>


            <motion.div className="flex border-l-2 border-orange-500 p-2 items-center gap-4" variants={itemVariants}>
              <motion.span
                className="text-6xl font-bold text-orange-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10
              </motion.span>
              <div className="text-gray-400">
                Year
                <br />
                <span className="font-bold text-xl text-white">Experience</span>
              </div>
            </motion.div>
            <motion.h2 className="inline-block text-orange-500 font-medium" variants={itemVariants}>
              Our Services
            </motion.h2>

            <motion.ul className="space-y-3" variants={containerVariants}>
              {["Web Development", "Google Ads", "PPC Campaigns", "Graphic Designing", "Digital Marketing"].map((service, index) => (
                <motion.li key={index} className="flex items-center gap-2" variants={itemVariants}>
                  <motion.span
                    className="text-orange-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    aria-hidden="true"
                  >
                    ✓
                  </motion.span>
                  {service}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-16 mb-8"> {/* Adjust the margin as needed */}
              <Link
                className="text-white px-4 py-2 rounded-full bg-transparent border-2 border-orange-500 hover:scale-110 transition ease-in-out duration-300 hover:bg-orange-500 "
                to="/Services"
              >
                Explore More
              </Link>
            </div>
          </header>

          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="absolute inset-0 border-4 bg-orange-500 border-orange-500 rounded-3xl"
              animate={{ rotate: [0, 5, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/xdigital.webp"
                alt="Team working together"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        className="fixed w-12 h-12 rounded-full border-2 border-orange-500 pointer-events-none"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: cursorHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        aria-hidden="true"
      />
    </div>
  );
}

export default About;