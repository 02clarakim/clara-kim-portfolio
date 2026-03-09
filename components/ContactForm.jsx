"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_aaw4i5w",   // ← your Service ID
      "template_dff6qea",  // ← your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "W5alB6Z9l4dEj-XDN"
    ).then(() => {
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }, 800);
    });
  };

  return (
    <section id="contact" className="pt-[60px] pb-[100px] ml-4 md:ml-[150px]">
      {/* Heading aligned left */}
      <h2 className="text-2xl font-semibold mb-[40px]">
        <span className="bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text text-transparent">Contact Me
          </span>
      </h2>
      {/* Card centered */}
      <div className="flex justify-left">
        <div className="w-full max-w-[839px] bg-white/70 border border-gray-300 rounded-xl shadow-sm p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 resize-none focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2
                ${submitted
                  ? "bg-gray-500 text-white cursor-default"
                  : "bg-black text-white hover:bg-gray-800"
                }`}
            >
              {submitted ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Sent
                </>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;