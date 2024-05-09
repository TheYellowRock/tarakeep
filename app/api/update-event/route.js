import { NextResponse } from "next/server"

export async function POST(request) {
    const res = await request.json()
    const {eventName, eventDescription} = res
    
    const result = await prisma.event.create({
        data:{
            name:eventName,
            description:eventDescription,         
        }
    })


    return NextResponse.json({result})
}