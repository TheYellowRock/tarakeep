import { CreateAnAccount } from "@/components/guests_page/login/create-account";
import { Login } from "@/components/guests_page/login/login";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Tabs defaultValue="login" className="w-[400px]">
                <div className="w-full  py-10">
                    <Label className="flex text-3xl font-semibold justify-around">Welcom to Tarakeep</Label>
                </div>
                <TabsList className="w-full">
                    <TabsTrigger className="w-full" value="login">LogIn</TabsTrigger>
                    <TabsTrigger className="w-full" value="create-account">New Account</TabsTrigger>
                </TabsList>
                <TabsContent value="login"><Login /></TabsContent>
                <TabsContent value="create-account"><CreateAnAccount /></TabsContent>
            </Tabs>
        </main>
    )
}