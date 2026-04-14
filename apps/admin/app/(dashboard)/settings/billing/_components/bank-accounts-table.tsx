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

import type { BankAccount } from "@/data/bank-accounts"

import { DataTable } from "../../../_components/data-table"

import { bankAccountColumns } from "./bank-accounts-columns"

type BankAccountsTableProps = {
  accounts: BankAccount[]
}

export function BankAccountsTable({ accounts }: BankAccountsTableProps) {
  const [search, setSearch] = React.useState("")

  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return accounts
    return accounts.filter(
      (account) =>
        account.accountNumber.toLowerCase().includes(query) ||
        account.bank.name.toLowerCase().includes(query) ||
        account.holder.name.toLowerCase().includes(query)
    )
  }, [accounts, search])

  return (
    <div className="flex flex-col divide-y">
      <div className="flex items-center justify-between gap-2 px-3 py-2">
        <InputGroup className="max-w-sm">
          <InputGroupAddon align="inline-start">
            <MagnifyingGlassIcon weight="bold" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Buscar cuenta bancaria"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputGroup>
        <Button render={<Link href="/settings/billing/create" />}>
          <PlusIcon weight="bold" data-icon="inline-start" />
          Agregar cuenta
        </Button>
      </div>
      <DataTable columns={bankAccountColumns} data={filtered} />
    </div>
  )
}
