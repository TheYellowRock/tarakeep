import prisma from '@/lib/prisma'

export async function getEventQuestions(eventId: string) {
    const questions = await prisma.question.findMany({ where: { eventId: parseInt(eventId) } })
    return questions
}