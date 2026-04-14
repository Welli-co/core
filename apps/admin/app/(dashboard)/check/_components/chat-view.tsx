"use client"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

import type { ChatConversation } from "@/data/chats"
import { avatarGradientByStatus, getInitials } from "@/data/loans"

import { ChatMessage } from "./chat-message"

type ChatViewProps = {
  conversation: ChatConversation
}

export function ChatView({ conversation }: ChatViewProps) {
  const initials = getInitials(conversation.patient.name)

  return (
    <section className="flex min-h-0 flex-col divide-y">
      <header className="flex max-h-18.25 min-h-18.25 items-center gap-3 p-4">
        <Avatar className="size-9">
          <AvatarFallback
            className={cn(
              "font-semibold",
              avatarGradientByStatus[conversation.status]
            )}
          >
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col gap-1">
          <span className="truncate text-base leading-none font-semibold">
            {conversation.patient.name}
          </span>
          <span className="truncate text-sm leading-none font-medium text-muted-foreground">
            last seen today at 3:30 PM
          </span>
        </div>
      </header>
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4">
        {conversation.messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            patientInitials={initials}
          />
        ))}
      </div>
    </section>
  )
}
