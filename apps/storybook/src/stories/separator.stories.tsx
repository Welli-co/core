import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "@workspace/ui/components/separator"

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Configuración</h4>
        <p className="text-sm text-muted-foreground">
          Administra las preferencias de tu cuenta.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Notificaciones</h4>
        <p className="text-sm text-muted-foreground">
          Configura cómo recibes notificaciones.
        </p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Documentación</span>
      <Separator orientation="vertical" />
      <span>Código fuente</span>
    </div>
  ),
}
