import React from "react";
import Heading from "../../components/Shared/Heading/Heading";
import {
  BookOpen,
  Video,
  FileText,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const Resources = () => {
  const resourceData = [
    {
      type: "Article",
      icon: <BookOpen className="text-blue-600" size={20} />,
      title: "5 Steps to Financial Freedom",
      desc: "Learn the fundamentals of managing money and building long-term wealth.",
      link: "https://www.canberra.edu.au/uc-alumni-canvas/canvas-articles/posts/5-steps-to-financial-freedom",
      tag: "Budgeting",
    },
    {
      type: "Video",
      icon: <Video className="text-emerald-600" size={20} />,
      title: "How to use FinEase App",
      desc: "A complete walkthrough of tracking your daily expenses with our app.",
      link: "",
      tag: "Tutorial",
    },
    {
      type: "Guide",
      icon: <FileText className="text-amber-600" size={20} />,
      title: "Tax Saving Checklist (PDF)",
      desc: "Download our verified checklist to maximize your tax savings this year.",
      link: "https://nbr.gov.bd/uploads/publications/64.pdf",
      tag: "Taxation",
    },
    {
      type: "Link",
      icon: <ExternalLink className="text-purple-600" size={20} />,
      title: "Official Bank Rates",
      desc: "Check the latest interest rates from the official central bank website.",
      link: "",
      tag: "External",
    },
  ];

  return (
    <section className="container mx-auto px-4 pt-16 font-poppins">
      <Heading
        title="Learning Resources"
        subtitle="Empower yourself with financial knowledge and expert guides."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {resourceData.map((item, index) => (
          <div
            key={index}
            className="group bg-app-200 p-6 rounded-3xl font-poppins text-natural flex flex-col md:flex-row gap-6 hover:scale-101 transition-all duration-300 shadow-sm"
          >
            {/* Icon Box */}
            <div className="bg-app-100 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              {item.icon}
            </div>

            {/* Content Box */}
            <div className="flex flex-col justify-between grow">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-1 rounded-md">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.link.length > 0 && item.link}
                target={item.link && "_blank"}
                rel="noreferrer"
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-sky-500 dark:text-sky-400 cursor-pointer"
              >
                View {item.type}{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Help Banner */}
      <div className="mt-16 bg-sky-700 dark:bg-app-200 text-white p-8 rounded-3xl text-center max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold">Need Personal Assistance?</h3>
        <p className="opacity-80 mt-2">
          Our financial experts are here to help you 24/7.
        </p>
        <button className="btn bg-white dark:bg-sky-700 text-natural border-none rounded-xl mt-6 px-8 hover:bg-gray-200 dark:hover:bg-sky-900">
          Contact Support
        </button>
      </div>
    </section>
  );
};

export default Resources;
