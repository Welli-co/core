import { Badge } from '@/app/_components/ui/badge';
import { Button } from '@/app/_components/ui/button';
import { BookOpenIcon } from '@phosphor-icons/react/dist/ssr';

export function Hero() {
  return (
    <section className="px-4 pt-28 flex items-center justify-center flex-col gap-8">
      <Badge
        variant="secondary"
        className="text-sm px-3 py-1 w-fit h-fit bg-primary/5 text-primary-foreground border-primary-foreground/20"
      >
        Celebramos $500MM desembolsados por integradores aliados{' '}
        <span className="font-semibold">― Leer más</span>
      </Badge>
      <div className="space-y-6 mx-auto w-8/12 text-center">
        <h1 className="text-5xl tracking-tight font-serif font-semibold text-balance">
          Convierte en integrador y empieza a ganar dinero por cada paciente
          referido
        </h1>
        <p className="text-muted-foreground text-balance">
          A través de Welli puedes ganar dinero por cada paciente que tome un
          crédito referido a nosotros, para ello puedes integrar tu software con
          el nuestro mediante nuestra API o con nuestra solución no-code.
        </p>
      </div>
      <div className="space-x-2">
        <Button size="lg" className="w-fit">
          Agendar un demo
        </Button>
        <Button size="lg" variant="outline" className="w-fit">
          <BookOpenIcon weight="duotone" size={18} />
          Leer la documentación
        </Button>
      </div>
      <article className="border-20 ring-4 ring-border border-neutral-900 rounded-[36px] w-8/12 mx-auto aspect-video mt-8"></article>
    </section>
  );
}
