import { notFound } from "next/navigation"
import type { IconWeight } from "@phosphor-icons/react"
import {
  CheckCircleIcon,
  CircleDashedIcon,
  CircleHalfIcon,
  ClockCountdownIcon,
  StopCircleIcon,
  XCircleIcon,
} from "@phosphor-icons/react/ssr"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

import {
  getLoansByState,
  isLoanStateSlug,
  loanStateSlugs,
  statusStyles,
  type LoanStateSlug,
  type LoanStatus,
} from "@/data/loans"

import { LoansListing } from "../_components/loans-listing"

const statusIcons: Record<
  LoanStatus,
  {
    icon: React.ComponentType<{ className?: string; weight?: IconWeight }>
    weight: IconWeight
  }
> = {
  "En revisión": { icon: CircleDashedIcon, weight: "bold" },
  Aprobado: { icon: CircleHalfIcon, weight: "fill" },
  "En progreso": { icon: ClockCountdownIcon, weight: "fill" },
  Completado: { icon: CheckCircleIcon, weight: "fill" },
  Cerrado: { icon: StopCircleIcon, weight: "fill" },
  Rechazado: { icon: XCircleIcon, weight: "fill" },
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state } = await params

  if (!isLoanStateSlug(state)) {
    notFound()
  }

  const slug = state as LoanStateSlug
  const status = loanStateSlugs[slug]
  const loans = await getLoansByState(slug)
  const { icon: Icon, weight } = statusIcons[status]

  return (
    <main className="divide-y">
      <LoansListing
        title="Creditos Pacientes"
        badge={
          <Badge
            variant="secondary"
            className={cn("text-sm", statusStyles[status])}
          >
            <Icon className="size-5" weight={weight} />
            {status}
          </Badge>
        }
        loans={loans}
      />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(loanStateSlugs).map((state) => ({ state }))
}
