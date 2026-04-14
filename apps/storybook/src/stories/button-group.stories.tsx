import type { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup, ButtonGroupSeparator } from "@workspace/ui/components/button-group"
import { Button } from "@workspace/ui/components/button"
import { TextB, TextItalic, TextUnderline } from "@phosphor-icons/react"

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Paste</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Cut</Button>
    </ButtonGroup>
  ),
}

export const IconButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Bold">
        <TextB weight="bold" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <TextItalic weight="bold" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <TextUnderline weight="bold" />
      </Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}
