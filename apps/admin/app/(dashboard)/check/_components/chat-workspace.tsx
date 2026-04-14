"use client"

import * as React from "react"

import type { ChatConversation } from "@/data/chats"

import { ChatList } from "./chat-list"
import { ChatView } from "./chat-view"

type ChatWorkspaceProps = {
  chats: ChatConversation[]
}

export function ChatWorkspace({ chats }: ChatWorkspaceProps) {
  const [activeId, setActiveId] = React.useState<string | undefined>(
    chats[0]?.id
  )

  const active =
    chats.find((conversation) => conversation.id === activeId) ?? chats[0]

  return (
    <main className="grid h-full grid-cols-[26rem_1fr] divide-x">
      <ChatList chats={chats} activeId={activeId} onSelect={setActiveId} />
      {active && <ChatView conversation={active} />}
    </main>
  )
}
