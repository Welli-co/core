import type { LoanStatus } from "./loans"

export type ChatAuthor = "system" | "patient"

export type ChatMessage = {
  id: string
  authorType: ChatAuthor
  authorName: string
  sentAt: string
  body: string
  deliveryStatus?: "sent" | "delivered" | "read"
}

export type ChatConversation = {
  id: string
  patient: {
    name: string
  }
  loanId: string
  status: LoanStatus
  lastMessage: string
  lastActivity: string
  unreadCount?: number
  messages: ChatMessage[]
}

const conversations: ChatConversation[] = [
  {
    id: "CHT-001",
    patient: { name: "Pepe Sierra" },
    loanId: "CR-10010",
    status: "Aprobado",
    lastMessage: "Perfecto, envío la firma esta tarde.",
    lastActivity: "11:46",
    messages: [
      {
        id: "MSG-001",
        authorType: "system",
        authorName: "Welli",
        sentAt: "10:02",
        body: "Hola Pepe, tu solicitud de crédito #CR-10010 fue aprobada. Para desembolsar, necesitamos tu firma digital.",
        deliveryStatus: "read",
      },
      {
        id: "MSG-002",
        authorType: "patient",
        authorName: "Pepe Sierra",
        sentAt: "10:15",
        body: "¡Genial! ¿Dónde firmo?",
      },
      {
        id: "MSG-003",
        authorType: "system",
        authorName: "Welli",
        sentAt: "10:17",
        body: "Te enviamos un link seguro por SMS. Expira en 24 horas.",
        deliveryStatus: "read",
      },
      {
        id: "MSG-004",
        authorType: "patient",
        authorName: "Pepe Sierra",
        sentAt: "11:46",
        body: "Perfecto, envío la firma esta tarde.",
      },
    ],
  },
  {
    id: "CHT-002",
    patient: { name: "María Fernández" },
    loanId: "CR-10001",
    status: "En revisión",
    lastMessage: "Gracias, adjunté los documentos.",
    lastActivity: "09:22",
    unreadCount: 1,
    messages: [
      {
        id: "MSG-010",
        authorType: "system",
        authorName: "Welli",
        sentAt: "08:55",
        body: "Buenos días María, falta tu certificado laboral para continuar con la solicitud #CR-10001.",
        deliveryStatus: "read",
      },
      {
        id: "MSG-011",
        authorType: "patient",
        authorName: "María Fernández",
        sentAt: "09:10",
        body: "Lo subo hoy mismo, ¿por este medio o por el portal?",
      },
      {
        id: "MSG-012",
        authorType: "system",
        authorName: "Welli",
        sentAt: "09:11",
        body: "Por el portal, te dejo el enlace directo a la sección de documentos.",
        deliveryStatus: "delivered",
      },
      {
        id: "MSG-013",
        authorType: "patient",
        authorName: "María Fernández",
        sentAt: "09:22",
        body: "Gracias, adjunté los documentos.",
      },
    ],
  },
  {
    id: "CHT-003",
    patient: { name: "Carlos Ramírez" },
    loanId: "CR-10002",
    status: "En progreso",
    lastMessage: "Confirmado, nos vemos el martes.",
    lastActivity: "Ayer",
    messages: [
      {
        id: "MSG-020",
        authorType: "system",
        authorName: "Welli",
        sentAt: "Lun 14:30",
        body: "Hola Carlos, tu crédito de ortodoncia fue aprobado. Coordinemos la fecha de inicio del tratamiento.",
        deliveryStatus: "read",
      },
      {
        id: "MSG-021",
        authorType: "patient",
        authorName: "Carlos Ramírez",
        sentAt: "Lun 15:02",
        body: "¿Tienen espacio el martes 14?",
      },
      {
        id: "MSG-022",
        authorType: "system",
        authorName: "Welli",
        sentAt: "Lun 15:05",
        body: "Sí, tenemos disponibilidad a las 10:00 am con el Dr. Pardo.",
        deliveryStatus: "read",
      },
      {
        id: "MSG-023",
        authorType: "patient",
        authorName: "Carlos Ramírez",
        sentAt: "Ayer",
        body: "Confirmado, nos vemos el martes.",
      },
    ],
  },
  {
    id: "CHT-004",
    patient: { name: "Ana María López" },
    loanId: "CR-10003",
    status: "Completado",
    lastMessage: "¿En cuánto tiempo recibo la respuesta?",
    lastActivity: "Mar",
    messages: [
      {
        id: "MSG-030",
        authorType: "system",
        authorName: "Welli",
        sentAt: "Mar 08:40",
        body: "Hola Ana, recibimos tu solicitud #CR-10003. Estamos revisando los documentos.",
        deliveryStatus: "read",
      },
      {
        id: "MSG-031",
        authorType: "patient",
        authorName: "Ana María López",
        sentAt: "Mar 08:45",
        body: "¿En cuánto tiempo recibo la respuesta?",
      },
    ],
  },
  {
    id: "CHT-005",
    patient: { name: "Laura Gómez" },
    loanId: "CR-10007",
    status: "Rechazado",
    lastMessage: "Entiendo, gracias por la claridad.",
    lastActivity: "Lun",
    messages: [
      {
        id: "MSG-040",
        authorType: "system",
        authorName: "Welli",
        sentAt: "Lun 11:10",
        body: "Hola Laura, la solicitud #CR-10007 fue rechazada por el análisis de riesgo. Puedes aplicar nuevamente en 60 días.",
        deliveryStatus: "read",
      },
      {
        id: "MSG-041",
        authorType: "patient",
        authorName: "Laura Gómez",
        sentAt: "Lun 11:25",
        body: "Entiendo, gracias por la claridad.",
      },
    ],
  },
]

export async function getChats(): Promise<ChatConversation[]> {
  return conversations
}
