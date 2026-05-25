"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {

      localStorage.setItem("admin", "true");

      router.push("/dashboard");

    } else {

      alert("Invalid credentials");

    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md space-y-6"
      >

        <h1 className="text-4xl font-bold text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-black border border-zinc-800"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-xl bg-black border border-zinc-800"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <button
          className="w-full bg-green-500 hover:bg-green-600 transition py-4 rounded-xl font-semibold"
        >
          Login
        </button>

      </form>
    </main>
  );
}