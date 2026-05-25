"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";

export default function Dashboard() {

  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {

    const admin = localStorage.getItem("admin");

    if (!admin) {
      window.location.href = "/admin";
    }

    fetchContacts();

  }, []);

  const fetchContacts = async () => {

    const response = await fetch("/api/contacts");

    const data = await response.json();

    setContacts(data.contacts);
  };

  const deleteContact = async (
    id: number
  ) => {

    await fetch(`/api/contact/${id}`, {
      method: "DELETE",
    });

    fetchContacts();
  };

  return (
    <main className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <section className="flex-1 p-10">

        <div className="flex justify-between items-center mb-12">

          <div>
            <h1 className="text-5xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Welcome back admin.
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("admin");
              window.location.href = "/admin";
            }}
            className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-2xl"
          >
            Logout
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <StatCard
            title="Total Messages"
            value={contacts.length}
          />

          <StatCard
            title="Website Status"
            value="Online"
          />

          <StatCard
            title="Admin Access"
            value="Secure"
          />

        </div>

        <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800">

          <h2 className="text-3xl font-bold mb-8">
            Contact Messages
          </h2>

          <div className="space-y-6">

            {contacts.map((contact) => (

              <div
                key={contact.id}
                className="bg-zinc-900 p-6 rounded-2xl"
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {contact.name}
                    </h3>

                    <p className="text-green-500 mt-2">
                      {contact.email}
                    </p>

                    <p className="text-gray-400 mt-4">
                      {contact.message}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      deleteContact(contact.id)
                    }
                    className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}