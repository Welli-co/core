import { PlugsConnectedIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function ConnectedIntegratorsPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <PlugsConnectedIcon
              weight="duotone"
              className="text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyTitle>Conectados</EmptyTitle>
          <EmptyDescription>
            Administra las integraciones que tienes activas en tu cuenta.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
