"use client"

import * as React from "react"
import {
  AppWindowIcon,
  UserListIcon,
  WhatsappLogoIcon,
  CheckCircleIcon,
  CircleDashedIcon,
  CircleHalfIcon,
  CirclesThreePlusIcon,
  ClockCountdownIcon,
  CommandIcon,
  DeviceTabletSpeakerIcon,
  GearSixIcon,
  HandWithdrawIcon,
  HeartbeatIcon,
  MapPinAreaIcon,
  PackageIcon,
  SealPercentIcon,
  StopCircleIcon,
  UniteIcon,
  XCircleIcon,
  CurrencyCircleDollarIcon,
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
import {
  HandArrowDownIcon,
  UserCircleCheckIcon,
} from "@phosphor-icons/react/dist/ssr"

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
    title: "Pulso",
    url: "/",
    icon: HeartbeatIcon,
    iconWeight: "duotone",
    iconClassName: "text-muted-foreground animate-pulse",
  },
  {
    title: "Aplicaciones",
    url: "/creditos",
    icon: UserListIcon,
    iconWeight: "duotone",
    iconClassName: "text-muted-foreground",
    items: [
      {
        title: "Rechazados",
        url: "/rechazados",
        icon: XCircleIcon,
        iconWeight: "fill",
        iconClassName: "text-rose-500",
      },
      {
        title: "En revisión",
        url: "/en-revision",
        icon: CircleDashedIcon,
        iconWeight: "bold",
        iconClassName: "text-orange-500",
      },
      {
        title: "Pre-aprobados",
        url: "/aprobados",
        icon: ClockCountdownIcon,
        iconWeight: "fill",
        iconClassName: "text-sky-500",
        count: 10,
      },
      {
        title: "Solicitar desembolso",
        url: "/active",
        icon: CurrencyCircleDollarIcon,
        iconWeight: "fill",
        iconClassName: "text-purple-500",
      },
      {
        title: "En firme",
        url: "/active",
        icon: CheckCircleIcon,
        iconWeight: "fill",
        iconClassName: "text-green-500",
      },
      {
        title: "Cerrados",
        url: "/ended",
        icon: StopCircleIcon,
        iconWeight: "fill",
        iconClassName: "text-neutral-500",
      },
    ],
  },
]

const salesChannels: SidebarNavItem[] = [
  {
    title: "Welli App",
    url: "#",
    icon: DeviceTabletSpeakerIcon,
  },
  {
    title: "Welli Benefits",
    url: "/benefits",
    icon: SealPercentIcon,
  },
  {
    title: "Welli Check WhatsApp",
    url: "/check",
    icon: WhatsappLogoIcon,
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

const company: SidebarNavItem[] = [
  {
    title: "Configuración",
    url: "/settings",
    icon: GearSixIcon,
    iconWeight: "duotone",
    iconClassName: "text-muted-foreground",
  },
]

const medicalEquipment: SidebarNavItem[] = [
  {
    title: "Solicitar crédito",
    url: "#",
    icon: CirclesThreePlusIcon,
    trailingIcon: HandWithdrawIcon,
    drawer: (
      <>
        <DrawerHeader className="sr-only">
          <DrawerTitle>Solicitar crédito</DrawerTitle>
          <DrawerDescription>
            Completa la solicitud de crédito en el portal de equipos médicos.
          </DrawerDescription>
        </DrawerHeader>
        <iframe
          src="https://stgappmedicos.welli.com.co/"
          title="Solicitar crédito"
          className="mt-4 h-[85vh] w-full rounded-4xl border-6"
        />
      </>
    ),
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
      <SidebarFooter className="divide-y px-0">
        <SidebarNavGroup items={company} hideWhenCollapsed />
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
