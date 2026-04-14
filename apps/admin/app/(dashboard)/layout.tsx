import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

import { AppSidebar } from "@/components/app-sidebar"
import { FacilityProvider } from "@/contexts/facility-context"
import { SessionProvider } from "@/contexts/session-context"
import { getSession } from "@/data/session"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  return (
    <SessionProvider value={session}>
      <FacilityProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            {children}
            <footer className="fixed bottom-3 left-3 transition-[width,height] ease-linear">
              <SidebarTrigger />
            </footer>
          </SidebarInset>
        </SidebarProvider>
      </FacilityProvider>
    </SessionProvider>
  )
}
