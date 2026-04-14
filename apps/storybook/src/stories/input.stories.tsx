import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: "Escribe aquí...",
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="email">Correo electrónico</Label>
      <Input id="email" type="email" placeholder="correo@ejemplo.com" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: "Deshabilitado",
    disabled: true,
  },
}

export const Types: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input type="text" placeholder="Texto" />
      <Input type="email" placeholder="Correo electrónico" />
      <Input type="password" placeholder="Contraseña" />
      <Input type="number" placeholder="Número" />
      <Input type="search" placeholder="Buscar..." />
    </div>
  ),
}
