import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import Overview from "../../components/Home/Overview/Overview";
import Features from "../../components/Home/Features/Features";
import Statistics from "../../components/Home/Statistics/Statistics";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import FAQ from "../../components/Home/FAQ/FAQ";

const Home = () => {
  return (
    <div className="container px-6 md:px-12 lg:px-20 py-10 space-y-20">
      <Banner />

      <Overview />

      <Statistics/>

      <Features />
      
      <Testimonials />
      
      <FAQ/>
    </div>
  );
};

export default Home;
