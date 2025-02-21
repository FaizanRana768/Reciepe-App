import { motion } from "framer-motion";
import Siderbar from "./Siderbar";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js"; 

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-black");
    } else {
      setBgColor("bg-transparent");
    }
  };

  const location = useLocation();

  const ScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className={` ${bgColor} duration-500 fixed top-0 z-50 w-full ease-in-out`}>
      <>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-between items-center p-4 bg-transparent"
        >
          <div style={{ width: "100px", height: "50px" }}>
            <Link to="/" aria-label="Go to homepage">
              <img
                onClick={ScrollToTop}
                src="/Xsuitelogo.webp"
                className="w-full h-auto "
                alt="Xsuite logo image"
                height="50"
                width="100"
              />
            </Link>
          </div>

          <div>
            <ul className="flex space-x-10">
              <li className="text-white hover:text-orange-500 transition duration-300 ease-in-out">
                <Link onClick={ScrollToTop} to="/">
                  Home
                </Link>
              </li>
              <li className="text-white hover:text-orange-500 transition duration-300 ease-in-out">
                <Link to="/Services">Services</Link>
              </li>
              <li className="text-white hover:text-orange-500 transition duration-300 ease-in-out">
                <Link to="/About">About Us</Link>
              </li>
              <li className="text-white hover:text-orange-500 transition duration-300 ease-in-out">
                <Link to="/PackageDetails">Packages</Link>
              </li>
              <li className="text-white hover:text-orange-500 transition duration-300 ease-in-out">
                <Link to="/Portfolio">Portfolio</Link>
              </li>
              <li className="text-white hover:text-orange-500 transition duration-300 ease-in-out">
                <Link to="/Contact">Contact</Link>
              </li>
              
            </ul>
          </div>

          {/* Contact number for desktop */}
          <div className="flex items-center  space-x-2 hover:text-orange-500 duration-300 ease-in-out text-white ">
            <Icon icon="mdi-light:phone" className="h-5 w-5" />
            <Link to="tel:03316361916">03316361916</Link>
          </div>
        </motion.div>

        {/* Navbar for mobile */}
        <div className="md:hidden flex justify-center ml-[-16px] mb-[-10px]">
          
          {/* Contact number for mobile, aligned next to the sidebar */}
          <div className="lg:flex items-center space-x-1 hidden  hover:text-orange-500 duration-300 ease-in-out text-white">
            <Icon icon="mdi-light:phone" className="h-5 w-5" />
            <Link to="tel:03316361916">03316361916</Link>
          </div>
        </div>
      </>
      <Siderbar />

    </div>
  );
};

export default Header;

