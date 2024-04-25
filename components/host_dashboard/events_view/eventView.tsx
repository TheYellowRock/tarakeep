import EventCreate from "./eventCreate";
import EventsList from "./eventsList";


export default function EventView() {
    return(
        <div className="w-full pt-10">
            <div className="flex flex-row gap-7">
                <div className="w-2/3">
                    <EventsList />
                </div>
                <div className="w-1/3">
                    <EventCreate />
                </div>
            </div>
        </div>
    )
}