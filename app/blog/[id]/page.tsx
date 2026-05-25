import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}

export default async function BlogPage({
  params,
}: Props) {

  const blog =
    await prisma.blog.findUnique({

      where: {
        id: Number(params.id),
      },
    });

  if (!blog) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">

        Blog not found

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Hero */}

      <div className="relative h-[500px]">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">

          <h1 className="text-6xl font-bold text-center max-w-4xl px-6">

            {blog.title}

          </h1>

        </div>

      </div>

      {/* Content */}

      <div className="max-w-4xl mx-auto py-20 px-6">

        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

      </div>

    </div>
  );
}