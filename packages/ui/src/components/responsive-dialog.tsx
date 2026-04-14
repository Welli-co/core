"use client"

import * as React from "react"
import type { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import { useIsMobile } from "@workspace/ui/hooks/use-mobile"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

type ResponsiveDialogContextValue = {
  isMobile: boolean
}

const ResponsiveDialogContext =
  React.createContext<ResponsiveDialogContextValue | null>(null)

function useResponsiveDialog() {
  const ctx = React.useContext(ResponsiveDialogContext)
  if (!ctx) {
    throw new Error(
      "ResponsiveDialog.* components must be rendered inside <ResponsiveDialog>"
    )
  }
  return ctx
}

function ResponsiveDialog({
  children,
  ...props
}: DialogPrimitive.Root.Props) {
  const isMobile = useIsMobile()

  const content = (
    <ResponsiveDialogContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveDialogContext.Provider>
  )

  if (isMobile) {
    return <Drawer {...props}>{content}</Drawer>
  }

  return <Dialog {...props}>{content}</Dialog>
}

/**
 * Base-ui Dialog.Trigger takes a `render` prop; vaul Drawer.Trigger takes
 * `asChild`. This wrapper accepts the trigger element as `children` and
 * forwards to whichever primitive is active — callers always use the same
 * shape: <ResponsiveDialogTrigger><MyButton /></ResponsiveDialogTrigger>.
 */
function ResponsiveDialogTrigger({
  children,
  ...props
}: {
  children: React.ReactElement
} & Omit<React.ComponentProps<typeof DialogTrigger>, "render" | "children">) {
  const { isMobile } = useResponsiveDialog()

  if (isMobile) {
    return (
      <DrawerTrigger asChild {...props}>
        {children}
      </DrawerTrigger>
    )
  }

  return <DialogTrigger {...props} render={children} />
}

function ResponsiveDialogContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DialogContent>) {
  const { isMobile } = useResponsiveDialog()

  if (isMobile) {
    return <DrawerContent className={className}>{children}</DrawerContent>
  }

  return (
    <DialogContent className={className} {...props}>
      {children}
    </DialogContent>
  )
}

function ResponsiveDialogHeader({
  ...props
}: React.ComponentProps<typeof DialogHeader>) {
  const { isMobile } = useResponsiveDialog()
  const Header = isMobile ? DrawerHeader : DialogHeader
  return <Header {...props} />
}

function ResponsiveDialogFooter({
  ...props
}: React.ComponentProps<typeof DialogFooter>) {
  const { isMobile } = useResponsiveDialog()
  const Footer = isMobile ? DrawerFooter : DialogFooter
  return <Footer {...props} />
}

function ResponsiveDialogTitle({
  ...props
}: React.ComponentProps<typeof DialogTitle>) {
  const { isMobile } = useResponsiveDialog()
  const Title = isMobile ? DrawerTitle : DialogTitle
  return <Title {...props} />
}

function ResponsiveDialogDescription({
  ...props
}: React.ComponentProps<typeof DialogDescription>) {
  const { isMobile } = useResponsiveDialog()
  const Description = isMobile ? DrawerDescription : DialogDescription
  return <Description {...props} />
}

function ResponsiveDialogClose({
  ...props
}: React.ComponentProps<typeof DialogClose>) {
  const { isMobile } = useResponsiveDialog()
  const Close = isMobile ? DrawerClose : DialogClose
  return <Close {...props} />
}

export {
  ResponsiveDialog,
  ResponsiveDialogTrigger,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogFooter,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
  ResponsiveDialogClose,
}
