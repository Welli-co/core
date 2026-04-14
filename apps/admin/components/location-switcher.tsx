"use client"

import * as React from "react"
import { Asclepius, CaretDownIcon, Plus } from "@phosphor-icons/react/ssr"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar"

export function LocationSwitcher({
  locations,
}: {
  locations: {
    commercialName: string
    logo: React.ElementType
    legalName: string
    avatar?: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeLocation, setActiveLocation] = React.useState(locations[0])

  if (!activeLocation) return null

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-open:text-sidebar-accent-foregrounda data-open:bg-sidebar-accent"
              />
            }
          >
            <Avatar className="size-9 rounded-lg">
              <AvatarImage
                src={activeLocation.avatar}
                alt={activeLocation.commercialName}
              />
              <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
                <Asclepius weight="fill" className="size-5" />
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 gap-0.5 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {activeLocation.commercialName}
              </span>
              <span className="truncate text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {activeLocation.legalName}
              </span>
            </div>
            <CaretDownIcon className="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Sedes
              </DropdownMenuLabel>
              {locations.map((location, index) => (
                <DropdownMenuItem
                  key={location.commercialName}
                  onClick={() => setActiveLocation(location)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <location.logo className="size-4 shrink-0" />
                  </div>
                  {location.commercialName}
                  <DropdownMenuShortcut>
                    {"\u2318"}
                    {index + 1}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                Agregar sede
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
