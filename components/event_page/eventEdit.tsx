'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../ui/textarea"
import { Separator } from "../ui/separator"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function EventEditPage({ params }: { params: { id: string } }) {

  const eventId = params.id
  const [eventName, setEventName] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventAdres, setEventAdres] = useState('')
  const [numOfTables, setNumOfTables] = useState(0)
  const [seatsPerTable, setSeatsPerTable] = useState(0)

  const router = useRouter()

  const handleEventNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventNameInput = event.target
    setEventName(eventNameInput.value);
  }

  const handleEventDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const eventDescriptionInput = event.target
    setEventDescription(eventDescriptionInput.value)
  }

  const handleEventAdresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventAdresInput = event.target
    setEventAdres(eventAdresInput.value);
  }

  const handleNumOfTablesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numOfTablesInput = event.target
    setNumOfTables(parseInt(numOfTablesInput.value));
  }

  const handleSeatsPerTableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seatsPerTableInput = event.target
    setSeatsPerTable(parseInt(seatsPerTableInput.value));
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await fetch("https://" + process.env.NEXT_PUBLIC_VERCEL_URL + '/api/update-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ eventId, eventName, eventDescription, eventAdres, numOfTables, seatsPerTable })
      })
      router.refresh()
    } catch (err) {
      console.log(err)
    }

  }


  return (
    <Card className="w-full my-5 p-5">
      <CardHeader className="my-5">
        <CardTitle>Edit the Event Details</CardTitle>
        <CardDescription>Add the details of your event and save it.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>

          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Event Name</Label>
              <Input id="name" defaultValue={eventName} onChange={handleEventNameChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Event Description</Label>
              <Textarea placeholder={eventDescription} onChange={handleEventDescriptionChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Event Address</Label>
              <Input id="address" defaultValue={eventAdres} onChange={handleEventAdresChange} />
            </div>
            <Separator />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="numOfTables">Number of Tables</Label>
              <Input id="numOfTables" defaultValue={numOfTables} onChange={handleNumOfTablesChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="seats">Number of Seats per Table</Label>
              <Select>
                <SelectTrigger id="seats">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save Changes</Button>
        </CardFooter>
      </form>
    </Card>
  )
}