import { prisma } from "@/lib/prisma";

import DashboardChart
  from "@/components/DashboardChart";

export default async function DashboardPage() {

  const blogs =
    await prisma.blog.findMany();

  const contacts =
    await prisma.contact.findMany();

  const analytics = [
    {
      name: "Blogs",
      total: blogs.length,
    },
    {
      name: "Contacts",
      total: contacts.length,
    },
  ];

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-12">

          <h1 className="text-6xl font-bold">

            Analytics Dashboard

          </h1>

          <p className="text-gray-400 mt-4 text-xl">

            Pearl of Africa Systems Admin Insights

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <h2 className="text-2xl text-gray-400">

              Total Blogs

            </h2>

            <p className="text-6xl font-bold mt-6 text-green-400">

              {blogs.length}

            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <h2 className="text-2xl text-gray-400">

              Contact Messages

            </h2>

            <p className="text-6xl font-bold mt-6 text-blue-400">

              {contacts.length}

            </p>

          </div>

        </div>

        {/* Chart */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 h-[500px]">

          <h2 className="text-3xl font-bold mb-10">

            Platform Activity

          </h2>

          <DashboardChart
            analytics={analytics}
          />

        </div>

      </div>

    </div>
  );
}