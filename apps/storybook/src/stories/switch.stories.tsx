import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "@workspace/ui/components/switch"
import { Label } from "@workspace/ui/components/label"

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Modo avión</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">Notificaciones</Label>
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="small" size="sm" />
      <Label htmlFor="small">Tamaño pequeño</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="d1" disabled />
        <Label htmlFor="d1">Deshabilitado</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="d2" disabled defaultChecked />
        <Label htmlFor="d2">Deshabilitado activo</Label>
      </div>
    </div>
  ),
}
