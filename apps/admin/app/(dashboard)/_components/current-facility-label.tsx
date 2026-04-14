"use client"

import { Badge } from "@workspace/ui/components/badge"

import { useFacility } from "@/contexts/facility-context"

export function CurrentFacilityLabel() {
  const { currentFacility } = useFacility()

  return (
    <Badge
      variant="secondary"
      className="text-[0.625rem] font-semibold tracking-widest uppercase"
    >
      {currentFacility.commercialName}
    </Badge>
  )
}
