import { getLoans } from "@/data/loans"

import { LoansListing } from "../_components/loans-listing"

export default async function CreditosPage() {
  const loans = await getLoans()

  return (
    <main className="divide-y">
      <LoansListing title="Creditos Pacientes" loans={loans} />
    </main>
  )
}
