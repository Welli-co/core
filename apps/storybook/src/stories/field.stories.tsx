import type { Meta, StoryObj } from "@storybook/react"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSeparator,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Button } from "@workspace/ui/components/button"

const meta: Meta<typeof Field> = {
  title: "UI/Field",
  component: Field,
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: () => (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="name">Nombre</FieldLabel>
      <Input id="name" placeholder="Tu nombre completo" />
      <FieldDescription>Este es tu nombre público.</FieldDescription>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field className="w-full max-w-sm" data-invalid>
      <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
      <Input id="email" type="email" aria-invalid placeholder="correo@ejemplo.com" />
      <FieldError errors={[{ message: "El correo electrónico es requerido." }]} />
    </Field>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Nombre</FieldLabel>
          <Input id="form-name" placeholder="Juan Pérez" />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Correo electrónico</FieldLabel>
          <Input id="form-email" type="email" placeholder="juan@ejemplo.com" />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-bio">Biografía</FieldLabel>
          <Textarea id="form-bio" placeholder="Cuéntanos sobre ti..." />
          <FieldDescription>Máximo 200 caracteres.</FieldDescription>
        </Field>
        <FieldSeparator />
        <Field>
          <div className="flex items-center gap-2">
            <Checkbox id="form-terms" />
            <FieldLabel htmlFor="form-terms">
              Acepto los términos y condiciones
            </FieldLabel>
          </div>
        </Field>
        <Field>
          <Button type="submit">Guardar</Button>
        </Field>
      </FieldGroup>
    </form>
  ),
}
