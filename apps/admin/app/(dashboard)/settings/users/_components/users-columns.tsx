"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { CaretRightIcon } from "@phosphor-icons/react/ssr"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

import { getInitials } from "@/data/loans"
import {
  roleLabels,
  userStatusLabels,
  userStatusStyles,
  type Collaborator,
  type UserRole,
} from "@/data/users"

const avatarGradientByRole: Record<UserRole, string> = {
  owner: "bg-radial-[at_25%_25%] from-primary/60 to-primary text-primary-foreground",
  admin: "bg-radial-[at_25%_25%] from-sky-300 to-sky-600 text-white",
  manager: "bg-radial-[at_25%_25%] from-indigo-300 to-indigo-600 text-white",
  staff: "bg-radial-[at_25%_25%] from-neutral-300 to-neutral-600 text-white",
}

export const collaboratorColumns: ColumnDef<Collaborator>[] = [
  {
    id: "usuario",
    header: "Usuario",
    cell: ({ row }) => {
      const { name, email, role } = row.original
      return (
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="size-9">
            <AvatarFallback
              className={cn("font-semibold", avatarGradientByRole[role])}
            >
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="grid min-w-0 text-left leading-tight">
            <span className="truncate text-sm font-semibold">{name}</span>
            <span className="truncate text-sm font-medium text-muted-foreground">
              {email}
            </span>
          </div>
        </div>
      )
    },
  },
  {
    id: "rol",
    header: "Rol",
    cell: ({ row }) => (
      <Badge variant="secondary" className="font-medium">
        {roleLabels[row.original.role]}
      </Badge>
    ),
  },
  {
    id: "estado",
    header: "Estado",
    cell: ({ row }) => {
      const { status } = row.original
      return (
        <Badge variant="secondary" className={userStatusStyles[status]}>
          {userStatusLabels[status]}
        </Badge>
      )
    },
  },
  {
    id: "lastActivity",
    header: "Última actividad",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-muted-foreground">
        {row.original.lastActiveAt}
      </span>
    ),
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
          aria-label={`Ver ${row.original.name}`}
        >
          <CaretRightIcon className="size-4" weight="bold" />
        </Button>
      </div>
    ),
  },
]
