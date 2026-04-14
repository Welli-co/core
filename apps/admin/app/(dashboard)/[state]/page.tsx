import { notFound } from "next/navigation"
import {
  CheckCircleIcon,
  CircleDashedIcon,
  CircleHalfIcon,
  CircleIcon,
  CircleNotchIcon,
} from "@phosphor-icons/react/dist/ssr"
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

import { loanColumns } from "../_components/loans-columns"
import { LoansTable } from "../_components/loans-table"
import { LoansToolbar } from "../_components/loans-toolbar"

const statusIcons: Record<LoanStatus, React.ComponentType<{ className?: string; weight?: "fill" | "bold" | "regular" }>> = {
  "En revisión": CircleDashedIcon,
  Aprobado: CircleHalfIcon,
  "En progreso": CircleNotchIcon,
  Completado: CheckCircleIcon,
  Cerrado: CircleIcon,
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
  const Icon = statusIcons[status]

  return (
    <main className="divide-y">
      <LoansToolbar
        title="Creditos Pacientes"
        badge={
          <Badge
            variant="secondary"
            className={cn("text-sm", statusStyles[status])}
          >
            <Icon className="size-5" weight="fill" />
            {status}
          </Badge>
        }
      />
      <LoansTable columns={loanColumns} data={loans} />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(loanStateSlugs).map((state) => ({ state }))
}
