import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default async function EventActions({ params }: { params: { id: string } }) {
    return (
        <Card>
            <CardContent className="my-10">
                <Link href={`/event/${params.id}`}>
                    <Button className="w-full m-2" >
                        Edit Event
                    </Button>
                </Link>
                <Link href={`/guests/${params.id}`}>
                    <Button variant="ghost" className="w-full m-2">
                        Preview Event Page
                    </Button>
                </Link>
                <Button variant="ghost" className="w-full m-2">
                    Generate QR Code
                </Button>
                <Button variant="destructive" className="w-full m-2">
                    Delete Event
                </Button>
            </CardContent>
        </Card>
    )
}