import { NextResponse } from "next/server"

export async function POST(request) {
    const res = await request.json()
    const {eventId, eventName, eventDescription, eventAdres, numOfTables} = res
    
    const result = await prisma.event.update({
        where:{
            id:parseInt(eventId)
        },
        data:{
            name:eventName,
            description:eventDescription, 
            location:eventAdres,
            numberOfTables:parseInt(numOfTables),       
        }
    })
1
    return NextResponse.json({result})
}