import { FAQ } from './_components/faq';
import { Benefits } from './_components/benefits';
import { Hero } from './_components/hero';
import { Partners } from './_components/partners';
import { Paths } from './_components/paths';

export default function Page() {
  return (
    <>
      <Hero />
      <Partners />
      <Benefits />
      <Paths />
      <FAQ />
    </>
  );
}
