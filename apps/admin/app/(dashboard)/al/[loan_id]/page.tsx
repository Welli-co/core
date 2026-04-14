import { notFound } from "next/navigation"
import Link from "next/link"
import { CaretLeftIcon } from "@phosphor-icons/react/dist/ssr"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import {
  TypographyH1,
  TypographyMuted,
} from "@workspace/ui/components/typography"
import { cn } from "@workspace/ui/lib/utils"

import {
  currency,
  getInitials,
  getLoanById,
  statusStyles,
} from "@/data/loans"

export default async function LoanDetailPage({
  params,
}: {
  params: Promise<{ loan_id: string }>
}) {
  const { loan_id } = await params
  const loan = await getLoanById(loan_id)

  if (!loan) {
    notFound()
  }

  return (
    <main className="divide-y">
      <section className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon-sm" render={<Link href="/" />}>
            <CaretLeftIcon weight="bold" />
            <span className="sr-only">Volver</span>
          </Button>
          <TypographyH1 className="text-lg leading-none">
            Crédito {loan.id}
          </TypographyH1>
          <Badge
            variant="secondary"
            className={cn("text-sm", statusStyles[loan.status])}
          >
            {loan.status}
          </Badge>
        </div>
      </section>

      <section className="grid gap-4 p-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Titular</CardTitle>
            <CardDescription>Información del paciente</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarFallback className="font-semibold">
                  {getInitials(loan.patient.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-semibold">{loan.patient.name}</span>
                <TypographyMuted>{loan.patient.document}</TypographyMuted>
              </div>
            </div>
            <Separator />
            <dl className="grid gap-3 text-sm">
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">Teléfono</dt>
                <dd className="font-medium">{loan.patient.phone}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">Correo</dt>
                <dd className="font-medium">{loan.patient.email}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Crédito</CardTitle>
            <CardDescription>Detalle financiero</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <TypographyMuted>Monto solicitado</TypographyMuted>
              <span className="text-3xl font-semibold tracking-tight tabular-nums">
                {currency.format(loan.amount)}
              </span>
            </div>
            <Separator />
            <dl className="grid gap-3 text-sm">
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">ID</dt>
                <dd className="font-mono font-medium">{loan.id}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">Tasa E.A.</dt>
                <dd className="font-medium">23%</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">Solicitud</dt>
                <dd className="font-medium">{loan.appliedAt}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">Desembolso</dt>
                <dd className="font-medium">{loan.disbursedAt ?? "—"}</dd>
              </div>
              {loan.pendingAction && (
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Acción pendiente</dt>
                  <dd className="font-medium text-orange-700">
                    {loan.pendingAction}
                  </dd>
                </div>
              )}
            </dl>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
