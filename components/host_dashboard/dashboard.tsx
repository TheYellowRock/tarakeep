import EventView from "./events_view/eventView";
import { TopMenu } from "./navigation/topMenu";

export function Dashboard(){
    return(
        <>
            <TopMenu />
            <EventView />
        </>
    )
}