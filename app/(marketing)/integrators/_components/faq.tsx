import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: '¿Qué tan compleja es la integración de su API en mi plataforma?',
      answer:
        'Nuestra arquitectura es API-First. Ofrecemos una API RESTful documentada con estándares modernos (OpenAPI/Swagger) que permite una integración fluida en cuestión de días, no meses. Disponemos de un entorno de pruebas (Sandbox) completo para que tu equipo de desarrollo pueda simular flujos de aprobación de crédito, creación de webhooks y notificaciones de desembolso antes de pasar a producción.',
    },
    {
      question: '¿Ofrecen SDKs o plugins para plataformas existentes?',
      answer:
        'Sí. Para facilitar el despliegue, contamos con librerías y plugins nativos compatibles con lenguajes y plataformas populares. Esto reduce la carga operativa de tu equipo de ingeniería y acelera el Time-to-Market, permitiendo que tu software ofrezca financiación en la próxima actualización de versión.',
    },
    {
      question: '¿Cómo funciona el flujo de datos entre mi software y la Fintech?',
      answer:
        'La integración es segura y bidireccional. Tu software envía los datos básicos del paciente (con su consentimiento) y el monto a financiar. Nosotros procesamos el scoring en tiempo real y devolvemos el estado (Aprobado/Rechazado) mediante Webhooks, lo que te permite actualizar el estado de la factura o la agenda en tu interfaz automáticamente sin necesidad de polling constante.',
    },
    {
      question: '¿Existe un esquema de comisiones por los créditos originados desde mi software?',
      answer:
        'Absolutamente. Operamos bajo un modelo de Revenue Share (participación en ingresos). Tu empresa SaaS recibe un porcentaje o comisión por cada crédito desembolsado exitosamente a través de tu plataforma. Convertimos tu software en una nueva fuente de ingresos recurrentes, monetizando el volumen transaccional de tus clientes (las clínicas).',
    },
    {
      question: '¿Tiene algún costo para mi empresa aliada realizar la integración?',
      answer:
        'No. Nuestro programa de Partners no tiene costos de entrada ni mensualidades por el uso de la API. Invertimos en la alianza tecnológica porque nuestro negocio crece cuando tus clientes (las clínicas) logran financiar más procedimientos.',
    },
    {
      question: '¿El usuario (médico/paciente) debe salir de mi software para solicitar el crédito?',
      answer:
        'Priorizamos una experiencia "sin fricción". Dependiendo del nivel de integración que elijas, ofrecemos flujos embebidos donde el usuario inicia y completa gran parte del proceso dentro de tu interfaz (Embedded Finance), o a través de widgets modales que mantienen al usuario en tu ecosistema, evitando el abandono de la plataforma.',
    },
    {
      question: '¿Quién asume el riesgo financiero y regulatorio?',
      answer:
        'Nosotros y nuestros aliados financieros. Tu plataforma actúa como el canal tecnológico (el puente), pero nosotros nos encargamos de todo el Compliance regulatorio (Superfinanciera), el análisis de riesgo, la originación del crédito y la gestión de cobranza. Tú te enfocas en tu producto SaaS; nosotros nos encargamos de la complejidad financiera.',
    },
    {
      question: '¿Cómo ayuda esta integración a reducir el Churn de mi SaaS?',
      answer:
        'Al integrar financiación, tu software se vuelve una herramienta indispensable para el flujo de caja de la clínica, aumentando la "pegajosidad" (stickiness) del producto. Los clientes que dependen de ti para cerrar ventas y recibir pagos tienen tasas de retención significativamente más altas que aquellos que solo usan el software para agendamiento.',
    },
    {
      question: '¿Qué soporte técnico brindan durante la implementación?',
      answer:
        'Tendrás acceso directo a un canal de soporte técnico especializado para desarrolladores (Slack/Discord/Email) y un Account Manager dedicado para la alianza. No estarás hablando con un bot, sino con ingenieros que entienden tu arquitectura.',
    },
  ];

  return (
    <section className="max-w-[1420px] mx-auto px-4 space-y-12">
      <h2 className="text-5xl font-serif tracking-tight font-semibold text-balance w-6/12 mx-auto text-center">
        He aquí las respuestas a tus preguntas
      </h2>
      <Accordion className="w-8/12 mx-auto gap-8">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-2xl font-serif tracking-tight font-bold cursor-pointer">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
