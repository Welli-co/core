import type { Meta, StoryObj } from "@storybook/react"
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyList,
} from "@workspace/ui/components/typography"

const meta: Meta = {
  title: "UI/Typography",
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => (
    <div className="max-w-2xl">
      <TypographyH1>The Joke Tax Chronicles</TypographyH1>
      <TypographyP>
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </TypographyP>
      <TypographyH2>The King&apos;s Plan</TypographyH2>
      <TypographyP>
        The king thought long and hard, and finally came up with{" "}
        <a href="#" className="font-medium text-primary underline underline-offset-4">
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </TypographyP>
      <TypographyBlockquote>
        &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&rdquo;
      </TypographyBlockquote>
      <TypographyH3>The Joke Tax</TypographyH3>
      <TypographyP>
        The king&apos;s subjects were not amused. They grumbled and complained,
        but the king was firm:
      </TypographyP>
      <TypographyList>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners: 20 gold coins</li>
      </TypographyList>
      <TypographyP>
        As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to stop joking — the
        court jester.
      </TypographyP>
      <TypographyH4>People stopped telling jokes</TypographyH4>
      <TypographyP>
        The jester, however, wasn&apos;t just any fool. He was a{" "}
        <TypographyInlineCode>@tax-exempt</TypographyInlineCode> citizen, and
        he continued to tell jokes freely.
      </TypographyP>
    </div>
  ),
}

export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <TypographyH1>This is an H1 heading</TypographyH1>
      <TypographyH2>This is an H2 heading</TypographyH2>
      <TypographyH3>This is an H3 heading</TypographyH3>
      <TypographyH4>This is an H4 heading</TypographyH4>
    </div>
  ),
}

export const TextVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <TypographySmall>Lead</TypographySmall>
        <TypographyLead>
          A modal dialog that interrupts the user with important content and
          expects a response.
        </TypographyLead>
      </div>
      <div>
        <TypographySmall>Large</TypographySmall>
        <TypographyLarge>Are you absolutely sure?</TypographyLarge>
      </div>
      <div>
        <TypographySmall>Small</TypographySmall>
        <TypographySmall>Email address</TypographySmall>
      </div>
      <div>
        <TypographySmall>Muted</TypographySmall>
        <TypographyMuted>Enter your email address.</TypographyMuted>
      </div>
      <div>
        <TypographySmall>Paragraph</TypographySmall>
        <TypographyP>
          The king, seeing how much happier his subjects were, googled a joke tax
          and decided to lower it to 1 gold coin per joke.
        </TypographyP>
      </div>
      <div>
        <TypographySmall>Blockquote</TypographySmall>
        <TypographyBlockquote>
          &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
          joke.&rdquo;
        </TypographyBlockquote>
      </div>
      <div>
        <TypographySmall>Inline Code</TypographySmall>
        <TypographyP>
          Use the <TypographyInlineCode>@layer</TypographyInlineCode> directive
          to add styles.
        </TypographyP>
      </div>
      <div>
        <TypographySmall>List</TypographySmall>
        <TypographyList>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </TypographyList>
      </div>
    </div>
  ),
}
