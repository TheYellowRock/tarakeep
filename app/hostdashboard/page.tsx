import { Dashboard } from "@/components/host_dashboard/dashboard";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Dashboard />
    </main>
  );
}
