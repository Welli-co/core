import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card"
import { PhoneLoginForm } from "@/app/sso/_components/forms/phone-login-form"

export default function SSOPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/welli-brand-logo.png"
            alt="Welli"
            width={120}
            height={40}
            priority
          />
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Bienvenido</CardTitle>
            <CardDescription>
              Ingresa tu n&uacute;mero de tel&eacute;fono para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PhoneLoginForm />
          </CardContent>
        </Card>

        <p className="text-muted-foreground text-balance text-center text-xs">
          Al continuar, aceptas nuestros{" "}
          <a href="/terms" className="text-primary underline underline-offset-4 hover:text-primary/80">
            T&eacute;rminos de Servicio
          </a>{" "}
          y{" "}
          <a href="/privacy" className="text-primary underline underline-offset-4 hover:text-primary/80">
            Pol&iacute;tica de Privacidad
          </a>
          .
        </p>
      </div>
    </div>
  )
}
