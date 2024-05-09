import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export default async function GuestInfoCard(){
    return(
        <Card className="w-full">
            <CardHeader>
                <CardTitle>General Info</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <Label>Event Name</Label>
                <Label>Event Description</Label>
                <Label>Table Number</Label>
                <Label>Number of Rounds</Label>
            </CardContent>
        </Card>
    )
}