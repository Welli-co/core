import type { Meta, StoryObj } from "@storybook/react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@workspace/ui/components/sheet"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const meta: Meta<typeof Sheet> = {
  title: "UI/Sheet",
  component: Sheet,
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Abrir panel
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar perfil</SheetTitle>
          <SheetDescription>
            Realiza cambios en tu perfil aquí. Haz clic en guardar cuando termines.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="sheet-name">Nombre</Label>
            <Input id="sheet-name" defaultValue="Juan Pérez" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="sheet-email">Correo</Label>
            <Input id="sheet-email" defaultValue="juan@ejemplo.com" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>
            Cancelar
          </SheetClose>
          <Button>Guardar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Abrir izquierda
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navegación</SheetTitle>
          <SheetDescription>
            Accede a las secciones principales.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 p-4">
          <Button variant="ghost" className="justify-start">Inicio</Button>
          <Button variant="ghost" className="justify-start">Pacientes</Button>
          <Button variant="ghost" className="justify-start">Configuración</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}
