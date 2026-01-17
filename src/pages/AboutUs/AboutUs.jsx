import React from "react";
import Heading from "../../components/Shared/Heading/Heading";
import HeroSection from "../../components/AboutUs/HeroSection";
import OurMission from "../../components/AboutUs/OurMission";

const AboutUs = () => {
  return (
    <div className="font-poppins text-natural transition-colors duration-300">
      <HeroSection />

      <OurMission />
    </div>
  );
};

export default AboutUs;
