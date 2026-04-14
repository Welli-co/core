"use client"

import * as React from "react"
import {
  Command,
  MapPinArea,
  CircleDashed,
  CircleHalf,
  CircleNotch,
  CheckCircle,
  Circle,
  CirclesThreePlus,
  Package,
  DeviceTabletSpeaker,
  SealPercent,
  ChatCircleText,
  AppWindow,
  Unite,
} from "@phosphor-icons/react/ssr"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { LocationSwitcher } from "@/components/location-switcher"

const data = {
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "",
  },
  locations: [
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
  ],
  navMain: [
    {
      title: "En revisión",
      url: "#",
      icon: CircleDashed,
      iconClassName: "text-orange-500",
    },
    {
      title: "Aprobados",
      url: "#",
      icon: CircleHalf,
      iconWeight: "fill" as const,
      iconClassName: "text-sky-500",
      count: 1,
    },
    {
      title: "En progreso",
      url: "#",
      icon: CircleNotch,
      iconWeight: "bold" as const,
      iconClassName: "text-indigo-500",
    },
    {
      title: "Completados",
      url: "#",
      icon: CheckCircle,
      iconWeight: "fill" as const,
      iconClassName: "text-emerald-500",
      count: 4,
    },
    {
      title: "Cerrados",
      url: "#",
      icon: Circle,
      iconWeight: "fill" as const,
      iconClassName: "text-purple-500",
    },
  ],
  projects: [
    {
      name: "Solicitar crédito",
      url: "#",
      icon: CirclesThreePlus,
    },
    {
      name: "Mis equipos médicos",
      url: "#",
      icon: Package,
    },
  ],
  salesChannel: [
    {
      name: "Welli App",
      url: "#",
      icon: DeviceTabletSpeaker,
    },
    {
      name: "Welli Benefits",
      url: "#",
      icon: SealPercent,
    },
    {
      name: "Welli Check WhatsApp",
      url: "#",
      icon: ChatCircleText,
    },
    {
      name: "Welli Website Widget",
      url: "#",
      icon: AppWindow,
    },
    {
      name: "Integradores",
      url: "#",
      icon: Unite,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <LocationSwitcher locations={data.locations} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects label="CANALES DE VENTA" projects={data.salesChannel} />
        <NavProjects label="EQUIPOS MEDICOS" projects={data.projects} external />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
