import { Notifications } from "@/components/notifications"

import { PageHeader } from "./_components/page-header"
import {
  PulsoGreetingDescription,
  PulsoGreetingTitle,
} from "./_components/pulso-greeting"

export default function Page() {
  return (
    <main className="divide-y">
      <PageHeader
        title={<PulsoGreetingTitle />}
        description={
          <PulsoGreetingDescription
            pendingDisbursements={2}
            pendingSignatures={6}
          />
        }
        actions={<Notifications />}
      />
    </main>
  )
}
