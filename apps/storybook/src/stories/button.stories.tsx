import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@workspace/ui/components/button"
import { Plus, ArrowRight, Trash } from "@phosphor-icons/react"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-md",
        "icon-lg",
        "icon-xl",
      ],
    },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
}

export const WithIconStart: Story = {
  args: {
    children: (
      <>
        <Plus weight="bold" data-icon="inline-start" />
        Create
      </>
    ),
  },
}

export const WithIconEnd: Story = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" data-icon="inline-end" />
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    size: "icon",
    variant: "outline",
    "aria-label": "Delete",
    children: <Trash weight="bold" />,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}
