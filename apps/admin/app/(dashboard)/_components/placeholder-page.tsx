import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
import { TypographyH1 } from "@workspace/ui/components/typography"

type PlaceholderPageProps = {
  title: string
  description: string
  icon: React.ComponentType<{
    weight?: "duotone" | "fill" | "bold"
    className?: string
  }>
}

export function PlaceholderPage({
  title,
  description,
  icon: Icon,
}: PlaceholderPageProps) {
  return (
    <main className="divide-y">
      <section className="flex min-h-18.25 items-center justify-between p-4">
        <TypographyH1 className="text-lg leading-none">{title}</TypographyH1>
      </section>
      <section className="flex flex-1 p-4">
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Icon weight="duotone" className="text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>{title}</EmptyTitle>
            <EmptyDescription>{description}</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <p className="text-sm text-muted-foreground">
              Próximamente disponible.
            </p>
          </EmptyContent>
        </Empty>
      </section>
    </main>
  )
}
