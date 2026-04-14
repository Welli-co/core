import type { Meta, StoryObj } from "@storybook/react"
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@workspace/ui/components/tooltip"
import { Button } from "@workspace/ui/components/button"
import { Plus } from "@phosphor-icons/react"

const meta: Meta = {
  title: "UI/Tooltip",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover aquí
      </TooltipTrigger>
      <TooltipContent>
        <p>Agregar a la biblioteca</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const IconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger
        render={<Button variant="outline" size="icon" aria-label="Agregar" />}
      >
        <Plus weight="bold" />
      </TooltipTrigger>
      <TooltipContent>
        <p>Agregar nuevo elemento</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Arriba
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip arriba</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Abajo
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip abajo</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Izquierda
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip izquierda</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Derecha
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip derecha</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}
