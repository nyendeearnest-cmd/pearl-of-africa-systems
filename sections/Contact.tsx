"use client";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    if (response.ok) {

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } else {

      toast.error("Something went wrong.");

    }
  };

  return (
    <section className="bg-zinc-950 text-white py-24 px-6">

      <Toaster />

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-12">
          Let’s build something amazing together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-black border border-zinc-800"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-black border border-zinc-800"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-black border border-zinc-800"
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition px-10 py-4 rounded-2xl font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}