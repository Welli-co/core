import { getFacilities } from "@/data/session"
import { getCollaboratorCountByFacility } from "@/data/users"

import { FacilitiesTable } from "./_components/facilities-table"

export default async function FacilitiesPage() {
  const [facilities, countByFacility] = await Promise.all([
    getFacilities(),
    getCollaboratorCountByFacility(),
  ])

  const rows = facilities.map((facility) => ({
    ...facility,
    collaboratorCount: countByFacility[facility.id] ?? 0,
  }))

  return <FacilitiesTable facilities={rows} />
}
