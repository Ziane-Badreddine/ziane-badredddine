import { NextRequest, NextResponse } from "next/server";
import { chat, maxIterations, toServerSentEventsResponse } from "@tanstack/ai";
import { groqText } from "@tanstack/ai-groq";
import { portfolioPrompt } from "@/data/data";
import { ratelimit } from "@/lib/redis";


export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 },
    );
  }

  const body = await request.json();

  const { messages, conversationId } = body;

  if (!messages || messages.length === 0) {
    return NextResponse.json(
      { error: "Messages are required" },
      { status: 400 },
    );
  }


  try {

    const stream = chat({
      adapter: groqText("llama-3.1-8b-instant"),
      messages,
      conversationId,
      systemPrompts: [portfolioPrompt], // ✅ pass string directly
      agentLoopStrategy: maxIterations(3),
      maxTokens: 500,
      modelOptions: {
        temperature: 0.7,
        max_completion_tokens: 500,
        top_p: 0.9,
      },
    });

    return toServerSentEventsResponse(stream);
  } catch (error) {
    console.error("[Chat API Error]", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 },
    );
  }
}
