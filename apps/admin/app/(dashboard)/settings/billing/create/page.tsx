"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { UploadSimpleIcon, XIcon } from "@phosphor-icons/react/ssr"
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
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

import {
  accountTypeLabels,
  availableBanks,
  documentTypeLabels,
  type BankAccountType,
  type DocumentType,
} from "@/data/bank-accounts"

import { PageHeader } from "../../../_components/page-header"

const accountTypes: BankAccountType[] = ["savings", "checking"]
const documentTypes: DocumentType[] = ["CC", "CE", "NIT", "PP"]

const bankAccountSchema = z.object({
  bankId: z.string().min(1, "Selecciona un banco."),
  accountType: z.enum(["savings", "checking"], {
    message: "Selecciona el tipo de cuenta.",
  }),
  accountNumber: z
    .string()
    .min(1, "Ingresa el número de cuenta.")
    .max(32, "Máximo 32 caracteres."),
  holderName: z
    .string()
    .min(1, "Ingresa el nombre del titular.")
    .max(120, "Máximo 120 caracteres."),
  documentType: z.enum(["CC", "CE", "NIT", "PP"], {
    message: "Selecciona el tipo de documento.",
  }),
  documentNumber: z
    .string()
    .min(1, "Ingresa el número de identificación.")
    .max(32, "Máximo 32 caracteres."),
  supportDocumentName: z.string().optional(),
})

type BankAccountForm = z.infer<typeof bankAccountSchema>

export default function CreateBankAccountPage() {
  const form = useForm<BankAccountForm>({
    resolver: zodResolver(bankAccountSchema),
    defaultValues: {
      bankId: "",
      accountType: undefined,
      accountNumber: "",
      holderName: "",
      documentType: "CC",
      documentNumber: "",
      supportDocumentName: "",
    },
  })

  function onSubmit(data: BankAccountForm) {
    console.log(data)
  }

  return (
    <main className="divide-y">
      <PageHeader
        title="Agregar cuenta bancaria"
        description="Registra una cuenta bancaria para recibir los desembolsos."
        actions={
          <Button
            variant="secondary"
            size="icon"
            className="border-2 border-border"
            aria-label="Cerrar"
            render={<Link href="/settings/billing" />}
          >
            <XIcon className="size-4" weight="bold" />
          </Button>
        }
      />
      <section className="p-4">
        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Información de la cuenta</CardTitle>
            <CardDescription>
              Estos datos serán usados para transferir los desembolsos de tus
              créditos.
            </CardDescription>
          </CardHeader>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <FieldGroup>
                <Controller
                  name="bankId"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="bankId">Banco</FieldLabel>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="bankId"
                          aria-invalid={fieldState.invalid}
                          className="w-full"
                        >
                          <SelectValue placeholder="Selecciona un banco" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableBanks.map((bank) => (
                            <SelectItem key={bank.id} value={bank.id}>
                              {bank.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="accountType"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="accountType">
                        Tipo de cuenta
                      </FieldLabel>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="accountType"
                          aria-invalid={fieldState.invalid}
                          className="w-full"
                        >
                          <SelectValue placeholder="Selecciona un tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {accountTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {accountTypeLabels[type]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="accountNumber"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Número de cuenta
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        inputMode="numeric"
                        placeholder="Ej. 902 456 7890"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="holderName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Nombre del titular
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        maxLength={120}
                        placeholder="Ej. Dentix S.A.S"
                        autoComplete="name"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="documentNumber"
                  control={form.control}
                  render={({
                    field: documentField,
                    fieldState: documentState,
                  }) => (
                    <Controller
                      name="documentType"
                      control={form.control}
                      render={({ field: typeField, fieldState: typeState }) => (
                        <Field
                          data-invalid={
                            documentState.invalid || typeState.invalid
                          }
                        >
                          <FieldLabel htmlFor="documentNumber">
                            Identificación del titular
                          </FieldLabel>
                          <InputGroup>
                            <InputGroupAddon
                              align="inline-start"
                              className="pl-1"
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
                                  {documentTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {documentTypeLabels[type]}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </InputGroupAddon>
                            <InputGroupInput
                              id="documentNumber"
                              inputMode="numeric"
                              aria-invalid={documentState.invalid}
                              placeholder="Ej. 1.023.456.789"
                              value={documentField.value ?? ""}
                              onChange={documentField.onChange}
                              onBlur={documentField.onBlur}
                              name={documentField.name}
                              ref={documentField.ref}
                            />
                          </InputGroup>
                          {documentState.invalid && (
                            <FieldError errors={[documentState.error]} />
                          )}
                          {typeState.invalid && !documentState.invalid && (
                            <FieldError errors={[typeState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  )}
                />
                <Controller
                  name="supportDocumentName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="supportDocument">
                        Soporte bancario
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupAddon align="inline-start">
                          <UploadSimpleIcon weight="bold" />
                        </InputGroupAddon>
                        <InputGroupInput
                          id="supportDocument"
                          readOnly
                          placeholder="Selecciona un archivo PDF"
                          value={field.value ?? ""}
                        />
                        <InputGroupAddon align="inline-end" className="pr-1">
                          <InputGroupButton
                            variant="outline"
                            size="xs"
                            type="button"
                          >
                            Elegir archivo
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
                      <FieldDescription>
                        Sube el certificado bancario emitido por el banco en
                        formato PDF.
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
                render={<Link href="/settings/billing" />}
              >
                Cancelar
              </Button>
              <Button type="submit">Guardar cuenta</Button>
            </div>
          </form>
        </Card>
      </section>
    </main>
  )
}
