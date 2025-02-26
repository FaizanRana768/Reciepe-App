import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../utils/constant";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();


  // Scroll to top function
  const ScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  return (
    <div>
      <div className="md:hidden flex items-center justify-between p-4 bg-transparent">
        <div>
          <Link onClick={ScrollToTop} to={"/"}>
            <img src={"/src/assets/images/Xsuitelogo.webp"} className="mt-[1.4rem]" width={100} height={100} alt="Logo" />
          </Link>
        </div>

        <button
          className="mr-12 rounded-md duration-300 ease-in-out text-white hover:bg-gray-700"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Icon icon="mdi:menu" className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-80 text-white z-30 md:hidden flex flex-col items-center justify-center"
          >
            <button
              className="text-white absolute top-4 right-4 text-2xl"
              onClick={() => setSidebarOpen(false)}
            >
              <Icon icon="mdi:close" />
            </button>
            <ul className="space-y-4 text-center">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    onClick={ScrollToTop}
                    to={item.path}
                    className="block text-xl text-white hover:text-[#7E7E7E]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;