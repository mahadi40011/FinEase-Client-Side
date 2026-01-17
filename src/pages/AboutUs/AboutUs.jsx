import React from "react";
import Heading from "../../components/Shared/Heading/Heading";
import { Target, Users, ShieldCheck, Zap, Heart, Award } from "lucide-react";
import HeroSection from "../../components/AboutUs/HeroSection";
import OurMission from "../../components/AboutUs/OurMission";
import CoreValues from "../../components/AboutUs/CoreValues";

const AboutUs = () => {
  return (
    <div className="font-poppins text-natural transition-colors duration-300">
      <HeroSection />

      <OurMission />

      <CoreValues />
    </div>
  );
};

export default AboutUs;
