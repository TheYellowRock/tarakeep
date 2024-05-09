import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export function Login() {
    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your Tarakeep Events App, or create a new account.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Email" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Password" required />
                        </div>
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    
                </div>
            </CardContent>
        </Card>
    )
}