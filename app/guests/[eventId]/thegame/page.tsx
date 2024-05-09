'use client'
import GuestInfoCard from "@/components/guests_page/infoCard";
import QuestionsCarousel from "@/components/guests_page/questionsCarousel";
import Timer from "@/components/guests_page/timer";
import { useParams } from "next/navigation";

export default async function Page(){
    const params = useParams<{ eventId: string}>()
    return(
        <main className="flex min-h-screen flex-col items-center p-24 gap-5">
            <div className="w-full grid grid-cols-3 gap-5">
                <div className=" col-span-2">
                    <GuestInfoCard params={params}/>
                </div>
                <div className=" col-span-1">
                    <Timer />
                </div>
            </div>
            <div className="w-full">
                <QuestionsCarousel />
            </div>
        </main>
    )
}