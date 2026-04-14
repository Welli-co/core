import { WebhooksLogoIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function WebhooksPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <WebhooksLogoIcon
              weight="duotone"
              className="text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyTitle>Webhooks</EmptyTitle>
          <EmptyDescription>
            Recibe notificaciones en tiempo real de los eventos de tu cuenta.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
