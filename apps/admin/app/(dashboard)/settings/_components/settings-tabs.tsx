"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

const tabs = [
  { href: "/settings/users", label: "Users" },
  { href: "/settings/facilities", label: "Facilities" },
  { href: "/settings/webchat", label: "Webchat" },
  { href: "/settings/billing", label: "Billing" },
] as const

export function SettingsTabs() {
  const pathname = usePathname()
  const active = tabs.find((tab) => pathname.startsWith(tab.href))?.href ?? tabs[0].href

  return (
    <Tabs value={active}>
      <TabsList variant="line">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.href}
            value={tab.href}
            render={<Link href={tab.href} />}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
