"use client";

import Link from "next/link";

import {
  useRouter,
  usePathname,
} from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Mail,
  LogOut,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  const pathname =
    usePathname();

  const handleLogout = () => {

    localStorage.removeItem("admin");

    router.push("/admin");
  };

  const navLinks = [

    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Blogs",
      href: "/admin/blogs",
      icon: FileText,
    },

    {
      name: "Contacts",
      href: "/admin/contacts",
      icon: Mail,
    },
  ];

  return (

    <div className="min-h-screen bg-black text-white flex">

      {/* Desktop Sidebar */}

      <aside className="hidden md:flex w-72 bg-zinc-950 border-r border-zinc-800 p-8 flex-col justify-between">

        {/* Top Section */}

        <div>

          {/* Logo */}

          <div className="mb-14">

            <div className="flex items-center gap-4">

              <img
                src="/logo.png"
                alt="Pearl Admin"
                className="w-14 h-14 object-contain"
              />

              <div>

                <h1 className="text-3xl font-black text-green-400">

                  Pearl Admin

                </h1>

                <p className="text-gray-500 text-sm mt-1">

                  Control Center

                </p>

              </div>

            </div>

          </div>

          {/* Navigation */}

          <nav className="space-y-4">

            {navLinks.map((link) => {

              const Icon = link.icon;

              const active =
                pathname === link.href;

              return (

                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-4 p-5 rounded-2xl font-semibold transition duration-300 hover:scale-105

                  ${
                    active
                      ? "bg-green-500 text-black"
                      : "bg-zinc-900 hover:bg-green-500 hover:text-black"
                  }`}
                >

                  <Icon size={22} />

                  {link.name}

                </Link>
              );
            })}

          </nav>

        </div>

        {/* Logout */}

        <div className="pt-10">

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 hover:scale-105 active:scale-95 transition duration-300 p-4 rounded-2xl font-bold"
          >

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </aside>

      {/* Mobile Bottom Navigation */}

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 flex justify-around items-center p-4 z-50">

        {navLinks.map((link) => {

          const Icon = link.icon;

          const active =
            pathname === link.href;

          return (

            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center text-sm transition

              ${
                active
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
            >

              <Icon size={22} />

              <span className="mt-1">

                {link.name}

              </span>

            </Link>
          );
        })}

        <button
          onClick={handleLogout}
          className="flex flex-col items-center text-red-400"
        >

          <LogOut size={22} />

          <span className="mt-1 text-sm">

            Logout

          </span>

        </button>

      </div>

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto pb-24 md:pb-0">

        {children}

      </main>

    </div>
  );
}