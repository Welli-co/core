import Link from "next/link"
import { notFound } from "next/navigation"
import {
  FileArrowDownIcon,
  PencilSimpleIcon,
  XIcon,
} from "@phosphor-icons/react/ssr"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
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
  TypographyMuted,
  TypographySmall,
} from "@workspace/ui/components/typography"
import { cn } from "@workspace/ui/lib/utils"

import {
  accountTypeLabels,
  documentTypeLabels,
  getBankAccountById,
} from "@/data/bank-accounts"

import { PageHeader } from "../../../_components/page-header"

export default async function BankAccountDetailPage({
  params,
}: {
  params: Promise<{ account_id: string }>
}) {
  const { account_id } = await params
  const account = await getBankAccountById(account_id)

  if (!account) {
    notFound()
  }

  return (
    <main className="divide-y">
      <PageHeader
        title={`Cuenta # ${account.accountNumber}`}
        description={`${account.bank.name} · ${accountTypeLabels[account.accountType]}`}
        actions={
          <Button
            variant="secondary"
            size="icon"
            className="border-2 border-border"
            aria-label="Cerrar"
            render={<Link href="/settings/billing" />}
          >
            <XIcon className="size-4" weight="bold" />
          </Button>
        }
      />
      <section className="p-4">
        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarFallback
                  className={cn(
                    "bg-radial-[at_25%_25%] text-lg font-semibold text-white",
                    account.bank.gradient
                  )}
                >
                  {account.bank.initial}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <CardTitle>{account.bank.name}</CardTitle>
                <CardDescription>
                  {accountTypeLabels[account.accountType]}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <TypographySmall className="text-muted-foreground">
                  Número de cuenta
                </TypographySmall>
                <TypographyMuted className="font-mono text-sm font-medium text-foreground">
                  {account.accountNumber}
                </TypographyMuted>
              </div>
              <div className="flex flex-col gap-1">
                <TypographySmall className="text-muted-foreground">
                  Tipo de cuenta
                </TypographySmall>
                <TypographyMuted className="text-sm font-medium text-foreground">
                  {accountTypeLabels[account.accountType]}
                </TypographyMuted>
              </div>
            </dl>
            <Separator />
            <div className="flex flex-col gap-4">
              <TypographySmall className="text-muted-foreground uppercase tracking-wider">
                Titular de la cuenta
              </TypographySmall>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <TypographySmall className="text-muted-foreground">
                    Nombre
                  </TypographySmall>
                  <TypographyMuted className="text-sm font-medium text-foreground">
                    {account.holder.name}
                  </TypographyMuted>
                </div>
                <div className="flex flex-col gap-1">
                  <TypographySmall className="text-muted-foreground">
                    Identificación
                  </TypographySmall>
                  <TypographyMuted className="font-mono text-sm font-medium text-foreground">
                    {documentTypeLabels[account.holder.documentType]}{" "}
                    {account.holder.documentNumber}
                  </TypographyMuted>
                </div>
              </dl>
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <TypographySmall>Soporte bancario</TypographySmall>
                <TypographyMuted className="text-xs">
                  {account.supportDocument.filename}
                </TypographyMuted>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full border-2 border-border"
                render={
                  <a
                    href={account.supportDocument.url}
                    download={account.supportDocument.filename}
                  />
                }
              >
                <FileArrowDownIcon weight="bold" data-icon="inline-start" />
                Descargar
              </Button>
            </div>
          </CardContent>
          <div className="flex justify-end gap-2 border-t px-6 py-4">
            <Button
              type="button"
              variant="outline"
              render={<Link href="/settings/billing" />}
            >
              Volver
            </Button>
            <Button type="button">
              <PencilSimpleIcon weight="bold" data-icon="inline-start" />
              Editar cuenta
            </Button>
          </div>
        </Card>
      </section>
    </main>
  )
}
