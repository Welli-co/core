import type { Meta, StoryObj } from "@storybook/react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@workspace/ui/components/select"

const meta: Meta = {
  title: "UI/Select",
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Seleccionar fruta" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frutas</SelectLabel>
          <SelectItem value="apple">Manzana</SelectItem>
          <SelectItem value="banana">Plátano</SelectItem>
          <SelectItem value="orange">Naranja</SelectItem>
          <SelectItem value="grape">Uva</SelectItem>
          <SelectItem value="pineapple">Piña</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Seleccionar zona" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>América</SelectLabel>
          <SelectItem value="est">Este (EST)</SelectItem>
          <SelectItem value="cst">Central (CST)</SelectItem>
          <SelectItem value="pst">Pacífico (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europa</SelectLabel>
          <SelectItem value="gmt">GMT</SelectItem>
          <SelectItem value="cet">CET</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Small: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]" size="sm">
        <SelectValue placeholder="Tamaño pequeño" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">Opción 1</SelectItem>
          <SelectItem value="2">Opción 2</SelectItem>
          <SelectItem value="3">Opción 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
