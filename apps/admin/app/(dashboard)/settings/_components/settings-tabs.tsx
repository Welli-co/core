"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

export const settingsTabs = [
  { href: "/settings/users", label: "Colaboradores" },
  { href: "/settings/facilities", label: "Sedes" },
  { href: "/settings/billing", label: "Cuentas bancarias" },
  { href: "/settings/legal", label: "Información legal" },
  { href: "/settings/branding", label: "Branding" },
] as const

export function SettingsTabs() {
  const pathname = usePathname()
  const active =
    settingsTabs.find((tab) => pathname.startsWith(tab.href))?.href ?? settingsTabs[0].href

  return (
    <Tabs value={active}>
      <TabsList variant="line" className="px-2">
        {settingsTabs.map((tab) => (
          <TabsTrigger
            key={tab.href}
            value={tab.href}
            render={<Link href={tab.href} />}
            className="px-2"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
