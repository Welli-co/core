import { PageHeader } from "../_components/page-header"

import { SettingsTabs } from "./_components/settings-tabs"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="divide-y">
      <PageHeader
        title="Configuración"
        description="Adminstra tus usuarios, sedes, cuentas bancarias e información legal"
      />
      <SettingsTabs />
      {children}
    </main>
  )
}
