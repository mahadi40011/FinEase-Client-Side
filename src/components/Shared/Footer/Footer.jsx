import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/FinEase-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-app-200 pt-16 md:pb-3 pl-7 sm:pl-10 md:pl-12 lg:pl-16 xl:pl-25 2xl:pl-30 mt-20 transition-colors duration-300 font-poppins text-natural">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* 1. Logo and Intro */}
          <div className="space-y-4 lg:col-span-2 ">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="FinEase Logo"
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-2xl font-bold bg-linear-to-r from-sky-900 to-blue-600 bg-clip-text text-transparent italic">
                FinEase
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Your trusted financial companion for smarter decisions. Plan,
              track, and grow your wealth effortlessly.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className=" ">
            {" "}
            <h2 className="text-lg font-bold mb-5 border-b-2 border-sky-600 w-fit">
              Quick Links
            </h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-sky-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-sky-600 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div className=" ">
            <h2 className="text-lg font-bold mb-5 border-b-2 border-sky-600 w-fit">
              Contact Us
            </h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p className="hover:text-sky-600 transition">
                Sylhet, Bangladesh
              </p>
              <p className="hover:text-sky-600 transition">+8801300701950</p>
              <p className="hover:text-sky-600 transition">
                mahadi40011@gmail.com
              </p>
            </div>
          </div>

          {/* 4. Social Media */}
          <div className=" ">
            <h2 className="text-lg font-bold mb-5 border-b-2 border-sky-600 w-fit">
              Follow Us
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/mehedi-hasan-mahbub/",
                  color: "hover:bg-[#0077B5] hover:text-white",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/mahadi40011",
                  color:
                    "hover:bg-[#24292e] dark:hover:bg-[#f0f6fc] hover:text-white dark:hover:text-[#24292e]",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-black/5 dark:border-white/5 transition-all duration-300 ${social.color} text-gray-600 dark:text-gray-400`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Area */}
        <div className="mt-12">
          <hr className="border-black/10 dark:border-white/10" />
          <p className="text-center text-sm text-gray-500 py-2">
            © {new Date().getFullYear()} FinEase. Built with ❤️ in Sylhet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
