"use client"

import * as React from "react"
import { MagnifyingGlassIcon } from "@phosphor-icons/react/ssr"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

import type { LoanApplication } from "@/data/loans"

import { DataTable } from "./data-table"
import { loanColumns } from "./loans-columns"
import { LoansToolbar } from "./loans-toolbar"

type LoansListingProps = {
  title: string
  badge?: React.ReactNode
  loans: LoanApplication[]
}

export function LoansListing({ title, badge, loans }: LoansListingProps) {
  const [search, setSearch] = React.useState("")

  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return loans
    return loans.filter(
      (loan) =>
        loan.patient.name.toLowerCase().includes(query) ||
        loan.patient.document.toLowerCase().includes(query) ||
        loan.patient.email.toLowerCase().includes(query) ||
        loan.patient.phone.toLowerCase().includes(query) ||
        loan.procedure.name.toLowerCase().includes(query) ||
        loan.id.toLowerCase().includes(query)
    )
  }, [loans, search])

  return (
    <>
      <LoansToolbar title={title} badge={badge} />
      <div className="flex items-center gap-2 px-3 py-2">
        <InputGroup className="max-w-sm">
          <InputGroupAddon align="inline-start">
            <MagnifyingGlassIcon weight="bold" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Buscar paciente, documento o crédito"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputGroup>
      </div>
      <DataTable columns={loanColumns} data={filtered} />
    </>
  )
}
