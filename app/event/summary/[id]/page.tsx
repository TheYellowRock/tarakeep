import EventActions from "@/components/host_dashboard/events_summary/eventActions";
import EventDetailsCard from "@/components/host_dashboard/events_summary/eventDetails";
import GuestsSummary from "@/components/host_dashboard/events_summary/eventGuests";
import QuestionsSummary from "@/components/host_dashboard/events_summary/eventQuestions";
import { TopMenu } from "@/components/host_dashboard/navigation/topMenu";
import QuestionsCard from "@/components/questions_components/questionsAdd";

export default async function Page({ params }: { params: { id: string } }){
    return(
        <main className="flex min-h-screen flex-col items-center p-24">
            <TopMenu />
            <div className="w-full grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <EventDetailsCard params={params}/>
                </div>
                <div className=" col-span-1">
                    <EventActions params={params}/>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-5">
                <QuestionsSummary params={params}/>
                <GuestsSummary />
            </div>
        </main>
    )

}