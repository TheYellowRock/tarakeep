import { getEventById } from "@/lib/eventsQueries";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export default async function GuestInfoCard({params}:{params:{eventId:string}}){
    
    const event = await getEventById(params.eventId)

    return(
        <Card className="w-full">
            <CardHeader>
                <CardTitle>General Info</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <Label>Event Name: {event?.name}</Label>
                <Label>Event Description: {event?.description}</Label>
                <Label>Table Number: 4</Label>
                <Label>Number of Rounds: 3</Label>
            </CardContent>
        </Card>
    )
}