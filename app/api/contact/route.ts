import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    // Save to database

    const contact =
      await prisma.contact.create({

        data: {
          name: body.name,
          email: body.email,
          message: body.message,
        },
      });

    // Send email notification

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Contact Message",

      html: `

        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Message:</strong></p>

        <p>${body.message}</p>

      `,
    });

    return NextResponse.json({
      success: true,
      contact,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}