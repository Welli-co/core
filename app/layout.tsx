import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300'],
});

export const metadata: Metadata = {
  title: 'Welli | Financiación médica simple, confiable y en minutos.',
  description:
    'Financiación médica simple, confiable y en minutos. Pacientes en todo Colombia confían en Welli para financiar sus procedimientos de salud.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
