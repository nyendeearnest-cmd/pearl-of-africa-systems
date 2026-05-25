import "./globals.css";

import type { Metadata }
from "next";

export const metadata: Metadata = {

  title:
    "Pearl of Africa Systems",

  description:
    "Pearl of Africa Systems builds intelligent software, cybersecurity systems, AI solutions and enterprise technology for Africa.",

  keywords: [
    "Software Company Uganda",
    "Cybersecurity Uganda",
    "AI Systems Africa",
    "Pearl of Africa Systems",
    "Web Development Uganda",
    "Enterprise Software",
  ],

  authors: [
    {
      name:
        "Pearl of Africa Systems",
    },
  ],

  openGraph: {

    title:
      "Pearl of Africa Systems",

    description:
      "Building Africa’s digital future through intelligent systems and enterprise technology.",

    url:
      "https://yourdomain.com",

    siteName:
      "Pearl of Africa Systems",

    images: [
      {
        url:
          "/logo.png",

        width: 1200,

        height: 630,

        alt:
          "Pearl of Africa Systems",
      },
    ],

    locale:
      "en_US",

    type:
      "website",
  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "Pearl of Africa Systems",

    description:
      "Building Africa’s digital future.",

    images: [
      "/logo.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>
  );
}