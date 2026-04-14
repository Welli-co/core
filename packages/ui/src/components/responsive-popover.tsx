"use client"

import * as React from "react"
import type { Popover as PopoverPrimitive } from "@base-ui/react/popover"

import { useIsMobile } from "@workspace/ui/hooks/use-mobile"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

type ResponsivePopoverContextValue = {
  isMobile: boolean
}

const ResponsivePopoverContext =
  React.createContext<ResponsivePopoverContextValue | null>(null)

function useResponsivePopover() {
  const ctx = React.useContext(ResponsivePopoverContext)
  if (!ctx) {
    throw new Error(
      "ResponsivePopover.* components must be rendered inside <ResponsivePopover>"
    )
  }
  return ctx
}

function ResponsivePopover({
  children,
  ...props
}: PopoverPrimitive.Root.Props) {
  const isMobile = useIsMobile()

  const content = (
    <ResponsivePopoverContext.Provider value={{ isMobile }}>
      {children}
    </ResponsivePopoverContext.Provider>
  )

  if (isMobile) {
    return <Drawer {...props}>{content}</Drawer>
  }

  return <Popover {...props}>{content}</Popover>
}

function ResponsivePopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverTrigger>) {
  const { isMobile } = useResponsivePopover()
  const Trigger = isMobile ? DrawerTrigger : PopoverTrigger
  return <Trigger {...props} />
}

function ResponsivePopoverContent({
  children,
  ...props
}: React.ComponentProps<typeof PopoverContent>) {
  const { isMobile } = useResponsivePopover()

  if (isMobile) {
    return <DrawerContent>{children}</DrawerContent>
  }

  return <PopoverContent {...props}>{children}</PopoverContent>
}

function ResponsivePopoverHeader({
  ...props
}: React.ComponentProps<typeof PopoverHeader>) {
  const { isMobile } = useResponsivePopover()
  const Header = isMobile ? DrawerHeader : PopoverHeader
  return <Header {...props} />
}

function ResponsivePopoverTitle({
  ...props
}: React.ComponentProps<typeof PopoverTitle>) {
  const { isMobile } = useResponsivePopover()
  const Title = isMobile ? DrawerTitle : PopoverTitle
  return <Title {...props} />
}

function ResponsivePopoverDescription({
  ...props
}: React.ComponentProps<typeof PopoverDescription>) {
  const { isMobile } = useResponsivePopover()
  const Description = isMobile ? DrawerDescription : PopoverDescription
  return <Description {...props} />
}

export {
  ResponsivePopover,
  ResponsivePopoverTrigger,
  ResponsivePopoverContent,
  ResponsivePopoverHeader,
  ResponsivePopoverTitle,
  ResponsivePopoverDescription,
}
