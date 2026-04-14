"use client"

import Link from "next/link"
import type { ColumnDef } from "@tanstack/react-table"
import { CaretRightIcon, FileArrowDownIcon } from "@phosphor-icons/react/ssr"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

import {
  accountTypeLabels,
  documentTypeLabels,
  type BankAccount,
} from "@/data/bank-accounts"

export const bankAccountColumns: ColumnDef<BankAccount>[] = [
  {
    id: "account",
    header: "Cuenta",
    cell: ({ row }) => {
      const { bank, accountNumber, accountType } = row.original
      return (
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="size-9">
            <AvatarFallback
              className={cn(
                "bg-radial-[at_25%_25%] font-semibold text-white",
                bank.gradient
              )}
            >
              {bank.initial}
            </AvatarFallback>
          </Avatar>
          <div className="grid min-w-0 text-left leading-tight">
            <span className="truncate text-sm font-semibold">
              # {accountNumber}
            </span>
            <span className="truncate text-sm font-medium text-muted-foreground">
              {accountTypeLabels[accountType]}
            </span>
          </div>
        </div>
      )
    },
  },
  {
    id: "holder",
    header: "Titular",
    cell: ({ row }) => {
      const { holder } = row.original
      return (
        <div className="grid min-w-0 text-left leading-tight">
          <span className="truncate text-sm font-semibold">{holder.name}</span>
          <span className="truncate text-sm font-medium text-muted-foreground">
            {documentTypeLabels[holder.documentType]} {holder.documentNumber}
          </span>
        </div>
      )
    },
  },
  {
    id: "documents",
    header: () => <div className="text-right">Documentos</div>,
    cell: ({ row }) => {
      const { supportDocument } = row.original
      return (
        <div className="flex justify-end">
          <Button
            variant="secondary"
            className="rounded-full border-2 border-border"
            render={
              <a
                href={supportDocument.url}
                download={supportDocument.filename}
              />
            }
          >
            <FileArrowDownIcon weight="bold" data-icon="inline-start" />
            Descargar soporte bancario
          </Button>
        </div>
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
          aria-label="Ver cuenta"
          render={<Link href={`/settings/billing/${row.original.id}`} />}
        >
          <CaretRightIcon className="size-4" weight="bold" />
        </Button>
      </div>
    ),
  },
]
