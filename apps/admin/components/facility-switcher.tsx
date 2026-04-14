"use client"

import {
  Asclepius,
  CaretUpDownIcon,
  CommandIcon,
  MapPinAreaIcon,
  Plus,
} from "@phosphor-icons/react/ssr"

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

import { useFacility } from "@/contexts/facility-context"
import type { FacilityLogo } from "@/data/session"
import { Button } from "@workspace/ui/components/button"

const logoIcons: Record<FacilityLogo, React.ElementType> = {
  command: CommandIcon,
  "map-pin": MapPinAreaIcon,
}

export function FacilitySwitcher() {
  const { isMobile } = useSidebar()
  const { facilities, currentFacility, setCurrentFacility } = useFacility()

  if (!currentFacility) return null

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
                src={currentFacility.avatar}
                alt={currentFacility.commercialName}
              />
              <AvatarFallback className="rounded-md bg-primary text-primary-foreground">
                <Asclepius weight="fill" className="size-5" />
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 gap-0.5 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {currentFacility.commercialName}
              </span>
              <span className="truncate text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {currentFacility.legalName}
              </span>
            </div>
            <div className="rounded-sm border py-1">
              <CaretUpDownIcon className="ml-auto size-4!" />
            </div>
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
              {facilities.map((facility, index) => {
                const LogoIcon = logoIcons[facility.logo]
                return (
                  <DropdownMenuItem
                    key={facility.commercialName}
                    onClick={() => setCurrentFacility(facility)}
                    className="gap-2 p-2"
                  >
                    <div className="flex size-6 items-center justify-center rounded-sm border">
                      <LogoIcon className="size-4 shrink-0" />
                    </div>
                    {facility.commercialName}
                    <DropdownMenuShortcut>
                      {"\u2318"}
                      {index + 1}
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                )
              })}
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
