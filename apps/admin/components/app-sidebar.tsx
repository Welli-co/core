"use client"

import * as React from "react"
import {
  AppWindow,
  ChatCircleText,
  CheckCircle,
  Circle,
  CircleDashed,
  CircleHalf,
  CircleNotch,
  CirclesThreePlus,
  Command,
  DeviceTabletSpeaker,
  MapPinArea,
  Package,
  Pulse,
  SealPercent,
  Unite,
} from "@phosphor-icons/react/ssr"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar"

import { LocationSwitcher } from "@/components/location-switcher"
import { NavUser } from "@/components/nav-user"
import {
  SidebarNavGroup,
  type SidebarNavItem,
} from "@/components/sidebar-nav-group"

const user = {
  name: "Admin",
  email: "admin@example.com",
  avatar: "",
}

const locations = [
  {
    commercialName: "Dentix Sede La Playa",
    logo: Command,
    legalName: "DENTIX S.A.S",
  },
  {
    commercialName: "Dentix Sede Chapinero",
    logo: MapPinArea,
    legalName: "DENTIX S.A.S",
  },
  {
    commercialName: "Dentix Sede Suba Subsidiada",
    logo: MapPinArea,
    legalName: "DENTIX S.A.S",
  },
]

const creditStatuses: SidebarNavItem[] = [
  {
    title: "En revisión",
    url: "/en-revision",
    icon: CircleDashed,
    iconWeight: "fill",
    iconClassName: "text-orange-500",
  },
  {
    title: "Aprobados",
    url: "/aprobados",
    icon: CircleHalf,
    iconWeight: "fill",
    iconClassName: "text-sky-500",
    count: 1,
  },
  {
    title: "En progreso",
    url: "/en-progreso",
    icon: CircleNotch,
    iconWeight: "bold",
    iconClassName: "text-indigo-500",
  },
  {
    title: "Completados",
    url: "/completados",
    icon: CheckCircle,
    iconWeight: "fill",
    iconClassName: "text-emerald-500",
    count: 4,
  },
  {
    title: "Cerrados",
    url: "/cerrados",
    icon: Circle,
    iconWeight: "fill",
    iconClassName: "text-purple-500",
  },
]

const pulso: SidebarNavItem[] = [
  {
    title: "Pulso",
    url: "/",
    icon: Pulse,
    iconWeight: "fill",
    iconClassName: "text-muted-foreground",
  },
]

const salesChannels: SidebarNavItem[] = [
  {
    title: "Welli App",
    url: "#",
    icon: DeviceTabletSpeaker,
  },
  {
    title: "Welli Benefits",
    url: "#",
    icon: SealPercent,
  },
  {
    title: "Welli Check WhatsApp",
    url: "#",
    icon: ChatCircleText,
  },
  {
    title: "Welli Website Widget",
    url: "#",
    icon: AppWindow,
  },
  {
    title: "Integradores",
    url: "#",
    icon: Unite,
  },
]

const medicalEquipment: SidebarNavItem[] = [
  {
    title: "Solicitar crédito",
    url: "#",
    icon: CirclesThreePlus,
    external: true,
  },
  {
    title: "Mis equipos médicos",
    url: "#",
    icon: Package,
    external: true,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b">
        <LocationSwitcher locations={locations} />
      </SidebarHeader>
      <SidebarContent className="divide-y">
        <SidebarNavGroup label="CREDITOS PACIENTES" items={creditStatuses} />
        <SidebarNavGroup items={pulso} />
        <SidebarNavGroup
          label="CANALES DE VENTA"
          items={salesChannels}
          hideWhenCollapsed
        />
        <SidebarNavGroup
          label="EQUIPOS MEDICOS"
          items={medicalEquipment}
          hideWhenCollapsed
        />
      </SidebarContent>
      <SidebarFooter className="border-t">
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
