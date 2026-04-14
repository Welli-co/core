"use client"

import { useSession } from "@/contexts/session-context"

function getGreeting(date: Date = new Date()): string {
  const hour = date.getHours()
  if (hour < 12) return "Buenos días"
  if (hour < 19) return "Buenas tardes"
  return "Buenas noches"
}

function getFirstName(name: string): string {
  return name.split(" ")[0] ?? name
}

export function PulsoGreetingTitle() {
  const { user } = useSession()
  const greeting = getGreeting()
  const firstName = getFirstName(user.name)

  return (
    <>
      {greeting}, {firstName}
    </>
  )
}

type PulsoGreetingDescriptionProps = {
  pendingDisbursements: number
  pendingSignatures: number
}

export function PulsoGreetingDescription({
  pendingDisbursements,
  pendingSignatures,
}: PulsoGreetingDescriptionProps) {
  return (
    <>
      Tienes{" "}
      <span className="font-semibold text-foreground">
        {pendingDisbursements} aplicaciones
      </span>{" "}
      por vencer hoy y{" "}
      <span className="font-semibold text-foreground">
        {pendingSignatures} aplicaciones
      </span>{" "}
      pendientes de firma.
    </>
  )
}
