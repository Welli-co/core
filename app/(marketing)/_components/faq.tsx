import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: '¿Por qué usar Welli?',
      answer:
        '¿Te encuentras luchando para financiar tus procedimientos médicos o deseas tener una opción de financiación más accesible? ¿Te resulta complicado navegar por múltiples opciones de crédito? ¿Mantienes un registro de tus pagos médicos en una hoja de cálculo? ¿Tienes documentos PDF dispersos con información de procedimientos? Welli toma todas las formas de financiación médica relacionadas con tus procedimientos, resultados de laboratorio y medicamentos, y las trae a un espacio claro, organizado y simple, permitiéndote obtener financiación rápida informada por tu historial completo.',
    },
    {
      question: '¿Qué registros de salud soporta Welli?',
      answer:
        'Welli soporta *miles* de fuentes de datos de salud—y la lista está creciendo rápidamente. Puedes vincular hospitales importantes como Kaiser Permanente, Mass General o Cedars-Sinai, así como proveedores de laboratorio como Quest Diagnostics y Labcorp, además de datos de empresas de salud como Function Health y One Medical. Si tus datos de salud viven en algún lugar, es probable que podamos traerlos a Welli. Welli también puede tomar PDFs que tengas y convertirlos en datos médicos reales en tu bóveda de salud junto con tus registros sincronizados de hospitales.',
    },
    {
      question: '¿Es Welli privado y seguro?',
      answer:
        'Similar a los administradores de contraseñas, Welli almacena tus registros médicos sincronizados en una base de datos privada que está encriptada en tu teléfono. Welli y su equipo no pueden ver tus registros médicos y realmente, ¡realmente no queremos! Tampoco recopilamos registros de la aplicación que identifiquen registros médicos o los vinculen a ningún individuo. Cuando usas funciones de IA en Welli, como hacer preguntas sobre registros médicos, esos datos pueden enviarse mediante llamadas API a proveedores de LLM como OpenAI y Google. Las llamadas API provienen de las credenciales de Welli en lugar de las tuyas, reduciendo la capacidad de los proveedores de IA para saber qué registros están asociados con qué personas específicas. Si no quieres usar IA de ninguna manera relacionada con tus registros médicos, Welli no es una buena opción para ti.',
    },
    {
      question: '¿Cómo puedo probar Welli y cuánto cuesta?',
      answer:
        'Welli actualmente es gratuito para consumidores mientras está en pruebas beta cerradas. En el futuro, podemos ofrecer una suscripción para funciones avanzadas de IA. Nuestra esperanza es siempre tener una forma para que las personas usen la funcionalidad principal de Welli de forma gratuita, ya que los registros médicos universales son una necesidad y un derecho humano. Actualmente Welli solo está disponible como una aplicación iOS en beta cerrada por invitación. Regístrate en nuestra lista de espera para ser notificado cuando Welli esté disponible para que lo pruebes.',
    },
    {
      question: '¿Qué pasa si dejo de usar Welli?',
      answer:
        'Tus datos médicos te pertenecen y nunca los retendremos como rehenes. Cualquier dato que esté sincronizado desde hospitales y laboratorios (a través de portales como MyChart) seguirá permaneciendo allí. Todos los datos sincronizados a Welli también se pueden exportar como un archivo desde el menú de configuración de la aplicación. Actualmente, eliminar la aplicación Welli también elimina todos tus datos ya que nada está actualmente sincronizado con ningún servidor en la nube por diseño—tus datos solo se almacenan en tu teléfono.',
    },
  ];

  return (
    <section className="flex p-4 gap-8 max-w-[1420px] mx-auto">
      <div className="space-y-4 py-2">
        <h2 className="text-4xl font-serif tracking-tight font-semibold">
          Preguntas frecuentes
        </h2>
        <p className="text-muted-foreground text-balance">
          Tienes más preguntas o necesitas soporte? Envíanos un mensaje y alguien
          de nuestro equipo te ayudará.
        </p>
        <Link href="/contact">
          <Button className="rounded-full px-4" size="lg">
            Servicio al cliente
          </Button>
        </Link>
      </div>
      <Accordion className="w-full gap-8">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-2xl font-serif tracking-tight font-bold cursor-pointer">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
