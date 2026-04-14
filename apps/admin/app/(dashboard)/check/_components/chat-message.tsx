"use client"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

import type { ChatMessage as ChatMessageType } from "@/data/chats"

const deliveryLabels: Record<
  NonNullable<ChatMessageType["deliveryStatus"]>,
  string
> = {
  sent: "Enviado",
  delivered: "Entregado",
  read: "Leído",
}

type ChatMessageProps = {
  message: ChatMessageType
  patientInitials: string
}

export function ChatMessage({ message, patientInitials }: ChatMessageProps) {
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
          <AvatarFallback className="text-xs font-semibold">
            {patientInitials}
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "flex max-w-[22rem] flex-col gap-1 rounded-2xl p-3 text-sm",
          isSystem
            ? "rounded-br-sm bg-emerald-500 text-white"
            : "rounded-bl-sm bg-muted text-foreground"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{message.authorName}</span>
          <span
            className={cn(
              "text-xs",
              isSystem ? "text-emerald-100" : "text-muted-foreground"
            )}
          >
            {message.sentAt}
          </span>
        </div>
        <p className="leading-snug">{message.body}</p>
        {isSystem && message.deliveryStatus && (
          <span className="self-end text-xs text-emerald-100">
            {deliveryLabels[message.deliveryStatus]}
          </span>
        )}
      </div>
    </div>
  )
}
