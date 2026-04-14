import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: "Escribe tu mensaje aquí...",
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="message">Mensaje</Label>
      <Textarea id="message" placeholder="Escribe tu mensaje aquí..." />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: "Deshabilitado",
    disabled: true,
  },
}
