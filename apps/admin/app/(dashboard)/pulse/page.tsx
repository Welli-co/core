import { HeartbeatIcon } from "@phosphor-icons/react/dist/ssr"

import { PlaceholderPage } from "../_components/placeholder-page"

export default function PulsePage() {
  return (
    <PlaceholderPage
      title="Pulso"
      description="Resumen diario de tu actividad, solicitudes pendientes y métricas clave."
      icon={HeartbeatIcon}
    />
  )
}
