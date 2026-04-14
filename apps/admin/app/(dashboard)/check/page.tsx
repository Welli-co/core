import { getChats } from "@/data/chats"

import { ChatWorkspace } from "./_components/chat-workspace"

export default async function CheckPage() {
  const chats = await getChats()

  return <ChatWorkspace chats={chats} />
}
