import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";
import supabase from "../_utils/supabase";

function Contact() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    mobile: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setInputValue({ name: "", email: "", mobile: "", notes: "" });
    console.log(inputValue);

    setIsLoading(true);
    const { data, error } = await supabase
      .from("contact-form")
      .insert([
        {
          name: inputValue.name,
          email: inputValue.email,
          mobile: inputValue.mobile,
          notes: inputValue.notes,
        },
      ])
      .single();
    if (error) {
      setMessage("Error: 💥", err);
    } else {
      setMessage("Form submitted successfully😘");
    }
    setIsLoading(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    setIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e);
    setInputValue((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <section
      id="Contact"
      className="sm:px-[36px] md:px-0 py-[24px] overflow-hidden"
    >
      <div className="text-center py-[16px] md:py-[48px] lg:pt-[48px] lg:pb-[36px] text-[27px] lg:text-[4vw] uppercase">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0958a8] via-[#0ff] to-[#0bf] inline-block">
          Contact Us
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        viewport={{ once: true }}
        className=" lg:px-[128px] lg:py-[16px]"
      >
        <div className=" px-10">
          <div className="md:grid md:grid-cols-2 items-center">
            <div className="hidden md:block px-[8px]">
              <h2 className="text-[#2cede0] text-4xl font-semibold pb-3">
                Get in Touch
              </h2>
              <p className="font-light text-md leading-5 tracking-normal text-[#a3a3a3]">
                Feel free to reach out! Whether you have a question or just want
                to drop a message, I'll do my best to get back to you.
              </p>
              <div className="flex flex-col ">
                <div className="flex  gap-4 items-center pt-7">
                  <IoLocationOutline className="text-5xl border-2 text-green-400 border-green-400 p-1" />
                  <div className="leading-5">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0958a8] via-[#30aa11] to-[#98aa11] text-lg">
                      Location
                    </h4>
                    <p className="text-[#a3a3a3] font-normal text-[12px] ">
                      Sri Muktsar Sahib, punjab, India
                    </p>
                  </div>
                </div>
                <div className="flex  gap-4 items-center pt-7">
                  <IoMailOutline className="text-5xl border-2 text-pink-400 border-pink-400 p-1" />
                  <div className="leading-5">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0958a8] via-[#30aa11] to-[#98aa11] text-lg">
                      Email
                    </h4>
                    <p className="text-[#a3a3a3] font-normal text-[12px] ">
                      nikhilrajpu236@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex  gap-4 items-center pt-7">
                  <FaPhoneAlt className="text-5xl border-2 text-blue-800 border-blue-800 p-1" />
                  <div className="leading-5">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0958a8] via-[#30aa11] to-[#98aa11] text-lg">
                      Phone
                    </h4>
                    <p className="text-[#a3a3a3] font-normal text-[12px] ">
                      +91 8360359804
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border relative border-cyan-400 p-5 text-[#f5f5f5] rounded-lg">
              <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1  px-1 py-1 overflow-hidden">
                  <label htmlFor="full-name">Full name</label>
                  <input
                    id="full-name"
                    value={inputValue.name}
                    onChange={handleChange}
                    className="bg-[#f5f5f5] text-[#444] py-1 px-3 rounded-md"
                    type="text"
                    disabled={isLoading}
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 ">
                  <div className="flex flex-col gap-1 px-1 py-1 overflow-hidden">
                    <label htmlFor="mail">Email</label>
                    <input
                      id="mail"
                      name="email"
                      disabled={isLoading}
                      value={inputValue.email}
                      onChange={handleChange}
                      className="bg-[#f5f5f5] text-[#444] py-1 px-3 rounded-md"
                      type="email"
                      placeholder="Enter your Mail"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-1 py-1 overflow-hidden">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="mobile"
                      disabled={isLoading}
                      value={inputValue.mobile}
                      onChange={handleChange}
                      className="bg-[#f5f5f5] text-[#444] py-1 px-3 rounded-md"
                      type="tel"
                      placeholder="Enter your Mobile No."
                      required
                    />
                  </div>
                </div>
                <div className="px-1 overflow-hidden">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="bg-[#f5f5f5]  text-[#444] py-1 px-3 w-full rounded-md "
                    id="message"
                    name="notes"
                    disabled={isLoading}
                    value={inputValue.notes}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button
                    disabled={isLoading}
                    className="blink z-1 relative font-[600] text-[#1a1a1a] bg-[#408787] w-full items-center text-bold justify-center border-2 border-[#0ff] text-lg rounded-full py-[4px] cursor-pointer overflow-hidden"
                  >
                    {isLoading ? "Submitting......" : "Submit"}
                  </button>
                </div>
              </form>
              {isOpen && (
                <p className="absolute top-75 right-15 z-10 border-2 shadow-2xl border-green-900 bg-gray-700 text-white text-lg font-semibold rounded-xl p-2 ">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
