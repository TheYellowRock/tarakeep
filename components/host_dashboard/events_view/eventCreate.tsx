import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EventCreateDialog from "./eventCreateDialog";

export default function EventCreate(){
    return (
        <div>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>New Event</CardTitle>
                    <CardDescription>Create a new Event</CardDescription>
                </CardHeader>
                <CardContent>
                    <EventCreateDialog />
                </CardContent>
            </Card>
        </div>
    )
}