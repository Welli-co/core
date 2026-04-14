import { notFound } from "next/navigation"

import { getFacility } from "@/data/session"

import { FacilityForm } from "../_components/facility-form"

export default async function FacilityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const facility = await getFacility(id)

  if (!facility) {
    notFound()
  }

  return (
    <section className="p-4">
      <FacilityForm
        mode="edit"
        defaultValues={{
          commercialName: facility.commercialName,
          legalName: facility.legalName,
          operationAddress: facility.operationAddress,
          status:
            facility.status === "disabled" ? "onboarding" : facility.status,
        }}
      />
    </section>
  )
}
