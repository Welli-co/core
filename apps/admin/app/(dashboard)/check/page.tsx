import { PlusCircleIcon } from "@phosphor-icons/react/ssr"
import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

import { PageHeader } from "../_components/page-header"

export default function CheckPage() {
  return (
    <main className="divide-y">
      <PageHeader
        title="Chats"
        actions={
          <TooltipProvider delay={200}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Iniciar nuevo chat"
                    className="border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                  />
                }
              >
                <PlusCircleIcon className="size-5" weight="duotone" />
              </TooltipTrigger>
              <TooltipContent>Iniciar nuevo chat</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
      />
    </main>
  )
}
