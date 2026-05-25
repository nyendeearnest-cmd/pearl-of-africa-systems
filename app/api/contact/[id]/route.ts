import { prisma } from "@/lib/prisma";

import { NextResponse }
from "next/server";

export async function DELETE(
  request: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    const { id } =
      await context.params;

    await prisma.contact.delete({

      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({

      success: true,
    });

  } catch (error) {

    console.error(error);

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