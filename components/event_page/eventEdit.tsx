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
import { getEventById } from "@/lib/eventsQueries"
import { Textarea } from "../ui/textarea"
import { Separator } from "../ui/separator"


export default async function EventEditPage({ params }: { params: { id: string } }) {

  const event = await getEventById(params.id)

  return (
    <Card className="w-full my-5 p-5">
      <CardHeader className="my-5">
        <CardTitle>Edit the Event Details</CardTitle>
        <CardDescription>Add the details of your event and save it.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Event Name</Label>
              <Input id="name" placeholder={event?.name} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Event Description</Label>
              <Textarea placeholder="A short description of the event." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Event Address</Label>
              <Input id="name" placeholder='Event address' />
            </div>
            <Separator />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Number of Tables</Label>
              <Input id="name" placeholder='Numbre of the available tables' />
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
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}