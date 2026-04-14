import { CircleHalfIcon } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

import { getLoans, statusStyles } from "@/data/loans"

import { loanColumns } from "./_components/loans-columns"
import { LoansTable } from "./_components/loans-table"
import { LoansToolbar } from "./_components/loans-toolbar"

export default async function Page() {
  const loans = await getLoans()

  return (
    <main className="divide-y">
      <LoansToolbar
        title="Creditos Pacientes"
        badge={
          <Badge
            variant="secondary"
            className={cn("text-sm", statusStyles.Aprobado)}
          >
            <CircleHalfIcon weight="fill" className="size-5" />
            Aprobado
          </Badge>
        }
      />
      <LoansTable columns={loanColumns} data={loans} />
    </main>
  )
}
