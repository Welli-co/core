import type { Meta, StoryObj } from "@storybook/react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with some example text to show the layout.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Mark all read
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Review your latest notifications and updates.</p>
      </CardContent>
    </Card>
  ),
}

export const Small: Story = {
  render: () => (
    <Card className="w-full max-w-sm" size="sm">
      <CardHeader>
        <CardTitle>Compact Card</CardTitle>
        <CardDescription>Uses smaller padding and gaps.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card uses the small size variant.</p>
      </CardContent>
    </Card>
  ),
}
