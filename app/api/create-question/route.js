import { NextResponse } from "next/server"

export async function POST(request) {
    const res = await request.json()
    const {question, eventId} = res
    
    const result = await prisma.question.create({
        data:{
            eventId:parseInt(eventId),
            question:question,         
        }
    })


    return NextResponse.json({result})
}