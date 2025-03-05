import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; 
import WorkProcess from "../components/main/WorkProcess";
import { servicesInfo } from "../components/main/Helpers/Data";
import FAQs from "../components/FAQs";

// Define Type for a Service
type ServiceType = {
  id: number;
  title: string;
  description: string;
  path: string;
  icon: Element;
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayedServices: ServiceType[] = showAll ? servicesInfo : servicesInfo.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>Services | Xsuite Digital</title>
      </Helmet>

      <div className="bg-black text-white py-16 lg:py-52 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-center font-bold">Our Services</h1>
        </div>
        <div className="relative inset-0">
          <div className="absolute w-96 h-96 -top-0 -left-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-0 -right-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <section className="bg-black py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.length > 0 ? (
              displayedServices.map((service: ServiceType, index: number) => (
                <Link
                  key={service.id}
                  to={`/Services/${service.path}`} 
                  className={`group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 transform transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  role="button"
                  aria-label={`Service: ${service.title}`}
                >
                  <div className="p-6 flex justify-between items-center">
                    <div className="flex flex-col">
                      <h3 className="mb-2 text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-3xl absolute top-1 right-4 flex items-center cursor-pointer text-orange-500">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-6 flex items-center text-orange-500 cursor-pointer hover:underline">
                    <span>View Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-white text-center">
                No services available at the moment.
              </p>
            )}
          </div>

          <div className="flex items-center justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-black transition-colors duration-300 ease-in-out"
              aria-label={showAll ? "Show Less Services" : "View More Services"}
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        </div>
      </section>

      <WorkProcess />
      <FAQs />
    </>
  );
};

export default Services;
