import WelcomCardForGuests from "@/components/guests_page/welcomCard";

export default async function Page({ params }: { params: { eventId: string } }){
    return(
        <main className="flex min-h-screen flex-col items-center p-24">
            <WelcomCardForGuests params={params} />
        </main>
    )
}