import type { Meta, StoryObj } from "@storybook/react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@workspace/ui/components/collapsible"
import { Button } from "@workspace/ui/components/button"
import { DotsThreeVertical } from "@phosphor-icons/react"

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-full max-w-sm">
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">3 repositorios fijados</h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <DotsThreeVertical weight="bold" />
          <span className="sr-only">Alternar</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @workspace/ui
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @workspace/eslint-config
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @workspace/typescript-config
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
