import type { Meta, StoryObj } from "@storybook/react"
import { ToggleGroup, ToggleGroupItem } from "@workspace/ui/components/toggle-group"
import { TextAlignLeft, TextAlignCenter, TextAlignRight } from "@phosphor-icons/react"

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Alinear izquierda">
        <TextAlignLeft weight="bold" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Centrar">
        <TextAlignCenter weight="bold" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Alinear derecha">
        <TextAlignRight weight="bold" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Negrita">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Cursiva">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Subrayado">
        U
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Izquierda">
        <TextAlignLeft weight="bold" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Centro">
        <TextAlignCenter weight="bold" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Derecha">
        <TextAlignRight weight="bold" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}
