import Header from './_components/header';
import Footer from './_components/footer';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-radial/decreasing from-background via-background to-primary/10">
      <p className="text-center text-sm font-medium text-foreground w-full p-2">
        La fintech colombiana Welli levantó US$75 millones en deuda estructurada
        ―{' '}
        <Link
          href="https://www.forbes.com/colombia/"
          target="_blank"
          className="text-foreground/70 font-medium"
        >
          Leer mas en Forbes Colombia
        </Link>
      </p>
      <Header />
      <main className="min-h-screen space-y-24">{children}</main>
      <Footer />
    </div>
  );
}
