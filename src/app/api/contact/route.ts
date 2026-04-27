import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    console.log("Contact:", { name, email, subject, message });
    return NextResponse.json({ message: "Thank you! I'll get back to you soon." });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}