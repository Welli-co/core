export type BankAccountType = "savings" | "checking"
export type DocumentType = "CC" | "CE" | "NIT" | "PP"

export type BankAccount = {
  id: string
  bank: {
    id: string
    name: string
    gradient: string
    initial: string
  }
  accountType: BankAccountType
  accountNumber: string
  holder: {
    name: string
    documentType: DocumentType
    documentNumber: string
  }
  supportDocument: {
    url: string
    filename: string
  }
}

export const accountTypeLabels: Record<BankAccountType, string> = {
  savings: "Cuenta de ahorros",
  checking: "Cuenta corriente",
}

export const documentTypeLabels: Record<DocumentType, string> = {
  CC: "CC",
  CE: "CE",
  NIT: "NIT",
  PP: "Pasaporte",
}

const accounts: BankAccount[] = [
  {
    id: "BA-001",
    bank: {
      id: "bancolombia",
      name: "Bancolombia",
      gradient: "from-yellow-400 to-yellow-600",
      initial: "B",
    },
    accountType: "savings",
    accountNumber: "902 456 7890",
    holder: {
      name: "Dentix S.A.S",
      documentType: "NIT",
      documentNumber: "900.123.456-7",
    },
    supportDocument: {
      url: "#",
      filename: "soporte-bancario-bancolombia.pdf",
    },
  },
  {
    id: "BA-002",
    bank: {
      id: "davivienda",
      name: "Davivienda",
      gradient: "from-rose-400 to-rose-600",
      initial: "D",
    },
    accountType: "checking",
    accountNumber: "4567 890 123",
    holder: {
      name: "Dentix Sede La Playa",
      documentType: "NIT",
      documentNumber: "900.123.456-7",
    },
    supportDocument: {
      url: "#",
      filename: "soporte-bancario-davivienda.pdf",
    },
  },
  {
    id: "BA-003",
    bank: {
      id: "banco-de-bogota",
      name: "Banco de Bogotá",
      gradient: "from-sky-400 to-sky-600",
      initial: "B",
    },
    accountType: "savings",
    accountNumber: "118 345 678 9",
    holder: {
      name: "Martina Acosta",
      documentType: "CC",
      documentNumber: "1.023.456.789",
    },
    supportDocument: {
      url: "#",
      filename: "soporte-bancario-banco-de-bogota.pdf",
    },
  },
  {
    id: "BA-004",
    bank: {
      id: "nequi",
      name: "Nequi",
      gradient: "from-purple-400 to-purple-700",
      initial: "N",
    },
    accountType: "savings",
    accountNumber: "301 234 5678",
    holder: {
      name: "Sebastián Ramírez",
      documentType: "CC",
      documentNumber: "79.345.221",
    },
    supportDocument: {
      url: "#",
      filename: "soporte-bancario-nequi.pdf",
    },
  },
  {
    id: "BA-005",
    bank: {
      id: "bbva",
      name: "BBVA",
      gradient: "from-blue-500 to-blue-800",
      initial: "B",
    },
    accountType: "checking",
    accountNumber: "0011 2233 4455",
    holder: {
      name: "Camila Torres",
      documentType: "CC",
      documentNumber: "52.112.908",
    },
    supportDocument: {
      url: "#",
      filename: "soporte-bancario-bbva.pdf",
    },
  },
]

export async function getBankAccounts(): Promise<BankAccount[]> {
  return accounts
}

export async function getBankAccountById(
  id: string
): Promise<BankAccount | null> {
  return accounts.find((account) => account.id === id) ?? null
}

// Banks available to select when creating a new account. Kept in sync with
// the brand gradients used in the list avatars.
export type BankOption = {
  id: string
  name: string
  gradient: string
  initial: string
}

export const availableBanks: BankOption[] = [
  {
    id: "bancolombia",
    name: "Bancolombia",
    gradient: "from-yellow-400 to-yellow-600",
    initial: "B",
  },
  {
    id: "davivienda",
    name: "Davivienda",
    gradient: "from-rose-400 to-rose-600",
    initial: "D",
  },
  {
    id: "banco-de-bogota",
    name: "Banco de Bogotá",
    gradient: "from-sky-400 to-sky-600",
    initial: "B",
  },
  {
    id: "nequi",
    name: "Nequi",
    gradient: "from-purple-400 to-purple-700",
    initial: "N",
  },
  {
    id: "bbva",
    name: "BBVA",
    gradient: "from-blue-500 to-blue-800",
    initial: "B",
  },
  {
    id: "banco-popular",
    name: "Banco Popular",
    gradient: "from-emerald-400 to-emerald-600",
    initial: "P",
  },
]
