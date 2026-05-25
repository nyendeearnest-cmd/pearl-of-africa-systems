import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const completion =
      await openai.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              "You are Pearl of Africa Systems AI assistant. Help visitors professionally about software, AI, cybersecurity and enterprise technology.",
          },

          {
            role: "user",
            content: body.message,
          },
        ],
      });

    return NextResponse.json({
      reply:
        completion.choices[0].message.content,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "AI failed",
      },
      {
        status: 500,
      }
    );
  }
}