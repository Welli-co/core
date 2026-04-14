import { ScalesIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function LegalPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <ScalesIcon weight="duotone" className="text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>Información legal</EmptyTitle>
          <EmptyDescription>
            Administra la información legal, documentos y datos tributarios de
            tu empresa.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
