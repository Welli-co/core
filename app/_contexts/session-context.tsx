"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};

export type Session = {
  token: string | null;
  user: User | null;
};

type SessionContextValue = {
  session: Session;
  login: (token: string, user: User) => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextValue | null>(null);

const initialSession: Session = { token: null, user: null };

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session>(initialSession);

  function login(token: string, user: User) {
    setSession({ token, user });
  }

  function logout() {
    setSession(initialSession);
  }

  return (
    <SessionContext value={{ session, login, logout }}>
      {children}
    </SessionContext>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}
