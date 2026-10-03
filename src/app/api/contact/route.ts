import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

interface ContactRequestBody {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();

    const { name, email, company, projectType, message } = body;

    // Field validations
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Message must be at least 5 characters long." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || siteConfig.email;

    // If Resend API key is configured, dispatch the live email
    if (resendApiKey) {
      const emailPayload = {
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipientEmail],
        reply_to: email,
        subject: `[Portfolio Inquiry] ${projectType || "General"} from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0f172a; margin-top: 0;">New Project Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || "Not specified"}</p>
            <p><strong>Category:</strong> ${projectType || "General Engineering"}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 6px;">${message}</p>
          </div>
        `,
      };

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error("Resend API delivery error:", errorData);
        return NextResponse.json(
          { error: "Failed to dispatch email via provider.", details: errorData },
          { status: 502 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Inquiry received and forwarded to inbox." },
        { status: 200 }
      );
    }

    // Graceful fallback when RESEND_API_KEY is not yet supplied in environment
    console.info(
      `[Contact Form Submission] From: ${name} (${email}), Company: ${company || "N/A"}, Type: ${projectType}, Message: "${message}"`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Message received. (Note: Live email delivery requires RESEND_API_KEY in environment variables).",
        configured: false,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Contact API route exception:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
