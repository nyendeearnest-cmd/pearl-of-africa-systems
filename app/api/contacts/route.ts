import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("GET contacts error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch contacts",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      service,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        service: service?.trim() || null,
        message: message.trim(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact message saved successfully.",
        contact,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("POST contacts error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to save contact message.",
      },
      {
        status: 500,
      }
    );
  }
}