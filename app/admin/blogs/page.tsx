"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

export default function AdminBlogsPage() {

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [image, setImage] = useState("");

  const [loading, setLoading] =
    useState(false);

  const uploadImage = async (
    e: any
  ) => {

    const file =
      e.target.files[0];

    const reader =
      new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = async () => {

      const response =
        await fetch("/api/upload", {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            image: reader.result,
          }),
        });

      const data =
        await response.json();

      setImage(data.url);
    };
  };

  const createBlog = async () => {

    setLoading(true);

    const response =
      await fetch("/api/blogs", {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          title,
          content,
          image,
        }),
      });

    const data =
      await response.json();

    setLoading(false);

    if (data.success) {

      alert("Blog created!");

      setTitle("");

      setContent("");

      setImage("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          Create Blog

        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Blog title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
          />

          <div className="bg-white text-black rounded-2xl overflow-hidden">

  <ReactQuill
    theme="snow"
    value={content}
    onChange={setContent}
    className="h-72 mb-12"
  />

</div>

          <input
            type="file"
            onChange={uploadImage}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
          />

          {image && (

            <img
              src={image}
              alt="Preview"
              className="w-full h-80 object-cover rounded-3xl"
            />

          )}

          <button
            onClick={createBlog}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-black font-bold"
          >

            {loading
              ? "Publishing..."
              : "Publish Blog"}

          </button>

        </div>

      </div>

    </div>
  );
}
const ReactQuill = dynamic(
  () => import("react-quill-new"),
  { ssr: false }
);