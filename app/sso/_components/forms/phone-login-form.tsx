"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar"
import { Button } from "@/app/_components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/app/_components/ui/combobox"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/app/_components/ui/field"
import { Input } from "@/app/_components/ui/input"
import { countryCodes, countryInfo } from "@/app/_lib/countries"
import { requestOtp } from "@/app/sso/_actions/request-otp"

const phoneSchema = z.object({
  countryCode: z.enum(countryCodes),
  phone: z
    .string()
    .regex(/^\d+$/, "Solo se permiten números")
    .min(7, "Mínimo 7 dígitos")
    .max(10, "Máximo 10 dígitos"),
})

type PhoneFormValues = z.infer<typeof phoneSchema>

export function PhoneLoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      countryCode: "+57",
      phone: "",
    },
  })

  async function onSubmit(data: PhoneFormValues) {
    const fullPhone = `${data.countryCode}${data.phone}`
    const result = await requestOtp(fullPhone)
    console.log("OTP requested:", result)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <FieldLabel>Número de teléfono</FieldLabel>
          <div className="flex gap-2">
            <Controller
              name="countryCode"
              control={control}
              render={({ field }) => (
                <Combobox
                  items={[...countryCodes]}
                  value={field.value}
                  onValueChange={(value) => {
                    if (value) field.onChange(value)
                  }}
                >
                  <ComboboxInput
                    placeholder="+57"
                    showTrigger={false}
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>No se encontraron países.</ComboboxEmpty>
                    <ComboboxList>
                      {(item) => {
                        const info = countryInfo[item]
                        return (
                          <ComboboxItem key={item} value={item}>
                            <Avatar size="sm" className="size-6 border">
                              <AvatarImage src={info.flag} alt={info.name} className="object-cover" />
                              <AvatarFallback>{info.name.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span>{info.name}</span>
                            <span className="text-muted-foreground">{item}</span>
                          </ComboboxItem>
                        )
                      }}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              )}
            />
            <Input
              id="phone"
              type="tel"
              inputMode="numeric"
              placeholder="Número de teléfono"
              className="flex-1"
              {...register("phone")}
            />
          </div>
          <FieldError>{errors.countryCode?.message ?? errors.phone?.message}</FieldError>
        </Field>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Continuar"}
        </Button>
      </FieldGroup>
    </form>
  )
}
