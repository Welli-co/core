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
  DeviceTabletSpeakerIcon,
  GearSixIcon,
  HandWithdrawIcon,
  HeartbeatIcon,
  PackageIcon,
  SealPercentIcon,
  StopCircleIcon,
  XCircleIcon,
  CurrencyCircleDollarIcon,
} from "@phosphor-icons/react"

import {
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "@workspace/ui/components/responsive-dialog"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar"

import { FacilitySwitcher } from "@/components/facility-switcher"
import { NavUser } from "@/components/nav-user"
import {
  SidebarNavGroup,
  type SidebarNavItem,
} from "@/components/sidebar-nav-group"
import {
  HandArrowDownIcon,
  UserCircleCheckIcon,
} from "@phosphor-icons/react/dist/ssr"

const creditStatuses: SidebarNavItem[] = [
  {
    title: "Monitor de operación",
    url: "/",
    icon: HeartbeatIcon,
    iconWeight: "duotone",
    iconClassName: "text-muted-foreground animate-pulse",
  },
  {
    title: "Aplicaciones",
    url: "/credits",
    icon: UserListIcon,
    iconWeight: "duotone",
    iconClassName: "text-muted-foreground",
    items: [
      {
        title: "Rechazadas",
        url: "/rejected",
        icon: XCircleIcon,
        iconWeight: "fill",
        iconClassName: "text-rose-500",
      },
      {
        title: "En revisión",
        url: "/reviewing",
        icon: CircleDashedIcon,
        iconWeight: "bold",
        iconClassName: "text-orange-500",
      },
      {
        title: "Pre-aprobados",
        url: "/approved",
        icon: ClockCountdownIcon,
        iconWeight: "fill",
        iconClassName: "text-sky-500",
        count: 10,
      },
      {
        title: "Solicitar desembolso",
        url: "/in-progress",
        icon: CurrencyCircleDollarIcon,
        iconWeight: "fill",
        iconClassName: "text-purple-500",
      },
      {
        title: "En firme",
        url: "/completed",
        icon: CheckCircleIcon,
        iconWeight: "fill",
        iconClassName: "text-green-500",
      },
      {
        title: "Cerradas",
        url: "/closed",
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
    overlay: (
      <>
        <ResponsiveDialogHeader className="sr-only">
          <ResponsiveDialogTitle>Solicitar crédito</ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Completa la solicitud en el portal de equipos médicos de Welli.
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>
        <iframe
          src="https://stgappmedicos.welli.com.co/"
          title="Solicitar crédito"
          className="h-[70vh] w-full rounded-2xl border bg-background"
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
        <FacilitySwitcher />
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
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
