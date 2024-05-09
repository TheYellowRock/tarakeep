import prisma from '@/lib/prisma'

export async function getEvents() {
    const events = await prisma.event.findMany()
    return events
}

export async function getEventById(eventId: string) {

    const event = await prisma.event.findUnique({ where: { id: parseInt(eventId) } })
    return event
}