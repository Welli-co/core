import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr';

export function Integrations() {
  return (
    <section className="grid grid-cols-2 gap-12 max-w-[1420px] mx-auto px-4">
      <div className="flex flex-col gap-4 justify-center">
        <span className="text-xs text-muted-foreground tracking-wider uppercase font-semibold flex gap-2">
          <PlugsConnectedIcon weight="bold" size={18} />
          Integraciones
        </span>
        <h2 className="text-4xl font-serif tracking-tight font-semibold text-balance">
          Convierte en integrador y empieza a ganar dinero por cada paciente
          referido
        </h2>
        <p className="text-muted-foreground text-balance">
          A través de Welli puedes ganar dinero por cada paciente que tome un credito referido a
          nosotros, para ello puedes integrar tu software con el nuestro
          mediante nuestra API o con nuestra solución no-code.
        </p>
        <div className="flex gap-1">
          <Input
            placeholder="Ingresa tu correo electrónico"
            type="email"
            className="h-10 w-68"
          />
          <Button type="submit" size="lg" className="h-10">
            Solicitar acceso
          </Button>
        </div>
      </div>
      <picture className="w-full h-full aspect-video rounded-2xl overflow-hidden bg-primary/5"></picture>
    </section>
  );
}
