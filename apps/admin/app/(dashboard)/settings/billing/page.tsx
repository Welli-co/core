import { getBankAccounts } from "@/data/bank-accounts"

import { BankAccountsTable } from "./_components/bank-accounts-table"

export default async function BillingPage() {
  const accounts = await getBankAccounts()

  return <BankAccountsTable accounts={accounts} />
}
