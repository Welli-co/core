"use client"

import type { IconWeight } from "@phosphor-icons/react"
import {
  ArrowUpRightIcon,
  FunnelSimpleIcon,
  FunnelSimpleXIcon,
} from "@phosphor-icons/react/ssr"
import { usePathname } from "next/navigation"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "@workspace/ui/components/responsive-dialog"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
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
  trailingIcon?: React.ElementType
  /** When provided, the item opens a responsive overlay (Dialog on desktop,
   *  Drawer on mobile) instead of navigating. */
  overlay?: React.ReactNode
  items?: SidebarNavItem[]
}

type SidebarNavGroupProps = {
  label?: string
  items: SidebarNavItem[]
  hideWhenCollapsed?: boolean
}

/**
 * Returns true when the current pathname matches the given url.
 * Uses prefix matching so parent sections stay active on nested routes
 * (e.g. /benefits/discount/create highlights "/benefits"). The root path
 * "/" is treated as an exact match so it doesn't swallow every route.
 */
function matchesPath(pathname: string, url: string): boolean {
  if (!url || url === "#") return false
  if (url === "/") return pathname === "/"
  return pathname === url || pathname.startsWith(`${url}/`)
}

export function SidebarNavGroup({
  label,
  items,
  hideWhenCollapsed = false,
}: SidebarNavGroupProps) {
  const pathname = usePathname()

  return (
    <SidebarGroup
      className={cn(
        hideWhenCollapsed && "group-data-[collapsible=icon]:hidden"
      )}
    >
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => {
          const isActive =
            !item.external && !item.overlay && matchesPath(pathname, item.url)
          const TrailingIcon =
            item.trailingIcon ?? (item.external ? ArrowUpRightIcon : null)

          const button = (
            <SidebarMenuButton
              tooltip={item.title}
              isActive={isActive}
              render={
                item.overlay ? (
                  <button type="button" />
                ) : (
                  <a
                    href={item.url}
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  />
                )
              }
            >
              <item.icon
                weight={item.iconWeight ?? "duotone"}
                className={item.iconClassName ?? "text-muted-foreground"}
              />
              <span>{item.title}</span>
              {TrailingIcon && (
                <TrailingIcon className="ml-auto text-muted-foreground" />
              )}
            </SidebarMenuButton>
          )

          if (item.items && item.items.length > 0) {
            const hasActiveChild = item.items.some((sub) =>
              matchesPath(pathname, sub.url)
            )
            return (
              <Collapsible
                key={item.title}
                defaultOpen
                render={<SidebarMenuItem />}
              >
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={isActive}
                  render={<a href={item.url} />}
                >
                  <item.icon
                    weight={item.iconWeight ?? "duotone"}
                    className={item.iconClassName ?? "text-muted-foreground"}
                  />
                  <span className="font-medium">{item.title}</span>
                </SidebarMenuButton>
                <CollapsibleTrigger
                  render={
                    <SidebarMenuAction
                      aria-label={`Alternar ${item.title}`}
                      className="group-data-[collapsible=icon]:hidden"
                    />
                  }
                >
                  <FunnelSimpleIcon className="size-4 text-muted-foreground group-data-[panel-open]:hidden" />
                  <FunnelSimpleXIcon className="hidden size-4 text-muted-foreground group-data-[panel-open]:block" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((sub) => (
                      <SidebarMenuSubItem key={sub.title}>
                        <SidebarMenuSubButton
                          isActive={matchesPath(pathname, sub.url)}
                          render={<a href={sub.url} />}
                        >
                          <sub.icon
                            weight={sub.iconWeight ?? "duotone"}
                            className={
                              sub.iconClassName ?? "text-muted-foreground"
                            }
                          />
                          <span className="font-medium">{sub.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <SidebarMenuItem key={item.title}>
              {item.overlay ? (
                <ResponsiveDialog>
                  <ResponsiveDialogTrigger>{button}</ResponsiveDialogTrigger>
                  <ResponsiveDialogContent className="sm:max-w-3xl">
                    {item.overlay}
                  </ResponsiveDialogContent>
                </ResponsiveDialog>
              ) : (
                button
              )}
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
