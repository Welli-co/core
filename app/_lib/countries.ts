export const countryCodes = ["+57", "+51"] as const

export const countryInfo: Record<string, { name: string; flag: string }> = {
  "+57": { name: "Colombia", flag: "https://flagcdn.com/co.svg" },
  "+51": { name: "Perú", flag: "https://flagcdn.com/pe.svg" },
}
