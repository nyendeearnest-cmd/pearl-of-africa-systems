import { NextResponse } from "next/server";

import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const uploadedImage =
      await cloudinary.uploader.upload(
        body.image,
        {
          folder: "pearl-of-africa-systems",
        }
      );

    return NextResponse.json({
      success: true,
      url: uploadedImage.secure_url,
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