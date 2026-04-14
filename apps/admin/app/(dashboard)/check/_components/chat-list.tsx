"use client"

import { FileCsvIcon, PlusCircleIcon } from "@phosphor-icons/react/ssr"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@workspace/ui/components/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

import type { ChatConversation } from "@/data/chats"
import { avatarGradientByStatus, getInitials } from "@/data/loans"

import { PageHeader } from "../../_components/page-header"

type ChatListProps = {
  chats: ChatConversation[]
  activeId: string | undefined
  onSelect: (id: string) => void
}

export function ChatList({ chats, activeId, onSelect }: ChatListProps) {
  return (
    <aside className="flex min-h-0 flex-col divide-y">
      <PageHeader
        title="Chats"
        description="Welli Check WhatsApp"
        actions={
          <TooltipProvider delay={200}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="secondary"
                    className="border-2 border-border"
                    aria-label="Nueva conversación"
                  />
                }
              >
                <PlusCircleIcon className="size-5" />
              </TooltipTrigger>
              <TooltipContent>Nueva conversación</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="secondary"
                    className="border-2 border-border"
                    aria-label="Crear conversaciones en masa"
                  />
                }
              >
                <FileCsvIcon className="size-5" />
              </TooltipTrigger>
              <TooltipContent>Crear en masa</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
      />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Table>
          <TableBody>
            {chats.map((chat) => (
              <TableRow
                key={chat.id}
                data-state={chat.id === activeId ? "selected" : undefined}
                onClick={() => onSelect(chat.id)}
                className="cursor-pointer"
              >
                <TableCell className="py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar className="size-9">
                      <AvatarFallback
                        className={cn(
                          "font-semibold",
                          avatarGradientByStatus[chat.status]
                        )}
                      >
                        {getInitials(chat.patient.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid min-w-0 text-left leading-tight">
                      <span className="truncate text-sm font-semibold">
                        {chat.patient.name}
                      </span>
                      <span className="truncate text-sm text-muted-foreground">
                        {chat.lastMessage}
                      </span>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </aside>
  )
}
