import { Dashboard } from "@/components/host_dashboard/dashboard";
import { getEvents } from "@/lib/eventsQueries";

export default async function Home() {
  const events = await getEvents()
  console.log({ events })
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Dashboard />
    </main>
  );
}
