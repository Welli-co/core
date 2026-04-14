"use client"

import * as React from "react"
import Link from "next/link"
import { DotsThreeVertical } from "@phosphor-icons/react/ssr"

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
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "@workspace/ui/components/responsive-dialog"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar"

import { settingsTabs } from "@/app/(dashboard)/settings/_components/settings-tabs"
import { useSession } from "@/contexts/session-context"

export function NavUser() {
  const { isMobile } = useSidebar()
  const { user } = useSession()
  const [recommendOpen, setRecommendOpen] = React.useState(false)

  const initials = user.name.charAt(0).toUpperCase()

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <SidebarMenuButton
                  size="lg"
                  className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
                />
              }
            >
              <Avatar className="size-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-radial-[at_25%_25%] from-yellow-300 to-yellow-500 font-semibold text-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <DotsThreeVertical className="ml-auto size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.name}
                      </span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setRecommendOpen(true)}>
                  Recomendar un colega
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {settingsTabs.map((tab) => (
                  <DropdownMenuItem
                    key={tab.href}
                    render={<Link href={tab.href} />}
                  >
                    {tab.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      <ResponsiveDialog open={recommendOpen} onOpenChange={setRecommendOpen}>
        <ResponsiveDialogContent className="sm:max-w-3xl">
          <ResponsiveDialogHeader className="sr-only">
            <ResponsiveDialogTitle>Recomendar un colega</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              Cuéntanos a qué colega conoces que podría unirse a Welli.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
          <iframe
            src="https://u0pdd.share.hsforms.com/2TkQAv3XnTIi1Fd34oIn8Hg"
            title="Recomendar un colega"
            className="h-[70vh] w-full rounded-2xl border bg-background"
          />
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </>
  )
}
