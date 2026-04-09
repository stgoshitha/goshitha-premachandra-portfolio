import React, { useState } from "react";
import { contactContent } from "/src/AllText.jsx";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    setButtonText("Sending...");

    emailjs
      .send(
        "service_4gih9pl",
        "template_hhw5n42",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "COhWms9lhyZY_gvCd"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setButtonText("Message Sent");
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send the message. Please try again.");
          setButtonText("Send Message");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div id={id} className="h-full flex flex-col justify-center lg:p-2  my-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:flex-row items-center justify-between px-4">
        {/* Left Content - Contact Details */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.0 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-orange-500">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg text-center m-5 lg:text-justify">
            {contactContent.description}
          </p>
          <div className="space-y-3 text-sm md:text-base lg:text-lg">
            <p className="flex items-center text-gray-300">
              <MdEmail className="mr-2" /> Email :{" "}
              <a
                href={`mailto:${contactContent.email}`}
                className="text-orange-500 ml-1"
              >
                {contactContent.email}
              </a>
            </p>
            <p className="flex items-center text-gray-300">
              <FaPhoneAlt className="mr-2" /> Phone :{" "}
              <a
                href={`tel:${contactContent.phone}`}
                className="text-orange-500"
              >
                {contactContent.phone}
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Content - Contact Form */}
        <motion.div
          className="relative md:w-1/2 bg-gray-800 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm md:text-base text-gray-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-gray-700 text-white p-3 md:p-4 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm md:text-base text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-gray-700 text-white p-3 md:p-4 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm md:text-base text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full bg-gray-700 text-white p-3 md:p-4 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className={`w-full bg-orange-500 text-white py-4 md:py-3 text-lg md:text-xl font-medium hover:font-medium rounded-md transition duration-200 ${
                isSending
                  ? "bg-orange-400 cursor-not-allowed"
                  : "hover:bg-orange-200 hover:text-orange-700"
              }`}
              disabled={isSending}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {buttonText}
            </motion.button>
          </form>
          {status && (
            <motion.p
              className="mt-4 text-center text-sm md:text-base lg:text-lg text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
