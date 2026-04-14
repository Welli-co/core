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
import type { Collaborator } from "@/data/users"

import { collaboratorColumns } from "./users-columns"

type UsersTableProps = {
  collaborators: Collaborator[]
}

export function UsersTable({ collaborators }: UsersTableProps) {
  const [search, setSearch] = React.useState("")

  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return collaborators
    return collaborators.filter(
      (collaborator) =>
        collaborator.name.toLowerCase().includes(query) ||
        collaborator.email.toLowerCase().includes(query)
    )
  }, [collaborators, search])

  return (
    <div className="flex flex-col divide-y">
      <div className="flex items-center justify-between gap-2 px-3 py-2">
        <InputGroup className="max-w-sm">
          <InputGroupAddon align="inline-start">
            <MagnifyingGlassIcon weight="bold" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Buscar colaborador"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputGroup>
        <Button render={<Link href="/settings/users/invite" />}>
          <PlusIcon weight="bold" data-icon="inline-start" />
          Invitar colaborador
        </Button>
      </div>
      <DataTable columns={collaboratorColumns} data={filtered} />
    </div>
  )
}
