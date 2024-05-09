import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default async function GuestsSummary(){
    return(
        <Card className="w-full my-5 p-5">
        <CardHeader className="my-5">
            <CardTitle>Event Guests</CardTitle>
            <CardDescription>List of guests attending your event</CardDescription>
        </CardHeader>
        <CardContent>
            <Label>No Guest to display</Label>
        </CardContent>
    </Card>
    )
}