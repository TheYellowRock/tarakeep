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
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function EventCreateDialog() {

    const [eventName, setEventName] = useState('My Awesome Event')
    const [eventDescription, setEventDescription] = useState('Type a short description of your event here.')
    const router = useRouter()

    const handleEventNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const eventNameInput = event.target
        setEventName(eventNameInput.value);
    }

    const handleEventDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const eventDescriptionInput = event.target
        setEventDescription(eventDescriptionInput.value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            await fetch("https://" + process.env.NEXT_PUBLIC_VERCEL_URL + '/api/create-event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ eventName, eventDescription })
            })
            router.refresh()
        } catch (err) {
            console.log(err)
        }

        setEventName('')
        setEventDescription('')
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create a new Event</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>New Event</DialogTitle>
                        <DialogDescription>
                            Create a new Event here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Event Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue={eventName}
                                onChange={handleEventNameChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                            <Textarea className="col-span-3" placeholder={eventDescription} onChange={handleEventDescriptionChange} />
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