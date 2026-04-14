import { BuildingsIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function FacilitiesPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <BuildingsIcon weight="duotone" className="text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>Sedes</EmptyTitle>
          <EmptyDescription>
            Administra las sedes y consultorios donde atiendes a tus pacientes.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
