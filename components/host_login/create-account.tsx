import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



export function CreateAHostAccount() {
    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>New Account</CardTitle>
                <CardDescription>Create a new Account and start creating events</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" type="text" placeholder="First Name" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" type="text" placeholder="Last Name" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName">LinkedIn Profile</Label>
                            <Input id="lastName" type="text" placeholder="LinkedIn Profile" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName">Email</Label>
                            <Input id="email" type="text" placeholder="Email" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Password" required />
                        </div>
                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                </div>
            </CardContent>

        </Card>
    )
}