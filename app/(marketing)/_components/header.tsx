import { Navigation } from './navigation';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="grid grid-cols-3 p-3 sticky top-0 z-10">
      <Navigation />
      <Image
        src="/logo.png"
        alt="Welli"
        width={1533}
        height={1306}
        className="w-16 mx-auto"
      />
      <div className="flex items-center justify-end gap-2">
        <Button variant="outline">
          <Link href="/sso">Solicitar un crédito</Link>
        </Button>
        <Button>
          <Link href="/sso">Pagar mi cuota</Link>
        </Button>
      </div>
    </header>
  );
}
