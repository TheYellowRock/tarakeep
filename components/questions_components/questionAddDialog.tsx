'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function QuestionAddDialog({ params }: { params: { id: string } }) {

    const [question, setQuestion] = useState('Super Hard Question ')
    const router = useRouter()
    const eventId = params.id

    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const questionInput = event.target
        setQuestion(questionInput.value);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            await fetch("https://" + process.env.NEXT_PUBLIC_VERCEL_URL + '/api/create-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question, eventId })
            })
            router.refresh()
        } catch (err) {
            console.log(err)
        }

        setQuestion('')
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    <Plus className="mr-2 h-4 w-4" /> Add a new Question
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>New Question</DialogTitle>
                        <DialogDescription>
                            Create a new Event Question here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Question
                            </Label>
                            <Input
                                id="name"
                                defaultValue={question}
                                onChange={handleQuestionChange}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}