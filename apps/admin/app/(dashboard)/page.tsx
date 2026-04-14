import {
  CalendarBlankIcon,
  CaretRightIcon,
  CircleHalfIcon,
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  MicrosoftExcelLogoIcon,
  SortAscendingIcon,
} from "@phosphor-icons/react/dist/ssr"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { TypographyH1 } from "@workspace/ui/components/typography"
import { cn } from "@workspace/ui/lib/utils"

type LoanStatus =
  | "En revisión"
  | "Aprobado"
  | "En progreso"
  | "Completado"
  | "Cerrado"

type LoanApplication = {
  id: string
  patient: {
    name: string
    email: string
    phone: string
    document: string
  }
  amount: number
  status: LoanStatus
  appliedAt: string
  disbursedAt?: string
  pendingAction?: string
}

const statusStyles: Record<LoanStatus, string> = {
  "En revisión": "bg-orange-100 text-orange-700 hover:bg-orange-100",
  Aprobado: "bg-sky-100 text-sky-700 hover:bg-sky-100",
  "En progreso": "bg-indigo-100 text-indigo-700 hover:bg-indigo-100",
  Completado: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  Cerrado: "bg-purple-100 text-purple-700 hover:bg-purple-100",
}

const loans: LoanApplication[] = [
  {
    id: "CR-10001",
    patient: {
      name: "María Fernández",
      email: "maria.fernandez@example.com",
      phone: "+57 301 234 5678",
      document: "CC 1.023.456.789",
    },
    amount: 4_500_000,
    status: "En revisión",
    appliedAt: "12 Abr 2026",
    pendingAction: "Revisar documentos",
  },
  {
    id: "CR-10002",
    patient: {
      name: "Carlos Ramírez",
      email: "carlos.ramirez@example.com",
      phone: "+57 312 876 5432",
      document: "CC 79.345.221",
    },
    amount: 8_200_000,
    status: "Aprobado",
    appliedAt: "11 Abr 2026",
    pendingAction: "Firma del paciente",
  },
  {
    id: "CR-10003",
    patient: {
      name: "Ana María López",
      email: "ana.lopez@example.com",
      phone: "+57 320 555 1122",
      document: "CC 52.112.908",
    },
    amount: 2_750_000,
    status: "En progreso",
    appliedAt: "10 Abr 2026",
    disbursedAt: "13 Abr 2026",
  },
  {
    id: "CR-10004",
    patient: {
      name: "Juan David Torres",
      email: "juan.torres@example.com",
      phone: "+57 315 998 7766",
      document: "CC 1.098.776.544",
    },
    amount: 12_300_000,
    status: "Completado",
    appliedAt: "08 Abr 2026",
    disbursedAt: "11 Abr 2026",
  },
  {
    id: "CR-10005",
    patient: {
      name: "Laura Gómez",
      email: "laura.gomez@example.com",
      phone: "+57 304 444 3322",
      document: "CC 43.887.221",
    },
    amount: 6_900_000,
    status: "En revisión",
    appliedAt: "07 Abr 2026",
    pendingAction: "Solicitar desembolso",
  },
  {
    id: "CR-10006",
    patient: {
      name: "Andrés Felipe Ortiz",
      email: "andres.ortiz@example.com",
      phone: "+57 318 222 8899",
      document: "CC 1.045.662.109",
    },
    amount: 15_000_000,
    status: "Cerrado",
    appliedAt: "05 Abr 2026",
    disbursedAt: "08 Abr 2026",
  },
]

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
})

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export default function Page() {
  return (
    <main className="divide-y">
      <section className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <TypographyH1 className="text-lg leading-none">
            Creditos Pacientes
          </TypographyH1>
          <Badge
            variant="secondary"
            className={cn("text-sm", statusStyles.Aprobado)}
          >
            <CircleHalfIcon weight="fill" className="size-5" />
            Aprobado
          </Badge>
        </div>
        <TooltipProvider delay={200}>
          <div className="flex gap-1">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="secondary"
                    className="border border-border"
                    aria-label="Buscar"
                  />
                }
              >
                <MagnifyingGlassIcon className="size-4" weight="bold" />
              </TooltipTrigger>
              <TooltipContent>Buscar</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="secondary"
                    className="border border-border"
                    aria-label="Calendario"
                  />
                }
              >
                <CalendarBlankIcon className="size-4" weight="bold" />
              </TooltipTrigger>
              <TooltipContent>Calendario</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="secondary"
                    className="border border-border"
                    aria-label="Ordenar"
                  />
                }
              >
                <SortAscendingIcon className="size-4" weight="bold" />
              </TooltipTrigger>
              <TooltipContent>Ordenar</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="secondary"
                    className="border border-border"
                    aria-label="Filtrar"
                  />
                }
              >
                <FunnelSimpleIcon className="size-4" weight="bold" />
              </TooltipTrigger>
              <TooltipContent>Filtrar</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Exportar"
                    className="border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                  />
                }
              >
                <MicrosoftExcelLogoIcon className="size-5" weight="duotone" />
              </TooltipTrigger>
              <TooltipContent>Exportar a Excel</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </section>
      <div className="grid grid-cols-[2fr_2fr_2fr_1fr] items-center gap-4 px-4 py-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        <span>Holder</span>
        <span>Contacto</span>
        <span>Timeline</span>
        <span className="text-right">Credito</span>
      </div>
      <section className="divide-y">
        {loans.map((loan) => (
          <article
            key={loan.id}
            className="grid grid-cols-[2fr_2fr_2fr_1fr_auto] items-center gap-4 px-4 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback className="font-semibold">
                  {getInitials(loan.patient.name)}
                </AvatarFallback>
              </Avatar>
              <div className="grid min-w-0 text-left leading-tight">
                <span className="truncate text-sm font-semibold">
                  {loan.patient.name}
                </span>
                <span className="truncate text-sm font-medium text-muted-foreground">
                  {loan.patient.document}
                </span>
              </div>
            </div>
            <div className="grid min-w-0 text-left leading-tight">
              <span className="truncate text-sm font-medium">
                {loan.patient.phone}
              </span>
              <span className="truncate text-sm font-medium text-muted-foreground">
                {loan.patient.email}
              </span>
            </div>
            <div className="grid min-w-0 text-left leading-tight">
              <span className="truncate text-sm font-medium">
                Solicitud — {loan.appliedAt}
              </span>
              {loan.disbursedAt ? (
                <span className="truncate text-sm font-medium text-muted-foreground">
                  Desembolso — {loan.disbursedAt}
                </span>
              ) : loan.pendingAction ? (
                <span className="truncate text-sm font-medium text-orange-700">
                  Pendiente — {loan.pendingAction}
                </span>
              ) : (
                <span className="truncate text-sm font-medium text-muted-foreground">
                  Desembolso — —
                </span>
              )}
            </div>
            <div className="flex flex-col items-end">
              <span className="text-lg font-semibold tracking-tight tabular-nums">
                {currency.format(loan.amount)}
              </span>
              <div className="flex gap-1">
                <Badge
                  variant="secondary"
                  className={statusStyles[loan.status]}
                >
                  # 232412
                </Badge>
                <Badge
                  variant="secondary"
                  className={statusStyles[loan.status]}
                >
                  E.A 23%
                </Badge>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
