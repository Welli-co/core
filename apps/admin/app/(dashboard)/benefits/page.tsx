"use client"

import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

import { useFacility } from "@/contexts/facility-context"

import { PageHeader } from "../_components/page-header"
import { DiscountPreviewCard } from "./_components/discount-preview-card"

type MockDiscount = {
  id: string
  title: string
  description: string
  badge: string | null
}

const mockDiscounts: MockDiscount[] = [
  {
    id: "welcome-percentage",
    title: "Descuento de bienvenida",
    description:
      "10% de descuento en tu primer tratamiento de ortodoncia, válido durante el primer mes.",
    badge: "10%",
  },
  {
    id: "implant-2x1",
    title: "Implantes 2x1",
    description:
      "Lleva dos implantes al precio de uno. Aplica para tratamientos completos agendados este mes.",
    badge: "2x1",
  },
  {
    id: "cleaning-fixed",
    title: "Limpieza profunda",
    description:
      "Consigue tu limpieza profunda por un valor fijo, incluye revisión y diagnóstico.",
    badge: "$80.000",
  },
  {
    id: "whitening-since",
    title: "Blanqueamiento premium",
    description:
      "Sesión de blanqueamiento con tecnología LED incluida. Resultados desde la primera sesión.",
    badge: "Desde $150.000",
  },
]

export default function BenefitsPage() {
  const { currentFacility } = useFacility()

  return (
    <main className="divide-y">
      <PageHeader
        title="Welli Benefits"
        description="Administra los beneficios y descuentos disponibles para tus pacientes."
        actions={
          <Button render={<Link href="/benefits/discount/create" />}>
            Crear descuento
          </Button>
        }
      />
      <section className="p-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockDiscounts.map((discount) => (
            <DiscountPreviewCard
              key={discount.id}
              title={discount.title}
              description={discount.description}
              badge={discount.badge}
              facilityName={currentFacility.commercialName}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
