"use client"

import type { IconWeight } from "@phosphor-icons/react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

export type NavMainItem = {
  title: string
  url: string
  icon: React.ElementType
  iconWeight?: IconWeight
  iconClassName?: string
  count?: number
}

export function NavMain({ items }: { items: NavMainItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-semibold tracking-wider text-muted-foreground uppercase">
        Creditos Pacientes
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              tooltip={item.title}
              render={<a href={item.url} />}
            >
              <item.icon
                weight={item.iconWeight}
                className={item.iconClassName}
              />
              <span>{item.title}</span>
            </SidebarMenuButton>
            {item.count !== undefined && (
              <SidebarMenuBadge className="bg-muted text-muted-foreground">
                {item.count}
              </SidebarMenuBadge>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
