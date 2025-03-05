import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedComponent from "./AnimatedComponent";

const Hero = () => {
  const imageUrl = "/Xsuite-Final.webp";

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = imageUrl;

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [imageUrl]);

  return (
    <div className="relative w-full  h-[60vh]  lg:h-[100vh] overflow-hidden">
      <AnimatedComponent />

      {/* Social Media Icons */}
      <div className="absolute  right-6 top-1/2 transform -translate-y-1/2 hidden flex-col  my-5 space-y-10 z-50 lg:flex ">
        <a
          href="https://www.facebook.com/profile.php?id=61566739650180"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook profile"
        >
          <img
            src="/fb11-min.webp"
            className="h-auto w-4 p-1 hover:text-orange-500 text-white"
            alt="Visit our Facebook profile"
            width="50"
            height="50"
          />
        </a>
        <a
          href="https://www.instagram.com/xsuite.digital/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram profile"
        >
          <img
            src="/instaram-icon.webp"
            className="h-6 w-6 p-1 hover:text-orange-500 text-white"
            alt="Visit our Instagram profile"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/xsuite-digital/about/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn profile"
        >
          <img
            src="/inn-min.webp"
            className="h-8 w-7 p-1 hover:text-orange-500 text-white "
            alt="Visit our LinkedIn page"
          />
        </a>
      </div>

      {/* Hero Section Content */}
      <div className="absolute inset-0  w-full h-auto z-10 flex flex-col justify-center items-center ">
        <motion.img
          src={imageUrl}
          alt="Hero Image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-[300px] sm:max-w-[700px] mr-8 lg:mr-0 md:max-w-[400px] lg:max-w-[850px] mb-6"
        />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" "
        >
          <div className="flex flex-col  items-center  justify-center ">
            <h1 className="text-orange-500  text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-normal font-extrabold text-center sm:text-left">
              <span className="text-white    ">
                Crafting Digital Brilliance&apos;in{" "}
              </span>
              <br />

              <TypeAnimation
                sequence={[
                  "Digital Marketing",
                  1000,
                  "Google Ads",
                  1000,
                  "PPC Campaigns",
                  1000,
                  "Social Media Marketing",
                  1000,
                  "Web Development",
                  1000,
                  "Graphic Design",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="  "
              />
            </h1>
          </div>
        </motion.div>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-6"
        >
          <Link
            to="/Contact"
            className="px-8 py-3 rounded-full border-2  border-orange-500 text-orange-500 mr-5 hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out"
            aria-label="Get Started on WhatsApp"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
