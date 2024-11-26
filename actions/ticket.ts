'use server'

import prisma from "@/lib/prisma"
import type { FormTicket } from "@/app/admin/tickets/form"

export async function getTickets() {
    return await prisma.ticket.findMany({
        include: {
            event: true
        }
    })
}

export async function getTicket(id: string) {
    return await prisma.ticket.findUnique({
        where: {
            id: id
        }
    })
}

export async function createTicket(data: FormTicket, eventId: string, quantity: number) {
    try {

        for (let i = 0; i < quantity; i++) {
            await prisma.ticket.create({
                data: {
                    name: data.name,
                    lastName: data.lastname,
                    email: data.email,
                    eventId: eventId
                }
            })
        }

        return { success: true }

    } catch (error) {
        console.error(error)
        return { success: false }
    }
}