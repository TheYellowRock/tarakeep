import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export default async function QuestionsCarousel(){
    return(
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Questions Area</CardTitle>
                <CardDescription>The question will display automatically when the Event Host will launch the Game, pay attention to the timer, and Good luck.</CardDescription>
            </CardHeader>
            <CardContent>
                <Label>Waiting for the Host to launch the game</Label>
            </CardContent>
            <CardFooter>
                <Button>Submit the Answers</Button>
            </CardFooter>
        </Card>
    )
}