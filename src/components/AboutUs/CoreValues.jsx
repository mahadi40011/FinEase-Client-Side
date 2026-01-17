import React from "react";
import Heading from "../Shared/Heading/Heading";
import { ShieldCheck, Users, Zap } from "lucide-react";

const CoreValues = () => {
  return (
    <section className="container px-4 py-20 ">
      <div className="responsive-container">
        <Heading
          title="Our Core Values"
          subtitle="The principles that drive every feature we build."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ValueCard
            icon={<ShieldCheck size={32} />}
            title="Privacy First"
            desc="We never sell your data. Your financial records are encrypted and visible only to you."
          />
          <ValueCard
            icon={<Users size={32} />}
            title="Community Driven"
            desc="We build features based on what our users need. Your feedback is our roadmap."
          />
          <ValueCard
            icon={<Zap size={32} />}
            title="Simple & Clean"
            desc="Finance is complex enough. Our UI is designed to be clean, fast, and easy to navigate."
          />
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-app-200 dark:bg-gray-800 p-8 rounded-3xl shadow-sm hover:scale-105 transition-transform duration-300 border border-black/5">
    <div className="text-sky-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm">{desc}</p>
  </div>
);

export default CoreValues;
