import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <article className="w-[640px] mx-auto space-y-4 text-sm pt-24">
        <span>Sello de firma welli</span>
        <h2 className="text-4xl font-serif tracking-tight font-semibold py-12">
          Nuestra misión es dar acceso a la salud a millones de
          latinoamericanos.
        </h2>
        <p className="text-muted-foreground">
          Every day, millions of Americans count on life-changing therapy and
          life-saving care from mobile providers. And every day, these providers
          spend too much of their time on administrative tasks – often using
          siloed point solutions – while AI revolutionizes other industries.
        </p>
        <p className="text-muted-foreground">
          Legacy platforms are racing to bolt on AI as a way to cover up the
          flaws that have held providers back for years. But rushing to
          implement generative AI to fix longstanding design flaws will not
          solve the dysfunction that healthcare professionals face every day.
        </p>
        <p className="text-muted-foreground">
          That is why we designed Hipp for providers first, leveraging our
          HIPAA-compliant, AI-native platform to build cohesive and delightful
          applications that just work. It gives us the ability to continuously
          deliver new capabilities that address the field’s most challenging
          problems.
        </p>
        <p className="text-muted-foreground">
          No providers are in greater need of this shift than those out in the
          field. Whether in behavioral health specialties like Applied
          Behavioral Analysis (ABA) and Occupational Therapy (OT), or home
          health treatments like home infusion, mobile providers struggle to
          deliver care while their software is still tethered to a terminal.
        </p>
        <span>Firma</span>
      </article>
      <section className="px-4 py-24 bg-primary/5 space-y-24">
        <div className="grid grid-cols-4 gap-12 max-w-[1420px] mx-auto">
          <h2 className="uppercase text-xs tracking-wider font-semibold text-muted-foreground">
            Nuestro impacto sobre la salud en latinoamerica
          </h2>
          <span className="flex flex-col gap-2">
            <h2 className="text-5xl font-serif tracking-tighter font-semibold">
              +14.000
            </h2>
            <p className="uppercase text-xs tracking-wider font-semibold text-muted-foreground">
              Pacientes atendidos mediante financiación con welli
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <h2 className="text-5xl font-serif tracking-tighter font-semibold">
              100,000 usd
            </h2>
            <p className="uppercase text-xs tracking-wider font-semibold text-muted-foreground">
              Dinero habilitado para la salud de los latinoamericanos
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <h2 className="text-5xl font-serif tracking-tighter font-semibold">
              $ 100,000 usd
            </h2>
            <p className="uppercase text-xs tracking-wider font-semibold text-muted-foreground">
              Dinero habilitado para la salud dos latinoamericanos
            </p>
          </span>
        </div>
        <div className="flex flex-col gap-4 text-center max-w-[1400px] mx-auto space-y-6">
          <h2 className="text-4xl font-serif tracking-tight font-semibold text-balance">
            Buscamos ser la compañía líder en el sector de la salud en
            Latinoamérica, dando acceso a la salud, productos y servicios de
            bienestar.
          </h2>
          <p className="text-muted-foreground text-balance">
            En Welli creemos que todos los latinoamericanos deberían tener
            acceso a servicios de salud que mejoren su calidad de vida.
            Construimos Welli para ofrecer una financiación médica simple,
            confiable y en minutos.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <Card className="space-y-20">
              <CardHeader>
                <CardTitle>
                  <h2 className="text-2xl tracking-tight font-medium text-start">
                    Excelencia con Propósito
                  </h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-start text-sm">
                  Este valor representa nuestro compromiso innegociable con la
                  calidad y el impacto humano. No nos conformamos con cumplir
                  procesos; aspiramos a la excelencia en cada detalle de nuestra
                  misión para superar las expectativas de quienes servimos.
                </p>
                <hr />
                <p className="text-muted-foreground text-start text-sm">
                  Nuestro objetivo final es encantar a pacientes y médicos,
                  transformando una atención estándar en una experiencia
                  excepcional y memorable.
                </p>
              </CardContent>
            </Card>
            <Card className="space-y-20">
              <CardHeader>
                <CardTitle>
                  <h2 className="text-2xl tracking-tight font-medium text-start">
                    Liderazgo Inspirador y Humano
                  </h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-start text-sm">
                  Creemos que el éxito es el resultado de un entorno donde cada
                  persona es dueña de su rol. Fomentamos una cultura de
                  empoderamiento que permite a cada miembro del equipo liderar
                  con iniciativa y autonomía.
                </p>
                <hr />
                <p className="text-muted-foreground text-start text-sm">
                  Lo más importante es que lo hacemos buscando siempre
                  divertirnos, entendiendo que la pasión y la alegría son el
                  motor que nos mantiene unidos, creativos y motivados.
                </p>
              </CardContent>
            </Card>
            <Card className="space-y-20">
              <CardHeader>
                <CardTitle>
                  <h2 className="text-2xl tracking-tight font-medium text-start">
                    Ingenio y Creatividad
                  </h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-start text-sm">
                  Nuestra capacidad de respuesta nace de una mentalidad
                  resolutiva que ve los desafíos como oportunidades de mejora.
                  Somos un equipo ágil que optimiza sus recursos, demostrando
                  que es posible hacer más con menos a través de la creatividad.
                </p>
                <hr />
                <p className="text-muted-foreground text-start text-sm">
                  Este valor define nuestra habilidad para encontrar soluciones
                  inteligentes donde otros ven obstáculos, manteniendo siempre
                  la operatividad al máximo nivel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="px-4 max-w-[1420px] mx-auto space-y-8 flex flex-col">
        <h2 className="text-4xl font-serif tracking-tight font-semibold text-balance text-center">
          Nuestra historia y equipo
        </h2>
        <div className="flex gap-4 justify-center">
          <Card className="w-96">
            <CardHeader>
              <Image
                src="/felipe-jaramillo.jpg"
                alt="Felipe Jaramillo"
                width={100}
                height={100}
                className="aspect-square object-cover border w-full"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h2 className="text-2xl tracking-tight font-medium">
                Felipe Jaramillo
              </h2>
              <p className="text-muted-foreground">
                David has spent his career working at the intersection of
                emerging technologies and industry. He was most recently VP of
                Product Strategy at Workday where his team was responsible for
                new product and market development across people & finance
                products.
              </p>
            </CardContent>
            <CardFooter>Harvard Business School</CardFooter>
          </Card>
          <Card className="w-96">
            <CardHeader>
              <Image
                src="/felipe-jaramillo.jpg"
                alt="Felipe Jaramillo"
                width={100}
                height={100}
                className="aspect-square object-cover border w-full"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h2 className="text-2xl tracking-tight font-medium">
                Felipe Gomez
              </h2>
              <p className="text-muted-foreground">
                David has spent his career working at the intersection of
                emerging technologies and industry. He was most recently VP of
                Product Strategy at Workday where his team was responsible for
                new product and market development across people & finance
                products.
              </p>
            </CardContent>
            <CardFooter>Harvard Business School</CardFooter>
          </Card>
        </div>
        TODO: team photos carousel
      </section>
    </>
  );
}
