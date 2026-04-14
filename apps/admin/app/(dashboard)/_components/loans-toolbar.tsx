import {
  CalendarBlankIcon,
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  MicrosoftExcelLogoIcon,
  SortAscendingIcon,
} from "@phosphor-icons/react/ssr"
import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

import { PageHeader } from "./page-header"

type LoansToolbarProps = {
  title: string
  badge?: React.ReactNode
}

export function LoansToolbar({ title, badge }: LoansToolbarProps) {
  return (
    <PageHeader
      title={
        <div className="flex items-center gap-2">
          <span>{title}</span>
          {badge}
        </div>
      }
      actions={
        <TooltipProvider delay={200}>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  size="icon"
                  variant="secondary"
                  className="border-2 border-border"
                  aria-label="Buscar"
                />
              }
            >
              <MagnifyingGlassIcon className="size-4" weight="bold" />
            </TooltipTrigger>
            <TooltipContent>Buscar</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  size="icon"
                  variant="secondary"
                  className="border-2 border-border"
                  aria-label="Calendario"
                />
              }
            >
              <CalendarBlankIcon className="size-4" weight="bold" />
            </TooltipTrigger>
            <TooltipContent>Calendario</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  size="icon"
                  variant="secondary"
                  className="border-2 border-border"
                  aria-label="Ordenar"
                />
              }
            >
              <SortAscendingIcon className="size-4" weight="bold" />
            </TooltipTrigger>
            <TooltipContent>Ordenar</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  size="icon"
                  variant="secondary"
                  className="border-2 border-border"
                  aria-label="Filtrar"
                />
              }
            >
              <FunnelSimpleIcon className="size-4" weight="bold" />
            </TooltipTrigger>
            <TooltipContent>Filtrar</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  size="icon"
                  variant="outline"
                  aria-label="Exportar"
                  className="border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                />
              }
            >
              <MicrosoftExcelLogoIcon className="size-5" weight="duotone" />
            </TooltipTrigger>
            <TooltipContent>Exportar a Excel</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      }
    />
  )
}
