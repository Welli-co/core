import type { Meta, StoryObj } from "@storybook/react"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@workspace/ui/components/empty"
import { Button } from "@workspace/ui/components/button"
import { Package, Plus, MagnifyingGlass } from "@phosphor-icons/react"

const meta: Meta<typeof Empty> = {
  title: "UI/Empty",
  component: Empty,
}

export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  render: () => (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Package weight="bold" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating your first item.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <Plus weight="bold" data-icon="inline-start" />
          Create Item
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const SearchEmpty: Story = {
  render: () => (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <MagnifyingGlass weight="bold" />
        </EmptyMedia>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filter to find what you're looking for.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Empty className="border">
      <EmptyHeader>
        <EmptyTitle>Nothing here yet</EmptyTitle>
        <EmptyDescription>
          This section is empty. Content will appear here once available.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
