import { lazy, Suspense, useEffect } from "react";

const Tesimonial = lazy(() => import("../components/Tesimonial"));

const FAQs = lazy(() => import("../components/FAQs"));
import { Helmet } from "react-helmet-async";
import Discount from "../marketing-page/Discount";
import ContactLink from "../marketing-page/ContactLink";
import About from "./About";
import HireUs from "../marketing-page/HireUs";
import Hero from "../marketing-page/Hero";
import PackajsCall from "../marketing-page/PackajsCall";
import Stats from "../marketing-page/Stats";

const Home = () => {
  useEffect(()=> {
    window.scrollTo(0,0)
  })
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title className="text-white">
          Xsuite Digital Marketing Agency |  Creative Solutions for Brands
        </title>
        <meta
          name="description"
          content="Explore Xsuite Digital, a full-service marketing agency, specializing in web development, SEO, PPC campaigns, and SMM projects.
"
        />
      </Helmet>
      <div className=" w-full h-[60vh]   bg-fixed lg:h-screen bg-[url('/bgimg.webp')] bg-cover bg-center">

      <Hero />
      <Discount/>
      </div>
      <About />
      <PackajsCall/>
     <HireUs />
    
     <Stats />

      
      <Suspense fallback={<p>Loading...</p>}>
       <Tesimonial />
       < ContactLink/>
        <FAQs />
      </Suspense>
    </div>
  );
};

export default Home;
