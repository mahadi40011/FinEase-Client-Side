import { Phone, Target } from "lucide-react";
import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again.",
            icon: "error",
          });
          setIsSending(false);
        }
      );
  };

  return (
    <section className="pt-20 px-4 container">
      <div className="responsive-container bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-black/5 flex flex-col md:flex-row">
        {/* Left Side: Contact Info */}
        <div className="bg-sky-900 p-10 md:p-16 text-white md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="opacity-80 mb-10">
              Have questions or suggestions? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MdEmail size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-60 uppercase">Email us at</p>
                  <p className="font-medium">mahadi40011@gmail.com</p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-60 uppercase">Call us at</p>
                  <p className="font-medium">+880 1300-701950</p>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-60 uppercase">
                    Office Location
                  </p>
                  <p className="font-medium">Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-lg font-bold mb-2 w-fit">Follow Us</h2>
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
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 shadow-sm border border-black/5 dark:border-white/5 transition-all duration-300 ${social.color} text-gray-600 dark:text-gray-200`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-10 md:p-16 grow">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Full Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 mt-1 bg-gray-200/70 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-700"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 mt-1 bg-gray-200/70 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-700"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold ml-1">Subject</label>
              <input
                name="subject"
                type="text"
                required
                className="w-full px-4 py-3 mt-1 bg-gray-200/70 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-700"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold ml-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 mt-1 bg-gray-200/70 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-700"
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-2">
              <button
                disabled={isSending}
                type="submit"
                className="btn bg-sky-900 hover:bg-sky-800 text-white border-none w-full md:w-auto px-10 rounded-xl transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                {isSending ? "Sending Message..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
