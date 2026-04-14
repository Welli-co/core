import "@workspace/ui/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="light antialiased font-sans">
      <body>{children}</body>
    </html>
  )
}
