"use client"

import type { ColumnDef } from "@tanstack/react-table"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

import {
  currency,
  getInitials,
  statusStyles,
  type LoanApplication,
  type LoanStatus,
} from "@/data/loans"

const avatarGradientByStatus: Record<LoanStatus, string> = {
  "En revisión":
    "bg-radial-[at_25%_25%] from-orange-300 to-orange-600 text-white",
  Aprobado: "bg-radial-[at_25%_25%] from-sky-300 to-sky-600 text-white",
  "En progreso":
    "bg-radial-[at_25%_25%] from-indigo-300 to-indigo-600 text-white",
  Completado:
    "bg-radial-[at_25%_25%] from-emerald-300 to-emerald-600 text-white",
  Cerrado: "bg-radial-[at_25%_25%] from-purple-300 to-purple-600 text-white",
}

export const loanColumns: ColumnDef<LoanApplication>[] = [
  {
    id: "holder",
    header: "Titular",
    cell: ({ row }) => {
      const { patient, status } = row.original
      return (
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="size-9">
            <AvatarFallback
              className={cn("font-semibold", avatarGradientByStatus[status])}
            >
              {getInitials(patient.name)}
            </AvatarFallback>
          </Avatar>
          <div className="grid min-w-0 text-left leading-tight">
            <span className="truncate text-sm font-semibold">
              {patient.name}
            </span>
            <span className="truncate text-sm font-medium text-muted-foreground">
              {patient.document}
            </span>
          </div>
        </div>
      )
    },
  },
  {
    id: "contacto",
    header: "Contacto",
    cell: ({ row }) => {
      const { patient } = row.original
      return (
        <div className="grid min-w-0 text-left leading-tight">
          <span className="truncate text-sm font-medium">{patient.phone}</span>
          <span className="truncate text-sm font-medium text-muted-foreground">
            {patient.email}
          </span>
        </div>
      )
    },
  },
  {
    id: "timeline",
    header: "Cronología",
    cell: ({ row }) => {
      const loan = row.original
      return (
        <div className="grid min-w-0 text-left leading-tight">
          <span className="truncate text-sm font-medium">
            Solicitud — {loan.appliedAt}
          </span>
          {loan.disbursedAt ? (
            <span className="truncate text-sm font-medium text-muted-foreground">
              Desembolso — {loan.disbursedAt}
            </span>
          ) : loan.pendingAction ? (
            <span className="truncate text-sm font-medium text-orange-700">
              Pendiente — {loan.pendingAction}
            </span>
          ) : (
            <span className="truncate text-sm font-medium text-muted-foreground">
              Desembolso — —
            </span>
          )}
        </div>
      )
    },
  },
  {
    id: "credito",
    header: () => <div className="text-right">Crédito</div>,
    cell: ({ row }) => {
      const loan = row.original
      return (
        <div className="flex flex-col items-end">
          <span className="text-lg font-semibold tracking-tight tabular-nums">
            {currency.format(loan.amount)}
          </span>
          <div className="flex gap-1">
            <Badge variant="secondary" className={statusStyles[loan.status]}>
              # {loan.id.replace(/\D/g, "").slice(-6)}
            </Badge>
            <Badge variant="secondary" className={statusStyles[loan.status]}>
              E.A 23%
            </Badge>
          </div>
        </div>
      )
    },
  },
]
