import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export default async function Timer(){
    return(
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Event's Timer</CardTitle>
            </CardHeader>
            <CardContent>
                <Label>This event is Starting Soon</Label>
            </CardContent>
        </Card>
    )
}