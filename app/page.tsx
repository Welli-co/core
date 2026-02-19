"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/app/_contexts/session-context";

export default function Page() {
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.token) {
      router.replace("/patients");
    } else {
      router.replace("/sso");
    }
  }, [session.token, router]);

  return null;
}
