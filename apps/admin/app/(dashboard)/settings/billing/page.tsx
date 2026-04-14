import { BankIcon } from "@phosphor-icons/react/ssr"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function BillingPage() {
  return (
    <section className="flex p-4">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <BankIcon weight="duotone" className="text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>Facturación</EmptyTitle>
          <EmptyDescription>
            Gestiona cuentas bancarias, facturas y métodos de pago.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
