"use client"

import type { IconWeight } from "@phosphor-icons/react"
import { ArrowUpRight } from "@phosphor-icons/react/ssr"
import { usePathname } from "next/navigation"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { cn } from "@workspace/ui/lib/utils"

export type SidebarNavItem = {
  title: string
  url: string
  icon: React.ElementType
  iconWeight?: IconWeight
  iconClassName?: string
  count?: number
  external?: boolean
}

type SidebarNavGroupProps = {
  label?: string
  items: SidebarNavItem[]
  hideWhenCollapsed?: boolean
}

export function SidebarNavGroup({
  label,
  items,
  hideWhenCollapsed = false,
}: SidebarNavGroupProps) {
  const pathname = usePathname()

  return (
    <SidebarGroup
      className={cn(hideWhenCollapsed && "group-data-[collapsible=icon]:hidden")}
    >
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => {
          const isActive = !item.external && pathname === item.url
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={isActive}
                render={
                  <a
                    href={item.url}
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  />
                }
              >
                <item.icon
                  weight={item.iconWeight ?? "duotone"}
                  className={item.iconClassName ?? "text-muted-foreground"}
                />
                <span>{item.title}</span>
                {item.external && (
                  <ArrowUpRight className="ml-auto size-4! text-muted-foreground" />
                )}
              </SidebarMenuButton>
              {item.count !== undefined && (
                <SidebarMenuBadge className="bg-muted text-muted-foreground">
                  {item.count}
                </SidebarMenuBadge>
              )}
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
