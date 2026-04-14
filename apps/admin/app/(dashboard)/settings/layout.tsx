import { TypographyH1 } from "@workspace/ui/components/typography"

import { SettingsTabs } from "./_components/settings-tabs"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="divide-y">
      <section className="flex flex-col gap-3 p-4">
        <TypographyH1 className="text-lg leading-none">
          Configuración
        </TypographyH1>
        <SettingsTabs />
      </section>
      {children}
    </main>
  )
}
