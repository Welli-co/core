import { TypographyH1 } from "@workspace/ui/components/typography"
import { cn } from "@workspace/ui/lib/utils"

type PageHeaderProps = {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

export function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "flex max-h-18.25 min-h-18.25 items-center justify-between gap-4 p-4",
        className
      )}
    >
      <div className="flex min-w-0 flex-col gap-2">
        <TypographyH1 className="text-lg leading-none">{title}</TypographyH1>
        {description && (
          <p className="text-sm leading-none text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 gap-1">{actions}</div>}
    </section>
  )
}
