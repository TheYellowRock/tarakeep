import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getEventById } from "@/lib/eventsQueries";

export default async function EventDetailsCard({ params }: { params: { id: string } }) {
    const event = await getEventById(params.id)
    return (
        <Card>
            <CardHeader className="my-5">
                <CardTitle>Event Details</CardTitle>
                <CardDescription>A summary of the details of your event.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <Label className="text-xl font-semibold py-2">{event?.name}</Label>
                <Label className="text-md pb-4">{event?.description}</Label>
                <Label className="py-2">Address:</Label>
                <Label className="py-2">Start Date:</Label>
                <Label className="py-2">End Date:</Label>
                <Label className="py-2">Numbre of Tables:</Label>
                <Label className="py-2">Seats per Table:</Label>
            </CardContent>
        </Card>
    )
}