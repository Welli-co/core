"use client"

import * as React from "react"
import {
  AppWindowIcon,
  ChatCircleTextIcon,
  CheckCircleIcon,
  CircleDashedIcon,
  CircleHalfIcon,
  CirclesThreePlusIcon,
  ClockCountdownIcon,
  CommandIcon,
  DeviceTabletSpeakerIcon,
  HandWithdrawIcon,
  HeartbeatIcon,
  MapPinAreaIcon,
  PackageIcon,
  SealPercentIcon,
  StopCircleIcon,
  UniteIcon,
} from "@phosphor-icons/react"

import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@workspace/ui/components/drawer"
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
    logo: CommandIcon,
    legalName: "DENTIX S.A.S",
  },
  {
    commercialName: "Dentix Sede Chapinero",
    logo: MapPinAreaIcon,
    legalName: "DENTIX S.A.S",
  },
  {
    commercialName: "Dentix Sede Suba Subsidiada",
    logo: MapPinAreaIcon,
    legalName: "DENTIX S.A.S",
  },
]

const creditStatuses: SidebarNavItem[] = [
  {
    title: "En revisión",
    url: "/en-revision",
    icon: CircleDashedIcon,
    iconWeight: "bold",
    iconClassName: "text-orange-500",
  },
  {
    title: "Aprobados",
    url: "/aprobados",
    icon: CircleHalfIcon,
    iconWeight: "fill",
    iconClassName: "text-sky-500",
    count: 1,
  },
  {
    title: "En progreso",
    url: "/en-progreso",
    icon: ClockCountdownIcon,
    iconWeight: "fill",
    iconClassName: "text-indigo-500",
  },
  {
    title: "Completados",
    url: "/completados",
    icon: CheckCircleIcon,
    iconWeight: "fill",
    iconClassName: "text-emerald-500",
    count: 4,
  },
  {
    title: "Cerrados",
    url: "/cerrados",
    icon: StopCircleIcon,
    iconWeight: "fill",
    iconClassName: "text-neutral-500",
  },
  {
    title: "Pulso",
    url: "/",
    icon: HeartbeatIcon,
    iconWeight: "duotone",
    iconClassName: "text-muted-foreground animate-pulse",
  },
]

const salesChannels: SidebarNavItem[] = [
  {
    title: "Welli App",
    url: "#",
    icon: DeviceTabletSpeakerIcon,
    trailingIcon: HandWithdrawIcon,
    drawer: (
      <DrawerHeader>
        <DrawerTitle>Welli App</DrawerTitle>
        <DrawerDescription>
          Solicita un desembolso o comparte el acceso a la aplicación con tus
          pacientes.
        </DrawerDescription>
      </DrawerHeader>
    ),
  },
  {
    title: "Welli Benefits",
    url: "/benefits",
    icon: SealPercentIcon,
  },
  {
    title: "Welli Check WhatsApp",
    url: "/check",
    icon: ChatCircleTextIcon,
  },
  {
    title: "Welli Website Widget",
    url: "/code",
    icon: AppWindowIcon,
  },
  {
    title: "Integradores",
    url: "/integrators",
    icon: UniteIcon,
  },
]

const medicalEquipment: SidebarNavItem[] = [
  {
    title: "Solicitar crédito",
    url: "#",
    icon: CirclesThreePlusIcon,
    external: true,
  },
  {
    title: "Mis equipos médicos",
    url: "#",
    icon: PackageIcon,
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
