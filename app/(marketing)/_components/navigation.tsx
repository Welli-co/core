'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArticleNyTimesIcon,
  BookOpenUserIcon,
  LifebuoyIcon,
  SparkleIcon,
} from '@phosphor-icons/react/dist/ssr';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/app/_components/ui/navigation-menu';
import { Button } from '@/app/_components/ui/button';
import { cn } from '@/app/_lib/utils';

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-background/5 backdrop-blur">
            <Link href="/">Productos</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-2 rounded-2xl">
            <NavigationMenuList className="grid grid-cols-2 w-[44vw] gap-2">
              <NavigationMenuLink
                href="/patients"
                className="flex flex-col gap-1 items-start border aspect-video"
              >
                <p className="text-sm font-medium">Procedimientos médicos</p>
                <p className="text-muted-foreground">
                  Accede a financiación de procedimientos médicos simple y en
                  minutos.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/medical-equipment"
                className="flex flex-col gap-1 items-start border aspect-video"
              >
                <p className="text-sm font-medium">
                  Instrumentación y equipos médicos
                </p>
                <p className="text-muted-foreground">
                  Obtén financiación de instrumentación y equipos médicos simple
                  y en minutos.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/integrators#no-code"
                className="flex flex-col gap-1 items-start border"
              >
                <p className="text-sm font-medium">Integración no-code</p>
                <p className="text-muted-foreground">
                  Integra Welli sin necesidad de programar
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/integrators#api"
                className="flex flex-col gap-1 items-start border"
              >
                <p className="text-sm font-medium">Integración via API</p>
                <p className="text-muted-foreground">
                  Desbloquea oportunidades de financiación
                </p>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/story"
            className={cn(
              navigationMenuTriggerStyle(),
              'bg-background/5 backdrop-blur'
            )}
          >
            Nuestra historia
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="bg-background/5 backdrop-blur">
            Recursos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuList className="grid grid-cols-3 gap-2 divide-x">
              <div className="p-2 h-full">
                <span className="text-xs text-muted-foreground tracking-wider uppercase font-semibold flex gap-2">
                  Sobre Welli
                </span>
              </div>
              <div className="p-2 space-y-2 h-full">
                <span className="text-xs text-muted-foreground tracking-wider uppercase font-semibold flex gap-2">
                  Noticias y publicaciones
                </span>
                <NavigationMenuLink
                  href="/help"
                  className="flex gap-3 w-48 p-1"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="border border-border size-9"
                  >
                    <ArticleNyTimesIcon className="size-5" weight="duotone" />
                  </Button>
                  <div>
                    <p className="text-sm font-medium">Blog</p>
                    <p className="text-muted-foreground text-xs">
                      Historias y hitos
                    </p>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/help"
                  className="flex gap-3 w-48 p-1"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="border border-border size-9"
                  >
                    <SparkleIcon className="size-4" weight="duotone" />
                  </Button>
                  <div>
                    <p className="text-sm font-medium">Changelog</p>
                    <p className="text-muted-foreground text-xs">
                      Actualizaciones
                    </p>
                  </div>
                </NavigationMenuLink>
              </div>
              <div className="p-2 space-y-2">
                <span className="text-xs text-muted-foreground tracking-wider uppercase font-semibold flex gap-2">
                  Explorar
                </span>
                <NavigationMenuLink
                  href="/help"
                  className="flex flex-col items-start border w-48 aspect-video justify-between"
                >
                  <LifebuoyIcon className="size-5" weight="duotone" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Centro de ayuda</p>
                    <p className="text-muted-foreground text-xs">
                      Respuestas a tus preguntas y ayuda técnica
                    </p>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/docs"
                  className="flex flex-col gap-1 items-start border w-48 aspect-video justify-between"
                >
                  <BookOpenUserIcon className="size-5" weight="duotone" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Documentación</p>
                    <p className="text-muted-foreground text-xs">
                      Accede a la documentación de Welli
                    </p>
                  </div>
                </NavigationMenuLink>
              </div>
            </NavigationMenuList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink href={href}>
        <div className="text-sm leading-none font-medium">{title}</div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
}
