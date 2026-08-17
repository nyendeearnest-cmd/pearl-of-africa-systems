import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-green-400 font-semibold mb-4">
            PEARL OF AFRICA SYSTEMS
          </p>

          <h1 className="text-5xl md:text-6xl font-black">
            Our Blog
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Technology insights, tutorials, digital transformation,
            cybersecurity and stories from Pearl of Africa Systems.
          </p>

        </div>

        {/* Blog Grid */}
        {blogs.length === 0 ? (

          <div className="text-center py-20 bg-zinc-900 rounded-3xl border border-zinc-800">

            <h2 className="text-2xl font-bold mb-3">
              No blog posts yet
            </h2>

            <p className="text-gray-400">
              Our latest articles will appear here soon.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (

              <article
                key={blog.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 transition duration-300"
              >

                {blog.image && (
                  <div className="h-56 overflow-hidden">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />

                  </div>
                )}

                <div className="p-7">

                  <p className="text-green-400 text-sm font-semibold mb-3">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    {blog.title}
                  </h2>

                  <p className="text-gray-400 line-clamp-3">
                    {blog.content}
                  </p>

                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-block mt-6 text-green-400 font-semibold hover:text-green-300"
                  >
                    Read More →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}