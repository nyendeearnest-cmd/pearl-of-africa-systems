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
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}