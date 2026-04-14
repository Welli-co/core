"use client"

import * as React from "react"

import type { Facility, User } from "@/data/session"

type SessionValue = {
  user: User
  facilities: Facility[]
}

const SessionContext = React.createContext<SessionValue | null>(null)

export function SessionProvider({
  value,
  children,
}: {
  value: SessionValue
  children: React.ReactNode
}) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  )
}

export function useSession(): SessionValue {
  const ctx = React.useContext(SessionContext)
  if (!ctx) {
    throw new Error("useSession must be used inside a <SessionProvider>")
  }
  return ctx
}
