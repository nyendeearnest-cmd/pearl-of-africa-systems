import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const admin = await prisma.admin.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!admin) {

      return NextResponse.json(
        {
          success: false,
          message: "Admin not found",
        },
        {
          status: 401,
        }
      );
    }

    const validPassword = await bcrypt.compare(
      body.password,
      admin.password
    );

    if (!validPassword) {

      return NextResponse.json(
        {
          success: false,
          message: "Wrong password",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json({
      success: true,
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