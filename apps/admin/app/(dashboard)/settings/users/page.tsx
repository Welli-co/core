import { getCollaborators } from "@/data/users"

import { UsersTable } from "./_components/users-table"

export default async function UsersPage() {
  const collaborators = await getCollaborators()

  return <UsersTable collaborators={collaborators} />
}
