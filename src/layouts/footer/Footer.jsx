import React from "react"
import { Link, } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-[#0b081c] py-8 scrollbar-hide">
      {/* // <section id="footerSec" className="bg-[#071952] py-8"> */}
      {/* Footer Main Container */}
      <div className="w-4/5 mx-auto">
        {/* Contact Items */}
        <div
          className="flex flex-wrap justify-between border-b-2 border-gray-500 pb-4"
        >
          {/* Call Us */}
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg">
              <FaPhone className="text-[#37b7c3] mr-3" /> Call Us
            </h3>
            <div className="w-8 h-1 bg-[#37b7c3] my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Phone:  </span> +91-9355249401,02
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Phone:  </span> +91-9355249403,04
              </p>
            </div>
          </div>
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg">
              <FaLocationDot className="text-[#37b7c3] mr-3" /> Address
            </h3>
            <div className="w-8 h-1 bg-[#37b7c3] my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Location: </span>
                NH-19 (Formerly Known as NH-2), Palwal, Faridabad
              </p>
              <p className="text-gray-400 text-sm">(Delhi NCR) Haryana</p>
            </div>
          </div>
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg">
              <FaEnvelope className="text-[#37b7c3] mr-3" /> Mail Us
            </h3>
            <div className="w-8 h-1 bg-[#37b7c3] my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Info: </span>info@srcem.ac.in
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Ad: </span>admission@srcem.ac.in
              </p>
            </div>
          </div>
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg">
              <FaGlobe className="text-[#37b7c3] mr-3" /> Office
            </h3>
            <div className="w-8 h-1 bg-[#37b7c3] my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Head: </span> Palwal
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Corporate: </span> India
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-64 py-4">
            <div className=" relative pb-2 h-auto w-[15rem] flex justify-center items-center cursor-pointer">
              <Link to="/"><img
                src="/images/SRCEM logo.png"
                alt="Logo"
                className="w-full h-full"
              /></Link>
            </div>
            <p className="text-white text-sm">
              "At Shri Ram College of Engineering & Management, we recognize that shaping institutions is as challenging as shaping the future itself. It demands serious andsustained efforts, a relentless pursuit of excellence, hard work, and dedication. Our Management has successfully meet these challenges, demonstrating exceptional leadership and commitment..
            </p>
            <div className="flex mt-4 space-x-4">
              <FaFacebookF className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" />
              <FaWhatsapp className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" />
              <FaLinkedinIn className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" />
              <FaGooglePlusG className="text-white hover:text-[#37b7c3] cursor-pointer text-3xl" />
              <FaTwitter className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" />
            </div>
          </div>
          <div className="w-64 py-4">
            <h4 className="text-white text-lg font-semibold mb-2">
              GET IN TOUCH
            </h4>
            <div className="w-8 h-1 bg-[#37b7c3] mb-4"></div>
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full p-2 rounded mb-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded mb-2"
              rows="3"
            ></textarea>
            <button className="w-full bg-[#37b7c3] text-white py-2 rounded hover:bg-[#088395]">
              SEND MESSAGE
            </button>
          </div>
          <div className="w-64 py-4">
            <h4 className="text-white text-lg font-semibold mb-2">
              MEETING HOURS
            </h4>
            <div className="w-8 h-1 bg-[#37b7c3] mb-4"></div>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day, idx) => (
              <p
                key={idx}
                className="flex justify-between text-gray-400 text-sm"
              >
                <span className="text-white">{day}</span>{" "}
                {day === "Sunday" ? "Close" : "9: 00 am - 7: 00 pm"}
              </p>
            ))}
          </div>
        </div>

        {/* Copyright */}

        <div className="text-center flex justify-between px-4 rounded-lg text-sm md:text-[17px] text-white py-4 bg-[#030208] mt-4">
          {/* <div className="text-center flex justify-between px-4 text-white py-4 bg-[#071952] mt-4"> */}
          <div>© 2024All Rights Reserved Terms of Use and Privacy Policy</div>
          <div>Website Developed By Our Team's name</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;