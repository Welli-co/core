"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { XIcon } from "@phosphor-icons/react/ssr"
import { Controller, useForm, useWatch } from "react-hook-form"
import * as z from "zod"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"

import { useFacility } from "@/contexts/facility-context"

import { DiscountPreviewCard } from "../../_components/discount-preview-card"
import { PageHeader } from "../../../_components/page-header"

const discountTypes = [
  { value: "percentage", label: "Porcentaje" },
  { value: "2x1", label: "2x1" },
  { value: "fixed", label: "Valor fijo" },
  { value: "since", label: "Desde un valor" },
] as const

type DiscountType = (typeof discountTypes)[number]["value"]

const discountSchema = z
  .object({
    title: z
      .string()
      .min(1, "El título es obligatorio.")
      .max(150, "Máximo 150 caracteres."),
    description: z
      .string()
      .min(1, "La descripción es obligatoria.")
      .max(255, "Máximo 255 caracteres."),
    conditions: z.string().min(1, "Las condiciones son obligatorias."),
    discountType: z.enum(["percentage", "2x1", "fixed", "since"], {
      message: "Selecciona el tipo de descuento.",
    }),
    value: z.number().optional(),
    visibleToAllWelliBenefits: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.discountType === "2x1") return
    if (data.value == null || Number.isNaN(data.value)) {
      ctx.addIssue({
        path: ["value"],
        code: "custom",
        message: "Ingresa un valor.",
      })
      return
    }
    if (
      data.discountType === "percentage" &&
      (data.value <= 0 || data.value > 100)
    ) {
      ctx.addIssue({
        path: ["value"],
        code: "custom",
        message: "Debe estar entre 1 y 100.",
      })
    }
    if (
      (data.discountType === "fixed" || data.discountType === "since") &&
      data.value <= 0
    ) {
      ctx.addIssue({
        path: ["value"],
        code: "custom",
        message: "El valor debe ser mayor a 0.",
      })
    }
  })

type DiscountForm = z.infer<typeof discountSchema>

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
})

function formatDiscountPreview(
  type: DiscountType | undefined,
  value: number | undefined
): string {
  if (!type) return "Selecciona un tipo de descuento para ver el resumen."
  if (type === "2x1") return "Lleva 2, paga 1."
  if (value == null || Number.isNaN(value)) {
    return "Ingresa un valor para ver el resumen."
  }
  if (type === "percentage") return `${value}% de descuento.`
  if (type === "fixed") return `${currency.format(value)} de descuento.`
  if (type === "since") return `Desde ${currency.format(value)}.`
  return ""
}

function formatDiscountBadge(
  type: DiscountType | undefined,
  value: number | undefined
): string | null {
  if (!type) return null
  if (type === "2x1") return "2x1"
  if (value == null || Number.isNaN(value)) return null
  if (type === "percentage") return `${value}%`
  if (type === "fixed") return currency.format(value)
  if (type === "since") return `Desde ${currency.format(value)}`
  return null
}

export default function CreateDiscountPage() {
  const form = useForm<DiscountForm>({
    resolver: zodResolver(discountSchema),
    defaultValues: {
      title: "",
      description: "",
      conditions: "",
      discountType: undefined,
      value: undefined,
      visibleToAllWelliBenefits: false,
    },
  })

  const { currentFacility } = useFacility()

  const [watchedType, watchedValue, watchedTitle, watchedDescription] =
    useWatch({
      control: form.control,
      name: ["discountType", "value", "title", "description"],
    })

  const isValueDisabled = watchedType === "2x1"
  const badge = formatDiscountBadge(
    watchedType,
    typeof watchedValue === "number" ? watchedValue : undefined
  )

  function onSubmit(data: DiscountForm) {
    console.log(data)
  }

  return (
    <main className="divide-y">
      <PageHeader
        title="Crear descuento"
        description="Configura un nuevo descuento o beneficio para tus pacientes."
        actions={
          <Button
            variant="secondary"
            size="icon"
            className="border-2 border-border"
            aria-label="Cerrar"
            render={<Link href="/benefits" />}
          >
            <XIcon className="size-4" weight="bold" />
          </Button>
        }
      />
      <section className="p-4">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <div className="grid gap-4 md:grid-cols-[auto_380px]">
            {/* Left column (60%): form cards */}
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Detalles del descuento</CardTitle>
                  <CardDescription>
                    Configura la información que verán tus pacientes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FieldGroup>
                    <Controller
                      name="title"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>Título</FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            maxLength={150}
                            placeholder="Ej. Descuento de bienvenida"
                          />
                          <FieldDescription>
                            Máximo 150 caracteres.
                          </FieldDescription>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="description"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            Descripción
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            maxLength={255}
                            placeholder="Ej. 10% de descuento en tu primer tratamiento"
                          />
                          <FieldDescription>
                            Máximo 255 caracteres.
                          </FieldDescription>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="conditions"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            Condiciones
                          </FieldLabel>
                          <Textarea
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            className="min-h-[120px]"
                            placeholder="Ej. Válido solo para primeras consultas durante el mes de abril."
                          />
                          <FieldDescription>
                            Explica las condiciones y restricciones del
                            descuento.
                          </FieldDescription>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configuración del descuento</CardTitle>
                  <CardDescription>
                    Define el valor y el tipo de descuento que recibirán tus
                    pacientes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FieldGroup>
                    <Controller
                      name="value"
                      control={form.control}
                      render={({
                        field: valueField,
                        fieldState: valueState,
                      }) => (
                        <Controller
                          name="discountType"
                          control={form.control}
                          render={({
                            field: typeField,
                            fieldState: typeState,
                          }) => (
                            <Field
                              data-invalid={
                                valueState.invalid || typeState.invalid
                              }
                            >
                              <FieldLabel htmlFor="discount-value">
                                Valor del descuento
                              </FieldLabel>
                              <InputGroup>
                                {(watchedType === "fixed" ||
                                  watchedType === "since") && (
                                  <InputGroupAddon align="inline-start">
                                    $
                                  </InputGroupAddon>
                                )}
                                <InputGroupInput
                                  id="discount-value"
                                  type="text"
                                  inputMode="numeric"
                                  placeholder={isValueDisabled ? "—" : "Ej. 15"}
                                  disabled={isValueDisabled}
                                  aria-invalid={valueState.invalid}
                                  value={valueField.value ?? ""}
                                  onChange={(event) => {
                                    const raw = event.target.value.replace(
                                      /[^\d]/g,
                                      ""
                                    )
                                    valueField.onChange(
                                      raw === "" ? undefined : Number(raw)
                                    )
                                  }}
                                  onBlur={valueField.onBlur}
                                  name={valueField.name}
                                  ref={valueField.ref}
                                />
                                <InputGroupAddon
                                  align="inline-end"
                                  className="pr-1"
                                >
                                  <Select
                                    name={typeField.name}
                                    value={typeField.value}
                                    onValueChange={typeField.onChange}
                                  >
                                    <SelectTrigger
                                      aria-invalid={typeState.invalid}
                                      className="h-8 border-0 bg-transparent shadow-none"
                                    >
                                      <SelectValue placeholder="Tipo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {discountTypes.map((option) => (
                                        <SelectItem
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </InputGroupAddon>
                              </InputGroup>
                              <FieldDescription>
                                {formatDiscountPreview(
                                  watchedType,
                                  typeof watchedValue === "number"
                                    ? watchedValue
                                    : undefined
                                )}
                              </FieldDescription>
                              {valueState.invalid && (
                                <FieldError errors={[valueState.error]} />
                              )}
                              {typeState.invalid && !valueState.invalid && (
                                <FieldError errors={[typeState.error]} />
                              )}
                            </Field>
                          )}
                        />
                      )}
                    />
                  </FieldGroup>
                </CardContent>
              </Card>
            </div>

            {/* Right column (40%): preview + sales channel */}
            <aside className="flex flex-col gap-4">
              <DiscountPreviewCard
                title={watchedTitle ?? ""}
                description={watchedDescription ?? ""}
                badge={badge}
                facilityName={currentFacility.commercialName}
              />
              <Card>
                <CardHeader>
                  <CardTitle>Welli Benefits Sales Channel</CardTitle>
                  <CardDescription>
                    Controla dónde se mostrará este descuento.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Controller
                    name="visibleToAllWelliBenefits"
                    control={form.control}
                    render={({ field }) => (
                      <Field orientation="horizontal">
                        <Checkbox
                          id="visibleToAllWelliBenefits"
                          name={field.name}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <FieldContent>
                          <FieldLabel htmlFor="visibleToAllWelliBenefits">
                            Mostrar a todos los clientes
                          </FieldLabel>
                          <FieldDescription>
                            Permite que el descuento sea visible para todos los
                            clientes con Welli Benefits activado.
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    )}
                  />
                </CardContent>
              </Card>
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  render={<Link href="/benefits" />}
                >
                  Cancelar
                </Button>
                <Button type="submit">Guardar descuento</Button>
              </div>
            </aside>
          </div>
        </form>
      </section>
    </main>
  )
}
