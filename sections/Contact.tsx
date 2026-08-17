"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-zinc-950 text-white py-28 px-6"
    >
      <Toaster position="top-right" />

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-green-400 font-semibold tracking-widest mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Tell us what you need and our team will get back to you
            as soon as possible.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 space-y-6"
        >

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition"
              />
            </div>

          </div>

          {/* Phone + Service */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="+256 700 000 000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Service Required
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition"
              >

                <option value="" className="bg-zinc-900">
                  Select a service
                </option>

                <option value="Computer Training">
                  Computer Training
                </option>

                <option value="Graphic Design & Branding">
                  Graphic Design & Branding
                </option>

                <option value="IT Support & Maintenance">
                  IT Support & Maintenance
                </option>

                <option value="Computer Repair">
                  Computer Repair
                </option>

                <option value="Internship Training">
                  Internship Training
                </option>

                <option value="Networking">
                  Networking
                </option>

                <option value="Internet Services">
                  Internet Services
                </option>

                <option value="Camera Installation">
                  Camera Installation
                </option>

                <option value="Reports & Proposal Generation">
                  Reports & Proposal Generation
                </option>

                <option value="Hardware Replacement">
                  Hardware Replacement
                </option>

                <option value="Web Development">
                  Web Development
                </option>

                <option value="Database Systems">
                  Database Systems
                </option>

                <option value="Cybersecurity">
                  Cybersecurity
                </option>

                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>

              </select>
            </div>

          </div>

          {/* Message */}
          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Message *
            </label>

            <textarea
              name="message"
              placeholder="Tell us about your project or what you need help with..."
              rows={7}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition resize-none"
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition px-10 py-4 rounded-xl text-black font-bold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}