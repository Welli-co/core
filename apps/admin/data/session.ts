// ─── Modules & actions ────────────────────────────────────────────────────
// Modules that the app exposes. Used both for the permissions strings and
// the facility feature flags.
export type Module =
  | "credits"
  | "benefits"
  | "check"
  | "widget"
  | "integrators"
  | "patients"
  | "billing"
  | "facilities"
  | "users"
  | "legal"
  | "settings"

// Actions are kept open as a string template to allow custom verbs per module
// without constantly updating a union. Use the `Action` alias at call sites
// that want to narrow.
export type Action =
  | "read"
  | "write"
  | "create"
  | "update"
  | "delete"
  | "approve"
  | "reject"
  | "manage"

// ─── Permission strings ───────────────────────────────────────────────────
// Template literal types give autocomplete + catch typos at compile time.
//   org:<module>:<action>       — applies across the whole organization
//   facility:<module>:<action>  — applies to a single facility (stored on
//                                 the Facility itself so it's naturally
//                                 scoped and supports different permissions
//                                 per facility for the same user).
export type OrgPermission = `org:${Module}:${Action}`
export type FacilityPermission = `facility:${Module}:${Action}`

// ─── User ─────────────────────────────────────────────────────────────────
export type User = {
  name: string
  email: string
  avatar: string
  // Organization-wide permissions the user holds regardless of facility.
  permissions: OrgPermission[]
}

// ─── Facility ─────────────────────────────────────────────────────────────
export type FacilityLogo = "command" | "map-pin"

export type FacilityStatus = "active" | "onboarding" | "disabled"

export const facilityStatusLabels: Record<FacilityStatus, string> = {
  active: "Activa",
  onboarding: "En onboarding",
  disabled: "Deshabilitada",
}

export const facilityStatusStyles: Record<FacilityStatus, string> = {
  active: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  onboarding: "bg-sky-100 text-sky-700 hover:bg-sky-100",
  disabled: "bg-neutral-100 text-neutral-700 hover:bg-neutral-100",
}

export type Facility = {
  id: string
  commercialName: string
  legalName: string
  logo: FacilityLogo
  avatar?: string
  // Street-level address where patients are actually seen.
  operationAddress: string
  // Operational state of the facility (drives filtering + badges).
  status: FacilityStatus
  // Modules this facility has turned on. Drives feature gating in the UI.
  featureFlags: Module[]
  // Permissions the current user has ON this facility. Lets a single user
  // have different capabilities across facilities.
  permissions: FacilityPermission[]
}

// ─── Session ──────────────────────────────────────────────────────────────
export type Session = {
  user: User
  facilities: Facility[]
}

// ─── Mock data ────────────────────────────────────────────────────────────
const session: Session = {
  user: {
    name: "Felipe W.",
    email: "felipe@welli.com.co",
    avatar: "",
    permissions: [
      "org:settings:read",
      "org:settings:write",
      "org:users:manage",
      "org:facilities:manage",
      "org:billing:read",
      "org:legal:read",
    ],
  },
  facilities: [
    {
      id: "la-playa",
      commercialName: "Dentix Sede La Playa",
      legalName: "DENTIX S.A.S",
      logo: "command",
      operationAddress: "Calle 85 #12-45, Chapinero, Bogotá",
      status: "active",
      featureFlags: [
        "credits",
        "benefits",
        "check",
        "widget",
        "integrators",
        "patients",
      ],
      permissions: [
        "facility:credits:read",
        "facility:credits:write",
        "facility:credits:approve",
        "facility:benefits:read",
        "facility:benefits:write",
        "facility:check:read",
        "facility:widget:read",
        "facility:widget:write",
        "facility:integrators:manage",
        "facility:patients:read",
        "facility:patients:write",
      ],
    },
    {
      id: "chapinero",
      commercialName: "Dentix Sede Chapinero",
      legalName: "DENTIX S.A.S",
      logo: "map-pin",
      operationAddress: "Carrera 7 #53-10, Chapinero, Bogotá",
      status: "active",
      featureFlags: ["credits", "benefits", "patients"],
      permissions: [
        "facility:credits:read",
        "facility:credits:write",
        "facility:benefits:read",
        "facility:patients:read",
      ],
    },
    {
      id: "suba-subsidiada",
      commercialName: "Dentix Sede Suba Subsidiada",
      legalName: "DENTIX S.A.S",
      logo: "map-pin",
      operationAddress: "Avenida Suba #104-80, Suba, Bogotá",
      status: "onboarding",
      featureFlags: ["credits", "patients"],
      permissions: ["facility:credits:read", "facility:patients:read"],
    },
  ],
}

export async function getSession(): Promise<Session> {
  return session
}

export async function getFacilities(): Promise<Facility[]> {
  return session.facilities
}

export async function getFacility(id: string): Promise<Facility | null> {
  return session.facilities.find((facility) => facility.id === id) ?? null
}

// ─── Permission helpers ───────────────────────────────────────────────────
// Thin helpers so UI code doesn't re-implement the string check inline.

export function hasOrgPermission(
  user: User,
  permission: OrgPermission
): boolean {
  return user.permissions.includes(permission)
}

export function hasFacilityPermission(
  facility: Facility,
  permission: FacilityPermission
): boolean {
  return facility.permissions.includes(permission)
}

export function facilityHasModule(facility: Facility, module: Module): boolean {
  return facility.featureFlags.includes(module)
}
