import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { phone, otp } = body as { phone?: string; otp?: string };

  if (!phone || !otp) {
    return NextResponse.json(
      { error: "Phone number and OTP are required" },
      { status: 400 }
    );
  }

  // TODO: replace with actual OTP verification logic
  const isValid = otp === "123456";

  if (!isValid) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
  }

  // TODO: replace with actual user lookup and token generation
  const token = crypto.randomUUID();
  const user = {
    firstname: "John",
    lastname: "Doe",
    email: "john@example.com",
    phone,
  };

  return NextResponse.json({ token, user });
}
