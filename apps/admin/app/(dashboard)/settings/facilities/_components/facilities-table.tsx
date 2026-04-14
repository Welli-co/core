"use client"

import * as React from "react"
import Link from "next/link"
import { MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react/ssr"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

import { DataTable } from "../../../_components/data-table"
import { facilityColumns, type FacilityRow } from "./facilities-columns"

type FacilitiesTableProps = {
  facilities: FacilityRow[]
}

export function FacilitiesTable({ facilities }: FacilitiesTableProps) {
  const [search, setSearch] = React.useState("")

  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return facilities
    return facilities.filter(
      (facility) =>
        facility.commercialName.toLowerCase().includes(query) ||
        facility.legalName.toLowerCase().includes(query) ||
        facility.operationAddress.toLowerCase().includes(query)
    )
  }, [facilities, search])

  return (
    <div className="flex flex-col divide-y">
      <div className="flex items-center justify-between gap-2 px-3 py-2">
        <InputGroup className="max-w-sm">
          <InputGroupAddon align="inline-start">
            <MagnifyingGlassIcon weight="bold" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Buscar sede"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputGroup>
        <Button render={<Link href="/settings/facilities/add" />}>
          <PlusIcon weight="bold" data-icon="inline-start" />
          Agregar sede
        </Button>
      </div>
      <DataTable columns={facilityColumns} data={filtered} />
    </div>
  )
}
