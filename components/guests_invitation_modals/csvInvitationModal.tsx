import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CSVInvitationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Send Bulk Invitation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Bulk Invitation</DialogTitle>
          <DialogDescription>
            Send direct invitation via email to many users - CSV File
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              CSV File
            </Label>
            <Input
              id="emails"
              type="file"
              className="col-span-3"
            />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
