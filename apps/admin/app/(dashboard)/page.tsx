import { TypographyH1 } from "@workspace/ui/components/typography"

import { Notifications } from "@/components/notifications"

export default function Page() {
  return (
    <main className="divide-y">
      <section className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-2">
          <TypographyH1 className="text-lg leading-none">
            Buenos días, Martina
          </TypographyH1>
          <p className="text-sm leading-none text-muted-foreground">
            Tienes{" "}
            <span className="font-semibold text-foreground">2 solicitudes</span>{" "}
            por desembolsar y{" "}
            <span className="font-semibold text-foreground">6 pacientes</span>{" "}
            pendientes de firma.
          </p>
        </div>
        <div className="flex gap-1">
          <Notifications />
        </div>
      </section>
      <section></section>
    </main>
  )
}
