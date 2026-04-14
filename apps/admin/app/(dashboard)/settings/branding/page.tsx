import { PaletteIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function BrandingPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <PaletteIcon weight="duotone" className="text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>Branding</EmptyTitle>
          <EmptyDescription>
            Personaliza el logo, los colores y la identidad visual que verán tus
            pacientes.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
