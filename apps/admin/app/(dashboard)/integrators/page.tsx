import { UniteIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function IntegratorsPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UniteIcon weight="duotone" className="text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>Disponibles</EmptyTitle>
          <EmptyDescription>
            Explora las integraciones disponibles y conecta tus herramientas
            favoritas.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
