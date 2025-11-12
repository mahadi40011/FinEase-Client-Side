import React from "react";
import { Link } from "react-router";
import logo from "../../assets/FinEase-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 pt-10 pb-5 px-6 mt-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Name */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Website Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-semibold text-sky-900">FinEase</h1>
          </div>
          <p className="text-sm mt-3">
            Your trusted financial companion for smarter decisions.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm">📍 Sylhet, Bangladesh</p>
          <p className="text-sm">📞 +8801300701950</p>
          <p className="text-sm">📧 mahadi40011@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <p
                className="hover:text-blue-700 transition-colors duration-200"
              >
                Terms & Conditions
              </p>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <Link
              to="https://facebook.com"
              target="_blank"
              className="p-2 rounded-full bg-gray-400 hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              className="p-2 rounded-full bg-gray-400 hover:bg-white hover:text-black transition"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              className="p-2 rounded-full bg-gray-400 hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://youtube.com"
              target="_blank"
              className="p-2 rounded-full bg-gray-400 hover:bg-red-600 transition"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="border-t border-gray-400 mt-10 pt-5 text-center text-sm ">
        © {new Date().getFullYear()} FinEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
