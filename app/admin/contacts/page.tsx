import { prisma } from "@/lib/prisma";

export default async function ContactsPage() {

  const contacts =
    await prisma.contact.findMany({

      orderBy: {
        createdAt: "desc",
      },
    });

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          Contact Messages

        </h1>

        <div className="space-y-6">

         {contacts.map((contact: any) => (

            <div
              key={contact.id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >

              <div className="flex justify-between items-start mb-4">

                <div>

                  <h2 className="text-2xl font-bold">

                    {contact.name}

                  </h2>

                  <p className="text-green-400">

                    {contact.email}

                  </p>

                </div>

              </div>

              <p className="text-gray-300 leading-relaxed">

                {contact.message}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}