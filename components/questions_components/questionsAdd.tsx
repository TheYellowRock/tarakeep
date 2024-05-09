import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import QuestionAddDialog from "./questionAddDialog"
import QuestionsList from "./questionsList"

export default function QuestionsCard({ params }: { params: { id: string } }) {
    return (

        <Card className="w-full my-5 p-5">
            <CardHeader className="my-5">
                <CardTitle>Add Event Questions</CardTitle>
                <CardDescription>Create the questions for your event</CardDescription>
            </CardHeader>
            <CardContent>
                <QuestionsList params={params} />
                <QuestionAddDialog params={params} />
            </CardContent>
            <CardFooter className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
            </CardFooter>
        </Card>

    )
}