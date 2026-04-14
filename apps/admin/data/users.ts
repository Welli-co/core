export type UserRole = "owner" | "admin" | "manager" | "staff"
export type UserStatus = "active" | "invited" | "disabled"

export type Collaborator = {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  lastActiveAt: string
  // Facilities this collaborator belongs to. Drives per-facility counts
  // and access controls.
  facilityIds: string[]
}

export const roleLabels: Record<UserRole, string> = {
  owner: "Propietario",
  admin: "Administrador",
  manager: "Gestor",
  staff: "Colaborador",
}

export const userStatusLabels: Record<UserStatus, string> = {
  active: "Activo",
  invited: "Invitado",
  disabled: "Deshabilitado",
}

export const userStatusStyles: Record<UserStatus, string> = {
  active: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  invited: "bg-sky-100 text-sky-700 hover:bg-sky-100",
  disabled: "bg-neutral-100 text-neutral-700 hover:bg-neutral-100",
}

const collaborators: Collaborator[] = [
  {
    id: "COL-001",
    name: "Martina Acosta",
    email: "martina.acosta@dentix.com",
    role: "owner",
    status: "active",
    lastActiveAt: "Hoy, 10:24",
    facilityIds: ["la-playa", "chapinero", "suba-subsidiada"],
  },
  {
    id: "COL-002",
    name: "Sebastián Ramírez",
    email: "sebastian.ramirez@dentix.com",
    role: "admin",
    status: "active",
    lastActiveAt: "Ayer, 18:40",
    facilityIds: ["la-playa", "chapinero"],
  },
  {
    id: "COL-003",
    name: "Camila Torres",
    email: "camila.torres@dentix.com",
    role: "manager",
    status: "active",
    lastActiveAt: "12 Abr 2026",
    facilityIds: ["la-playa"],
  },
  {
    id: "COL-004",
    name: "Laura Gómez",
    email: "laura.gomez@dentix.com",
    role: "staff",
    status: "active",
    lastActiveAt: "10 Abr 2026",
    facilityIds: ["chapinero"],
  },
  {
    id: "COL-005",
    name: "Andrés Felipe Ortiz",
    email: "andres.ortiz@dentix.com",
    role: "staff",
    status: "invited",
    lastActiveAt: "—",
    facilityIds: ["suba-subsidiada"],
  },
  {
    id: "COL-006",
    name: "Valeria Rojas",
    email: "valeria.rojas@dentix.com",
    role: "staff",
    status: "disabled",
    lastActiveAt: "15 Mar 2026",
    facilityIds: ["la-playa"],
  },
]

export async function getCollaborators(): Promise<Collaborator[]> {
  return collaborators
}

/**
 * Returns a map of facilityId → number of collaborators associated with
 * that facility. Disabled collaborators are excluded so the UI shows the
 * "active people count" by default.
 */
export async function getCollaboratorCountByFacility(): Promise<
  Record<string, number>
> {
  const counts: Record<string, number> = {}
  for (const collaborator of collaborators) {
    if (collaborator.status === "disabled") continue
    for (const facilityId of collaborator.facilityIds) {
      counts[facilityId] = (counts[facilityId] ?? 0) + 1
    }
  }
  return counts
}

export async function getCollaboratorsByFacility(
  facilityId: string
): Promise<Collaborator[]> {
  return collaborators.filter((collaborator) =>
    collaborator.facilityIds.includes(facilityId)
  )
}
