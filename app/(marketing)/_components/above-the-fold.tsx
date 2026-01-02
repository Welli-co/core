import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_components/ui/avatar';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/app/_components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
import { PaperPlaneRightIcon, PlusIcon } from '@phosphor-icons/react/dist/ssr';

const COUNTRIES: { flag: string; alt: string; code: string; prefix: string }[] =
  [
    {
      flag: 'https://flagcdn.com/co.svg',
      alt: 'Colombia',
      code: 'CO',
      prefix: '+57',
    },
    {
      flag: 'https://flagcdn.com/pe.svg',
      alt: 'Perú',
      code: 'PE',
      prefix: '+51',
    },
  ];

const DEFAULT_COUNTRY = '+57';

export function AboveTheFold() {
  return (
    <div className="pt-24 bg-radial from-primary/5 to-transparent">
      <section className="flex flex-col items-center justify-center py-20 space-y-8 w-6/12 mx-auto text-center">
        <div className="space-y-4">
          <h1 className="text-5xl tracking-tight font-serif font-semibold">
            Financiación de procedimientos médicos simple y en minutos
          </h1>
          <p className="text-muted-foreground text-balance">
            Accede a financiación de procedimientos médicos simple y en minutos.
            Sin complicaciones, sin papeleo, sin burocracia.
          </p>
        </div>
        <InputGroup className="h-12 rounded-full w-full max-w-sm bg-background">
          <InputGroupAddon>
            <Select value={DEFAULT_COUNTRY}>
              <SelectTrigger className="rounded-full border-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((country) => (
                  <SelectItem key={country.prefix} value={country.prefix}>
                    <Avatar className="size-6">
                      <AvatarImage src={country.flag} alt={country.alt} />
                      <AvatarFallback>{country.code}</AvatarFallback>
                    </Avatar>
                    ({country.prefix}) {country.alt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </InputGroupAddon>
          <InputGroupInput
            type="tel"
            placeholder="Ingresa tu número de teléfono"
          />
          <InputGroupAddon align="inline-end">
            <Button type="submit" size="lg" className="h-10 rounded-full">
              Aplicar
            </Button>
          </InputGroupAddon>
        </InputGroup>

        <div className="flex gap-2 items-center justify-center">
          <div className=" *:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
            <Avatar>
              <AvatarImage
                src="https://ca.slack-edge.com/T092WUWB6P6-U09CF8RU4QL-7c09cc195b6d-72"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://ca.slack-edge.com/T092WUWB6P6-U09DR9BHCJ0-870b4e5fba48-72"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://ca.slack-edge.com/T092WUWB6P6-U09CA094VFZ-b0fe1444c672-72"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Button
              className="size-8 z-0 ring-2 ring-background rounded-full"
              size="icon"
            >
              <PlusIcon className="size-4" weight="bold" />
            </Button>
          </div>
          <p className="text-xs w-5/12 text-left font-semibold text-balance">
            Financia tu procedimiento en menos de 5 minutos.
          </p>
        </div>
        <div className="w-[370px] h-[680px] box-border mt-6 border-13 ring-2 ring-border border-neutral-900 rounded-[52px] overflow-hidden bg-white relative">
          <div className="w-full p-2 font-bold text-sm grid grid-cols-3 items-center gap-10">
            <span>9:41</span>
            <span className="w-24 h-7 bg-neutral-900 flex rounded-full mx-auto"></span>
            <span>100%</span>
          </div>
          <h2 className="text-lg font-serif tracking-tight font-semibold p-2">
            Chat
          </h2>
          <div className="w-full h-[570px] pb-16 flex flex-col justify-end">
            Ahh
          </div>
          <div className="flex p-1 gap-1 absolute bottom-2 left-2 right-2">
            <Input
              type="text"
              className="w-full rounded-full bg-white h-10"
              placeholder="Escribe un mensaje"
            />
            <Button size="icon" className="rounded-full size-10">
              <PaperPlaneRightIcon className="size-4" weight="fill" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
