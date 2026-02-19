"use server"

export async function requestOtp(phone: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/sso/request-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone }),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error ?? "Error al solicitar OTP")
  }

  return res.json() as Promise<{ message: string }>
}
