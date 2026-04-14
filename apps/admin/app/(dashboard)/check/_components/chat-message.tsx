"use client"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

import type { ChatMessage as ChatMessageType } from "@/data/chats"
import { avatarGradientByStatus, type LoanStatus } from "@/data/loans"

type ChatMessageProps = {
  message: ChatMessageType
  patientInitials: string
  patientStatus: LoanStatus
}

export function ChatMessage({
  message,
  patientInitials,
  patientStatus,
}: ChatMessageProps) {
  const isSystem = message.authorType === "system"

  return (
    <div
      className={cn(
        "flex max-w-full items-end gap-2.5",
        isSystem && "flex-row-reverse"
      )}
    >
      {!isSystem && (
        <Avatar className="size-8">
          <AvatarFallback
            className={cn(
              "text-xs font-semibold",
              avatarGradientByStatus[patientStatus]
            )}
          >
            {patientInitials}
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "flex max-w-[22rem] flex-col gap-1 rounded-2xl p-3 text-sm text-foreground",
          isSystem ? "rounded-br-sm bg-[#D0FECF]" : "rounded-bl-sm bg-muted"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{message.authorName}</span>
          <span className="text-xs text-muted-foreground">
            {message.sentAt}
          </span>
        </div>
        <p className="leading-snug">{message.body}</p>
      </div>
    </div>
  )
}
