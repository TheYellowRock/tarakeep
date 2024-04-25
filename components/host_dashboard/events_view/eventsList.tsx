import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getEvents } from "@/lib/eventsQueries";
import Link from "next/link";



export default async function EventsList() {

    const events = await getEvents()

    return (
        <div>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Events</CardTitle>
                    <CardDescription>List of your active Events</CardDescription>
                </CardHeader>
                <CardContent>
                    {events.length === 0 ?
                        <Label>No Active Event at the moment</Label> :
                        <div className=" flex flex-col">
                            {events.map((e) => (
                                <Link href={""}>
                                    <div className="flex flex-col p-3 gap-6">
                                        <Separator />
                                        <div className="flex flex-col gap-2">
                                            <div className="text-xl font-semibold">{e.name}</div>
                                            <div>{e.description}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    }

                </CardContent>
            </Card>
        </div>
    )
}

function ListItem(event: any) {
    return (
        <>
            <Separator />
            <div className="flex flex-col p-5">
                <div className="text-xl font-semibold pb-2">{event.name}</div>
                <div>{event.description}</div>
            </div>
        </>
    )
}