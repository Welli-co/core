export function Benefits() {
  return (
    <section className="max-w-[1420px] mx-auto px-4 space-y-12">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h2 className="text-5xl font-serif tracking-tight font-semibold text-balance w-6/12 text-center">
          Convierte tu software en un motor de ingresos pasivos
        </h2>
        <p className="text-muted-foreground text-balance text-base">
          Integrate con Welli en 24 horas y empieza a ganar dinero pasivamente.
          <br />
          Entendemos los obstáculos que enfrentan las plataformas de gestión
          médica
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <article className="space-y-4 text-center border bg-background rounded-2xl p-8">
          <h2 className="text-3xl font-serif tracking-tight font-semibold">
            Fácil de integrar
          </h2>
          <p className="text-muted-foreground text-balance text-base leading-snug">
            Usa nuestro desarrollo no-code o nuestra API para integrar Welli en tu software.
          </p>
        </article>
        <article className="space-y-4 text-center border bg-background rounded-2xl py-8 px-4">
          <h2 className="text-3xl font-serif tracking-tight font-semibold">
            Financiación en minutos
          </h2>
          <p className="text-muted-foreground text-balance text-base leading-snug">
            Añade la posibilidad de que tus clientes financien sus
            procedimientos médicos y gana dinero.
          </p>
        </article>
        <article className="space-y-4 text-center border bg-background rounded-2xl p-8">
          <h2 className="text-3xl font-serif tracking-tight font-semibold">
            Datos en tiempo real
          </h2>
          <p className="text-muted-foreground text-balance text-base leading-snug">
            Interconecta tu sistema con Welli y obtén datos en tiempo real del dinero que ganas.
          </p>
        </article>
      </div>
    </section>
  );
}
