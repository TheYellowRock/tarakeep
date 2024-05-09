
import QuestionsList from "@/components/questions_components/questionsList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getEventQuestions } from "@/lib/questionsQueries";


export default async function QuestionsSummary({ params }: { params: { id: string } }) {
    const questionsList = await getEventQuestions(params.id)

    return (
        <Card className="w-full my-5 p-5">
            <CardHeader className="my-5">
                <CardTitle>Event Questions</CardTitle>
                <CardDescription>List of questions for your event</CardDescription>
            </CardHeader>
            <CardContent>
                {questionsList.length === 0 ?
                    <Label>There is no questions related to this event yet.</Label> :
                    <div className="flex flex-col gap-2">
                        {questionsList.map((q) => (
                            <Label className="text-md" key={q.id}>- {q.question}</Label>
                        ))}
                    </div>
                }</CardContent>
        </Card>
    )
}