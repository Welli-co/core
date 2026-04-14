"use client"

import { ArrowUpRight } from "@phosphor-icons/react/ssr"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

export function NavProjects({
  label,
  projects,
  external = false,
}: {
  label: string
  projects: {
    name: string
    url: string
    icon: React.ElementType
  }[]
  external?: boolean
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              render={
                <a
                  href={item.url}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                />
              }
            >
              <item.icon weight="duotone" className="text-muted-foreground" />
              <span>{item.name}</span>
              {external && (
                <ArrowUpRight className="ml-auto size-4! text-muted-foreground" />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
