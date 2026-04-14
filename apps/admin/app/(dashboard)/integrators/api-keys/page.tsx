import { KeyIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function ApiKeysPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <KeyIcon weight="duotone" className="text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>API Keys</EmptyTitle>
          <EmptyDescription>
            Gestiona las claves API para autenticar tus integraciones.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
