import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {

  try {

    const blogs =
      await prisma.blog.findMany({

        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json({
      blogs,
    });

  } catch (error: any) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const blog =
      await prisma.blog.create({

        data: {
          title: body.title,
          content: body.content,
          image: body.image || "",
        },
      });

    return NextResponse.json({
      success: true,
      blog,
    });

  } catch (error: any) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}