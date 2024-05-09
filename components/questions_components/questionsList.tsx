import { getEventQuestions } from "@/lib/questionsQueries";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";

export default async function QuestionsList({ params }: { params: { id: string } }) {

    const questionsList = await getEventQuestions(params.id)

    return (
        <div className="p-5">
            {questionsList.length === 0 ?
                <Label>There is no questions related to this event yet.</Label> :
                <div className=" flex flex-col">
                    {questionsList.map((q) => (
                        <Link key={q.id} href={`/event/${q.id}`}>
                            <div className="flex flex-col p-3 gap-6">
                                <div className="flex flex-row justify-between">
                                    <div className="font-semibold">{q.question}</div>
                                    <div className="flex flex-row gap-3">
                                        <Button variant="outline" size="icon">
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </div>
    )
}