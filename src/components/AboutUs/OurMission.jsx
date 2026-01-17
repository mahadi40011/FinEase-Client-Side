import React from "react";
import { Award, Heart, ShieldCheck, Target, Zap } from "lucide-react";

const OurMission = () => {
  return (
    <section className="bg-app-200 py-20 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center responsive-container">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-sky-600 pl-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our mission is to simplify personal finance for everyone. We
              believe that financial literacy and easy-to-use tools should be
              accessible to all, regardless of their income level.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="text-sky-600" /> 100% Secure
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Zap className="text-sky-600" /> Fast & Intuitive
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Heart className="text-sky-600" /> User First
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Award className="text-sky-600" /> High Accuracy
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-sky-100 dark:bg-gray-800 rounded-4xl flex items-center justify-center overflow-hidden shadow-xl">
              <Target
                size={150}
                className="text-sky-900/10 absolute rotate-12"
              />
              <p className="text-center p-10 italic text-lg font-medium text-sky-900 dark:text-sky-400">
                "Helping thousands of users in Bangladesh manage over ৳ 1.2M in
                transactions daily."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
