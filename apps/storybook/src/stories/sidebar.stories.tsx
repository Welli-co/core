import type { Meta, StoryObj } from "@storybook/react"
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@workspace/ui/components/sidebar"
import {
  HandCoins,
  FileText,
  Storefront,
  ArrowSquareOut,
  SignOut,
} from "@phosphor-icons/react"

const meta: Meta = {
  title: "UI/Sidebar",
  decorators: [
    (Story) => (
      <div className="h-[600px] w-full overflow-hidden rounded-xl border">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
              W
            </div>
            <span className="text-sm font-semibold">Welli</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navegación</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    render={
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <HandCoins weight="bold" />
                    <span>Solicitar crédito</span>
                    <ArrowSquareOut weight="bold" className="ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    render={
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <FileText weight="bold" />
                    <span>Mis solicitudes</span>
                    <ArrowSquareOut weight="bold" className="ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    render={
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <Storefront weight="bold" />
                    <span>Proveedores</span>
                    <ArrowSquareOut weight="bold" className="ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SignOut weight="bold" />
                Cerrar sesión
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Panel principal</span>
        </header>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Contenido de la página principal.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}
