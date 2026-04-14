"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

const tabs = [
  { href: "/integrators", label: "Disponibles" },
  { href: "/integrators/connected", label: "Conectados" },
  { href: "/integrators/webhooks", label: "Webhooks" },
  { href: "/integrators/api-keys", label: "API Keys" },
] as const

export function IntegratorsTabs() {
  const pathname = usePathname()
  const active =
    [...tabs]
      .sort((a, b) => b.href.length - a.href.length)
      .find(
        (tab) => pathname === tab.href || pathname.startsWith(`${tab.href}/`)
      )?.href ?? tabs[0].href

  return (
    <Tabs value={active}>
      <TabsList variant="line" className="px-2">
        {tabs.map((tab) => (
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
