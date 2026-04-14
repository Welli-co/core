"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"

import {
  facilityStatusLabels,
  type FacilityStatus,
} from "@/data/session"

// `disabled` is not a user-selectable state from the form — it's driven
// by an explicit "deshabilitar sede" action elsewhere.
const selectableStatuses: FacilityStatus[] = ["onboarding", "active"]

const facilitySchema = z.object({
  commercialName: z
    .string()
    .min(1, "El nombre comercial es obligatorio.")
    .max(100, "Máximo 100 caracteres."),
  legalName: z
    .string()
    .min(1, "La razón social es obligatoria.")
    .max(150, "Máximo 150 caracteres."),
  operationAddress: z
    .string()
    .min(1, "La dirección es obligatoria.")
    .max(255, "Máximo 255 caracteres."),
  status: z.enum(["active", "onboarding"], {
    message: "Selecciona un estado.",
  }),
})

export type FacilityFormValues = z.infer<typeof facilitySchema>

type FacilityFormProps = {
  /** Controls the card copy + submit label. */
  mode: "add" | "edit"
  /** Pre-fill values for edit mode. */
  defaultValues?: Partial<FacilityFormValues>
}

const emptyDefaults: FacilityFormValues = {
  commercialName: "",
  legalName: "",
  operationAddress: "",
  status: "onboarding",
}

const copy = {
  add: {
    title: "Agregar sede",
    description:
      "Registra una nueva sede para atender pacientes y asignar colaboradores.",
    submit: "Crear sede",
  },
  edit: {
    title: "Editar sede",
    description: "Actualiza la información de esta sede.",
    submit: "Guardar cambios",
  },
} as const

export function FacilityForm({ mode, defaultValues }: FacilityFormProps) {
  const form = useForm<FacilityFormValues>({
    resolver: zodResolver(facilitySchema),
    defaultValues: { ...emptyDefaults, ...defaultValues },
  })

  function onSubmit(data: FacilityFormValues) {
    // TODO: wire server action / API call once the backend exists.
    console.log({ mode, data })
  }

  const text = copy[mode]

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{text.title}</CardTitle>
        <CardDescription>{text.description}</CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <FieldGroup>
            <Controller
              name="commercialName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Nombre comercial</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    maxLength={100}
                    placeholder="Ej. Dentix Sede La Playa"
                  />
                  <FieldDescription>
                    Cómo verán tus pacientes esta sede.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="legalName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Razón social</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    maxLength={150}
                    placeholder="Ej. DENTIX S.A.S"
                  />
                  <FieldDescription>
                    Razón social registrada ante la DIAN.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="operationAddress"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Dirección de operación
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    className="min-h-[80px]"
                    maxLength={255}
                    placeholder="Ej. Calle 85 #12-45, Chapinero, Bogotá"
                  />
                  <FieldDescription>
                    Dirección donde se atiende a los pacientes.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="status"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="status">Estado</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="status"
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Selecciona un estado" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectableStatuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {facilityStatusLabels[status]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldDescription>
                    Las sedes nuevas suelen empezar en onboarding.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>
        <div className="flex justify-end gap-2 border-t px-6 py-4">
          <Button
            type="button"
            variant="outline"
            render={<Link href="/settings/facilities" />}
          >
            Cancelar
          </Button>
          <Button type="submit">{text.submit}</Button>
        </div>
      </form>
    </Card>
  )
}
