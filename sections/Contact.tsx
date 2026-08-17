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
      toast.error("Please fill in your name, email and message.");
      return;
    }

    setLoading(true);

    try {
      // Save the inquiry to the database
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save contact");
      }

      // Prepare WhatsApp message
      const whatsappMessage = `
Hello Pearl of Africa Systems,

I would like to make an inquiry.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service: ${formData.service || "Not specified"}

Message:
${formData.message}

Thank you.
      `.trim();

      const encodedMessage = encodeURIComponent(whatsappMessage);

      const whatsappLink = `https://wa.me/256706836522?text=${encodedMessage}`;

      toast.success("Inquiry saved. Opening WhatsApp...");

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Open WhatsApp
      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-zinc-950 text-white py-24 px-6"
    >
      <Toaster />

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <p className="text-green-400 font-semibold tracking-widest mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-gray-400 text-lg">
            Tell us what you need and we will get back to you.
          </p>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10"
        >

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="e.g. 0700000000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 outline-none transition"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Service Required
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 outline-none transition"
            >
              <option value="">
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

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Message
            </label>

            <textarea
              name="message"
              placeholder="Tell us what you need..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-black border border-zinc-800 focus:border-green-500 outline-none transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            {loading
              ? "Opening WhatsApp..."
              : "Send Inquiry on WhatsApp"}
          </button>

        </form>

      </div>
    </section>
  );
}