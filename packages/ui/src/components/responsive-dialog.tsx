"use client"

import * as React from "react"

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

/** Subset of props common to both base-ui Dialog.Root and vaul Drawer.Root. */
type ResponsiveDialogProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

function ResponsiveDialog({
  open,
  defaultOpen,
  onOpenChange,
  children,
}: ResponsiveDialogProps) {
  const isMobile = useIsMobile()

  const content = (
    <ResponsiveDialogContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveDialogContext.Provider>
  )

  if (isMobile) {
    return (
      <Drawer
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Dialog open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {content}
    </Dialog>
  )
}

/**
 * Base-ui Dialog.Trigger takes a `render` prop; vaul Drawer.Trigger takes
 * `asChild`. This wrapper accepts the trigger element as `children` and
 * forwards to whichever primitive is active — callers always use the same
 * shape: <ResponsiveDialogTrigger><MyButton /></ResponsiveDialogTrigger>.
 */
function ResponsiveDialogTrigger({
  children,
}: {
  children: React.ReactElement
}) {
  const { isMobile } = useResponsiveDialog()

  if (isMobile) {
    return <DrawerTrigger asChild>{children}</DrawerTrigger>
  }

  return <DialogTrigger render={children} />
}

/** Common subset of props for the slot components. base-ui and vaul types
 *  both accept these two, so narrowing here keeps the wrapper portable. */
type SlotProps = {
  className?: string
  children?: React.ReactNode
}

function ResponsiveDialogContent({ children, className }: SlotProps) {
  const { isMobile } = useResponsiveDialog()

  if (isMobile) {
    return <DrawerContent className={className}>{children}</DrawerContent>
  }

  return <DialogContent className={className}>{children}</DialogContent>
}

function ResponsiveDialogHeader({ children, className }: SlotProps) {
  const { isMobile } = useResponsiveDialog()
  const Header = isMobile ? DrawerHeader : DialogHeader
  return <Header className={className}>{children}</Header>
}

function ResponsiveDialogFooter({ children, className }: SlotProps) {
  const { isMobile } = useResponsiveDialog()
  const Footer = isMobile ? DrawerFooter : DialogFooter
  return <Footer className={className}>{children}</Footer>
}

function ResponsiveDialogTitle({ children, className }: SlotProps) {
  const { isMobile } = useResponsiveDialog()
  const Title = isMobile ? DrawerTitle : DialogTitle
  return <Title className={className}>{children}</Title>
}

function ResponsiveDialogDescription({ children, className }: SlotProps) {
  const { isMobile } = useResponsiveDialog()
  const Description = isMobile ? DrawerDescription : DialogDescription
  return <Description className={className}>{children}</Description>
}

function ResponsiveDialogClose({ children, className }: SlotProps) {
  const { isMobile } = useResponsiveDialog()
  const Close = isMobile ? DrawerClose : DialogClose
  return <Close className={className}>{children}</Close>
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
