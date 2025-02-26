import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { contactDetails, services, socialLinks } from "../utils/constant";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-20 font-sans tracking-wide">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="flex flex-col items-center text-center">
            <Link to="/" className="inline-block">
              <img src="/src/assets/images/Xsuitelogo.webp" alt="logo" className="w-48" />
            </Link>
            <p className="mt-4 text-sm">
              Discover XSuite, a global marketing agency that transforms your brand with creativity and innovation.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full sm:w-auto rounded-md text-black focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out bg-white text-black hover:bg-orange-600 hover:text-white"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
            <ul className="mt-6 space-y-2 text-gray-300">
              {contactDetails.map((item, index) => (
                <li key={index}>
                  <span className="text-orange-500 font-bold">{item.type}:</span>{" "}
                  {item.link ? (
                    <Link to={item.link} target="_blank" className="hover:text-white">
                      {item.value}
                    </Link>
                  ) : (
                    item.value
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-white font-semibold text-lg">Services</h4>
            <ul className="mt-6 space-y-1">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold text-lg">Follow Us</h4>
            <ul className="mt-6 space-y-4">
              {socialLinks.map((social, index) => (
                <li key={index} className="flex justify-center lg:justify-start items-center space-x-2">
                  <Icon icon={social.icon} className="h-6 w-6 text-orange-500 duration-300 ease-in-out" />
                  <Link to={social.url} target="_blank" className="hover:text-white">
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-10 border-gray-600" />

        <div className="flex justify-center space-x-4 text-sm">
          {["Terms of Service", "Privacy Policy", "Security"].map((text, index) => (
            <Link key={index} to={`/${text.replace(/\s+/g, "")}`} className="hover:text-white">
              {text}
            </Link>
          ))}
        </div>
      </div>
    </footer >
  );
}

export default Footer;
