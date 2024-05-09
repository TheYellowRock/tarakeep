import EventEditPage from "@/components/event_page/eventEdit";
import GuestsInvite from "@/components/host_dashboard/events_view/eventGuestsInvite";
import { TopMenu } from "@/components/host_dashboard/navigation/topMenu";
import QuestionsCard from "@/components/questions_components/questionsAdd";
import { getEventById } from "@/lib/eventsQueries";

export default async function Page({ params }: { params: { id: string } }) {
    
    return(
        <main className="flex min-h-screen flex-col items-center p-24">
            <TopMenu />
            <EventEditPage params={params} />
            <QuestionsCard params={params}/>
            <GuestsInvite />
        </main>
    )
}