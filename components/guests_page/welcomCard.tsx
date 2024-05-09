import { getEventById } from "@/lib/eventsQueries";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Link from "next/link";


export default async function WelcomCardForGuests({ params }: { params: { eventId: string } }){

    const event = await getEventById(params.eventId)

    return(
        <Card className="p-10">
            <CardHeader className="w-full">
                <CardTitle className="mx-auto">Welcom To - {event?.name} -</CardTitle>
                <CardDescription className="mx-auto">{event?.description}</CardDescription>
            </CardHeader>
            <CardContent className="w-full py-10">
                <Label className="mx-auto">This Event is starting soon, join the waiting List as a Guest to be notified</Label>
            </CardContent>
            <CardFooter className="w-full py-10">
                <Link className="mx-auto" href={`/guests/${event?.id}/auths`}>
                <Button  >
                    Join the event waiting List as a Guest
                </Button></Link>
            </CardFooter>
        </Card>
    )
}