import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { phone } = body as { phone?: string };

  if (!phone) {
    return NextResponse.json(
      { error: "Phone number is required" },
      { status: 400 }
    );
  }

  // TODO: replace with actual OTP service call
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(`[mock] OTP for ${phone}: ${otp}`);

  return NextResponse.json({ message: "OTP sent successfully" });
}
