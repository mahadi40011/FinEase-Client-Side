import { Award } from "lucide-react";
import React from "react";

const MeetTheVisionary = () => {
  return (
    <section className="bg-app-200 py-20 transition-colors duration-300 px-4">
      <div className="container">
        <div className="responsive-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Side: Details */}
            <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
              <div className="inline-block px-4 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-sm font-bold tracking-widest uppercase">
                Founder & Lead Developer
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Meet the Visionary Behind{" "}
                <span className="text-sky-600">FinEase</span>
              </h2>

              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                Mehedi Hasan Mahbub
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                A passionate developer from Sylhet, dedicated to creating tech
                solutions that solve real-world financial problems. With
                FinEase, the goal is to make financial management accessible and
                stress-free for everyone.
              </p>

              {/* Social Links or Signature */}
              <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/mehedi-hasan-mahbub"
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-sky-700 hover:bg-sky-900 text-white border-none px-8 rounded-xl shadow-lg transition-all"
                >
                  Connect on LinkedIn
                </a>
                <div className="italic text-gray-400 font-serif text-lg">
                  ~ M. H. Mahbub
                </div>
              </div>
            </div>

            {/* Right Side: Image with Decorative Elements */}
            <div className="flex-1 relative order-1 md:order-2 flex justify-center">
              <div className="relative group">
                {/* Main Image Frame */}
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl transition-transform duration-500 group-hover:rotate-3">
                  <img
                    src="https://i.ibb.co.com/fGVJ80zN/takla-profile-pic.png"
                    alt="Mehedi Hasan Mahbub"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Small Card */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-black/5 hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                        Experience
                      </p>
                      <p className="text-sm font-bold">Tech Enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheVisionary;
