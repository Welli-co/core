import { getLoans } from "@/data/loans"

import { loanColumns } from "../_components/loans-columns"
import { LoansTable } from "../_components/loans-table"
import { LoansToolbar } from "../_components/loans-toolbar"

export default async function CreditosPage() {
  const loans = await getLoans()

  return (
    <main className="divide-y">
      <LoansToolbar title="Creditos Pacientes" />
      <LoansTable columns={loanColumns} data={loans} />
    </main>
  )
}
