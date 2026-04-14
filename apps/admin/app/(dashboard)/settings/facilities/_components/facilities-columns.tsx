"use client"

import Link from "next/link"
import type { ColumnDef } from "@tanstack/react-table"
import {
  Asclepius,
  CaretRightIcon,
  MapPinIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/ssr"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

import {
  facilityStatusLabels,
  facilityStatusStyles,
  type Facility,
} from "@/data/session"

/** Row model for the facilities table — Facility augmented with the
 *  collaborator count resolved server-side. */
export type FacilityRow = Facility & {
  collaboratorCount: number
}

export const facilityColumns: ColumnDef<FacilityRow>[] = [
  {
    id: "sede",
    header: "Sede",
    cell: ({ row }) => {
      const { commercialName, legalName, avatar } = row.original
      return (
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="size-9 rounded-lg">
            <AvatarImage src={avatar} alt={commercialName} />
            <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
              <Asclepius weight="fill" className="size-5" />
            </AvatarFallback>
          </Avatar>
          <div className="grid min-w-0 text-left leading-tight">
            <span className="truncate text-sm font-semibold">
              {commercialName}
            </span>
            <span className="truncate text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
              {legalName}
            </span>
          </div>
        </div>
      )
    },
  },
  {
    id: "operationAddress",
    header: "Dirección de operación",
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPinIcon
          weight="duotone"
          className="size-4 shrink-0 text-muted-foreground"
        />
        <span className="truncate">{row.original.operationAddress}</span>
      </div>
    ),
  },
  {
    id: "collaborators",
    header: "Colaboradores",
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground tabular-nums">
        <UsersThreeIcon
          weight="duotone"
          className="size-4 shrink-0 text-muted-foreground"
        />
        {row.original.collaboratorCount}
      </div>
    ),
  },
  {
    id: "status",
    header: "Estado",
    cell: ({ row }) => {
      const { status } = row.original
      return (
        <Badge variant="secondary" className={facilityStatusStyles[status]}>
          {facilityStatusLabels[status]}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Acciones</span>,
    size: 48,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={`Ver ${row.original.commercialName}`}
          render={<Link href={`/settings/facilities/${row.original.id}`} />}
        >
          <CaretRightIcon className="size-4" weight="bold" />
        </Button>
      </div>
    ),
  },
]
