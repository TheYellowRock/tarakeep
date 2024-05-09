import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button"

export default async function GuestsInvite() {
    return (
        <Card className="w-full p-10">
            <CardHeader>
                <CardTitle>Invite Guests to your Event</CardTitle>
                <CardDescription>You can send Individual invitations, or upload a CSV file to invite many guests at once, or share the link to your event directly.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
                <Button className="w-full m-2" >
                    Send Individual Invitation
                </Button>
                <Button className="w-full m-2">
                    Bulk Invitation via CSV
                </Button>
                <Button className="w-full m-2">
                    Share Event Link
                </Button>
            </CardContent>
        </Card>
    )
}