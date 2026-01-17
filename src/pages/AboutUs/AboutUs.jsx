import React from "react";
import HeroSection from "../../components/AboutUs/HeroSection";
import OurMission from "../../components/AboutUs/OurMission";
import CoreValues from "../../components/AboutUs/CoreValues";
import MeetTheVisionary from "../../components/AboutUs/MeetTheVisionary";
import ContactUs from "../ContactUs/ContactUs";

const AboutUs = () => {
  return (
    <div className="font-poppins text-natural transition-colors duration-300">
      <HeroSection />

      <OurMission />

      <CoreValues />

      <MeetTheVisionary />

      <ContactUs />
    </div>
  );
};

export default AboutUs;
