"use client";

import {
  MessageCircle,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Chatbot() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello 👋 Welcome to Pearl of Africa Systems. How can we help you today?",
    },
  ]);

  const sendMessage = async () => {

    if (!message) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev: any) => [
      ...prev,
      userMessage,
    ]);

    setMessage("");

    try {

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev: any) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <>

      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
      >

        {open ? (
          <X size={30} />
        ) : (
          <MessageCircle size={30} />
        )}

      </button>

      {/* Chat Window */}

      {open && (

        <div className="fixed bottom-28 right-6 w-96 bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden z-50">

          <div className="bg-green-500 p-5">

            <h2 className="text-xl font-bold text-black">
              AI Assistant
            </h2>

          </div>

          <div className="p-6 h-96 overflow-y-auto text-white space-y-4">

            {messages.map(
              (msg: any, index) => (

                <div
                  key={index}
                  className={`p-4 rounded-2xl ${
                    msg.role === "assistant"
                      ? "bg-zinc-900"
                      : "bg-green-500 text-black ml-auto"
                  }`}
                >

                  {msg.content}

                </div>
              )
            )}

          </div>

          <div className="p-4 border-t border-zinc-800 flex gap-3">

            <input
              type="text"
              placeholder="Ask something..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="flex-1 bg-zinc-900 rounded-xl px-4 py-3 outline-none text-white"
            />

            <button
              onClick={sendMessage}
              className="bg-green-500 hover:bg-green-600 transition px-5 rounded-xl text-black font-bold"
            >

              Send

            </button>

          </div>

        </div>

      )}

    </>
  );
}