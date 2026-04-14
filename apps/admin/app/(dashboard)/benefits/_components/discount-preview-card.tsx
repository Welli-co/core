import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"

export type DiscountPreviewProps = {
  title: string
  description: string
  badge: string | null
  facilityName: string
}

export function DiscountPreviewCard({
  title,
  description,
  badge,
  facilityName,
}: DiscountPreviewProps) {
  return (
    <Card className="overflow-hidden py-0">
      <div className="relative flex aspect-[4/3] flex-col justify-between bg-gradient-to-br from-foreground to-neutral-800 p-4 text-background">
        {badge && (
          <Badge className="w-fit text-sm font-semibold shadow-sm">
            {badge}
          </Badge>
        )}
        <div className="flex flex-col gap-1">
          <span className="text-xs tracking-wider opacity-75">
            La nueva odontología
          </span>
          <span className="font-heading text-2xl font-semibold tracking-tight">
            Welli
          </span>
        </div>
      </div>
      <CardContent className="flex flex-col gap-3 py-5">
        <span className="text-[0.625rem] font-semibold tracking-widest text-primary uppercase">
          {facilityName}
        </span>
        <h3 className="font-heading text-lg leading-tight font-semibold tracking-tight">
          {title || "Título del descuento"}
        </h3>
        <p className="line-clamp-4 text-sm text-muted-foreground">
          {description ||
            "Escribe una descripción atractiva para tus pacientes."}
        </p>
      </CardContent>
      <div className="px-4 pb-5">
        <Button className="w-full" size="lg" type="button" disabled>
          Ver y obtener oferta
        </Button>
      </div>
    </Card>
  )
}
