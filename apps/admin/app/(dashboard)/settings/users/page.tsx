import { UsersThreeIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function UsersPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UsersThreeIcon weight="duotone" className="text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>Usuarios</EmptyTitle>
          <EmptyDescription>
            Invita, gestiona y asigna roles a los usuarios de tu empresa.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
