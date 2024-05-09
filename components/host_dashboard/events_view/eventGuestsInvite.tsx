import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button"
import { ShareLinkModale } from "@/components/guests_invitation_modals/shareLinkModale";
import { SingelInvitationModal } from "@/components/guests_invitation_modals/singleInvitationModal";
import { CSVInvitationModal } from "@/components/guests_invitation_modals/csvInvitationModal";

export default async function GuestsInvite() {
    return (
        <Card className="w-full p-10">
            <CardHeader>
                <CardTitle>Invite Guests to your Event</CardTitle>
                <CardDescription>You can send Individual invitations, or upload a CSV file to invite many guests at once, or share the link to your event directly.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
                <SingelInvitationModal />
                <CSVInvitationModal />
                <ShareLinkModale />
            </CardContent>
        </Card>
    )
}