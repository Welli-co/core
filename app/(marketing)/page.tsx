import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
// import { Testimonials } from '@/app/(marketing)/_components/testimonials';
import { Process } from '@/app/(marketing)/_components/process';
import { AuthorityPartners } from '@/app/(marketing)/_components/authority-partners';
import { BenefitsBento } from '@/app/(marketing)/_components/benefits-bento';
import { Integrations } from '@/app/(marketing)/_components/integrations';
import { WhyWeBuild } from '@/app/(marketing)/_components/why-we-build';
import { FAQ } from '@/app/(marketing)/_components/faq';
import { AboveTheFold } from '@/app/(marketing)/_components/above-the-fold';

export default function Page() {
  return (
    <>
      <AboveTheFold />
      <Process />
      <AuthorityPartners />
      <BenefitsBento />
      <Integrations />
      <WhyWeBuild />
      <FAQ />
    </>
  );
}
