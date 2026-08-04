import { LoopsClient } from "loops";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.LOOPS_API_KEY;
    const transactionalId = process.env.LOOPS_SUPPORT_TRANSACTIONAL_ID;

    if (!apiKey || !transactionalId) {
      return NextResponse.json(
        { success: false, message: "Support email is not configured." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as {
      email?: unknown;
      message?: unknown;
    };

    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, message: "Please enter a message." },
        { status: 400 },
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { success: false, message: "Message is too long." },
        { status: 400 },
      );
    }

    const loops = new LoopsClient(apiKey);
    const supportInbox =
      process.env.LOOPS_SUPPORT_INBOX ?? "kw@speedsound.co";

    const resp = await loops.sendTransactionalEmail({
      transactionalId,
      email: supportInbox,
      addToAudience: false,
      dataVariables: {
        senderEmail: email,
        message,
      },
    });

    if (!resp.success) {
      let errorMessage = "Failed to send message.";

      if ("message" in resp && typeof resp.message === "string") {
        errorMessage = resp.message;
      } else if (
        "error" in resp &&
        resp.error &&
        typeof resp.error === "object" &&
        "message" in resp.error &&
        typeof resp.error.message === "string"
      ) {
        errorMessage = resp.error.message;
      }

      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
