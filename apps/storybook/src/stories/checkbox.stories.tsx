import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Aceptar términos y condiciones</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Seleccionado</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Deshabilitado</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Deshabilitado y seleccionado</Label>
      </div>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="option-1" />
        <Label htmlFor="option-1">Notificaciones por correo</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="option-2" defaultChecked />
        <Label htmlFor="option-2">Notificaciones push</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="option-3" />
        <Label htmlFor="option-3">Notificaciones SMS</Label>
      </div>
    </div>
  ),
}
