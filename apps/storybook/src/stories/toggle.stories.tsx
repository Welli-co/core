import type { Meta, StoryObj } from "@storybook/react"
import { Toggle } from "@workspace/ui/components/toggle"
import { TextB, TextItalic, TextUnderline } from "@phosphor-icons/react"

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Negrita">
      <TextB weight="bold" />
    </Toggle>
  ),
}

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Cursiva">
      <TextItalic weight="bold" />
    </Toggle>
  ),
}

export const WithText: Story = {
  render: () => (
    <Toggle aria-label="Subrayado">
      <TextUnderline weight="bold" />
      Subrayado
    </Toggle>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Pequeño">
        <TextB weight="bold" />
      </Toggle>
      <Toggle aria-label="Normal">
        <TextB weight="bold" />
      </Toggle>
      <Toggle size="lg" aria-label="Grande">
        <TextB weight="bold" />
      </Toggle>
    </div>
  ),
}
