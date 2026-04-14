import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function WebchatPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <WhatsappLogoIcon
              weight="duotone"
              className="text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyTitle>Webchat</EmptyTitle>
          <EmptyDescription>
            Configura el chat en vivo para atender a tus pacientes desde tu
            sitio web.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
