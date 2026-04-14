import { PageHeader } from "../_components/page-header"

import { IntegratorsTabs } from "./_components/integrators-tabs"

export default function IntegratorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="divide-y">
      <PageHeader
        title="Integradores"
        description="Conecta Welli con tus herramientas externas y automatiza flujos."
      />
      <IntegratorsTabs />
      {children}
    </main>
  )
}
