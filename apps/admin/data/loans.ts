export type LoanStatus =
  | "En revisión"
  | "Aprobado"
  | "En progreso"
  | "Completado"
  | "Cerrado"
  | "Rechazado"

export type LoanApplication = {
  id: string
  patient: {
    name: string
    email: string
    phone: string
    document: string
  }
  procedure: {
    name: string
    specialty: string
  }
  amount: number
  status: LoanStatus
  appliedAt: string
  disbursedAt?: string
  pendingAction?: string
}

export const statusStyles: Record<LoanStatus, string> = {
  "En revisión": "bg-orange-100 text-orange-700 hover:bg-orange-100",
  Aprobado: "bg-sky-100 text-sky-700 hover:bg-sky-100",
  "En progreso": "bg-indigo-100 text-indigo-700 hover:bg-indigo-100",
  Completado: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  Cerrado: "bg-neutral-100 text-neutral-700 hover:bg-neutral-100",
  Rechazado: "bg-rose-100 text-rose-700 hover:bg-rose-100",
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
    procedure: {
      name: "Implante dental unitario",
      specialty: "Odontología",
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
    procedure: {
      name: "Ortodoncia correctiva",
      specialty: "Ortodoncia",
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
    procedure: {
      name: "Blanqueamiento dental",
      specialty: "Estética dental",
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
    procedure: {
      name: "Rehabilitación oral completa",
      specialty: "Rehabilitación oral",
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
    procedure: {
      name: "Endodoncia multirradicular",
      specialty: "Endodoncia",
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
    procedure: {
      name: "Cirugía maxilofacial",
      specialty: "Cirugía oral",
    },
    amount: 15_000_000,
    status: "Cerrado",
    appliedAt: "05 Abr 2026",
    disbursedAt: "08 Abr 2026",
  },
]

export const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
})

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export async function getLoans(): Promise<LoanApplication[]> {
  return loans
}

export const loanStateSlugs = {
  reviewing: "En revisión",
  approved: "Aprobado",
  "in-progress": "En progreso",
  completed: "Completado",
  closed: "Cerrado",
  rejected: "Rechazado",
} as const satisfies Record<string, LoanStatus>

export type LoanStateSlug = keyof typeof loanStateSlugs

export function isLoanStateSlug(value: string): value is LoanStateSlug {
  return value in loanStateSlugs
}

export async function getLoansByState(
  slug: LoanStateSlug
): Promise<LoanApplication[]> {
  const status = loanStateSlugs[slug]
  return loans.filter((loan) => loan.status === status)
}

export async function getLoanById(
  id: string
): Promise<LoanApplication | null> {
  return loans.find((loan) => loan.id === id) ?? null
}
