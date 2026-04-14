"use client"

import { NotificationIcon } from "@phosphor-icons/react/ssr"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export function Notifications() {
  return (
    <Sheet>
      <TooltipProvider delay={200}>
        <Tooltip>
          <TooltipTrigger
            render={
              <SheetTrigger
                render={
                  <Button
                    size="icon"
                    variant="secondary"
                    className="border-2 border-border"
                    aria-label="Notificaciones"
                  />
                }
              />
            }
          >
            <NotificationIcon className="size-4.5" weight="bold" />
          </TooltipTrigger>
          <TooltipContent>Notificaciones</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notificaciones</SheetTitle>
          <SheetDescription>
            Actualizaciones recientes sobre tus créditos y pacientes.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
          No hay notificaciones nuevas.
        </div>
      </SheetContent>
    </Sheet>
  )
}
