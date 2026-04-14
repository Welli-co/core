import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
        <footer className="fixed bottom-3 left-3 transition-[width,height] ease-linear">
          <SidebarTrigger />
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
