"use client"

import * as React from "react"

import type { Facility } from "@/data/session"

import { useSession } from "./session-context"

type FacilityValue = {
  facilities: Facility[]
  currentFacility: Facility
  setCurrentFacility: (facility: Facility) => void
}

const FacilityContext = React.createContext<FacilityValue | null>(null)

export function FacilityProvider({ children }: { children: React.ReactNode }) {
  const { facilities } = useSession()
  const [currentFacility, setCurrentFacility] = React.useState<Facility>(
    () => facilities[0]!
  )

  const value = React.useMemo(
    () => ({ facilities, currentFacility, setCurrentFacility }),
    [facilities, currentFacility]
  )

  return (
    <FacilityContext.Provider value={value}>
      {children}
    </FacilityContext.Provider>
  )
}

export function useFacility(): FacilityValue {
  const ctx = React.useContext(FacilityContext)
  if (!ctx) {
    throw new Error("useFacility must be used inside a <FacilityProvider>")
  }
  return ctx
}
