import Image from 'next/image';

export function Partners() {
  const partners = [
    {
      src: '/integrators/dentix.webp',
      alt: 'Dentix Integrator',
      width: 100,
      height: 100,
    },
    {
      src: '/integrators/creditop.png',
      alt: 'Creditop Integrator',
      width: 100,
      height: 100,
    },
    {
      src: '/integrators/okvet.png',
      alt: 'Meditek Integrator',
      width: 100,
      height: 100,
    },
    {
      src: '/integrators/alivio.webp',
      alt: 'Alivio Integrator',
      width: 100,
      height: 100,
    },
    {
      src: '/integrators/gerty.png',
      alt: 'Gerty Integrator',
      width: 100,
      height: 100,
    },
    {
      src: '/integrators/dtdental.svg',
      alt: 'Clinicas Integrator',
      width: 100,
      height: 100,
    },
  ];

  return (
    <section className="space-y-8">
      <p className="text-sm text-muted-foreground tracking-wider uppercase font-semibold text-center w-fit mx-auto">
        A traves de nuestros integradores hemos atendido a mas de 8.000
        pacientes.
      </p>
      <div className="grid grid-cols-6 gap-8 w-8/12 mx-auto place-items-end">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={partner.width}
            height={partner.height}
            className="w-full h-full object-contain"
          />
        ))}
      </div>
    </section>
  );
}
