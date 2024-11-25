'use server'

import prisma from "@/lib/prisma"
import type { EventStatus } from "@prisma/client"
import type { Event } from "@/app/admin/events/form"

export async function getEvents() {
    return await prisma.event.findMany()
}

export async function getEvent(id: string) {
    return await prisma.event.findUnique({
        where: {
            id: id
        }
    })
}

export async function createEvent(data: Event) {
    try {

        await prisma.event.create({
            data: {
                name: data.name,
                description: data.description,
                date: data.date,
                status: data.status as EventStatus,
                price: data.price,
                capacity: data.capacity,
                location: data.location,
            }
        })

        return { success: true }

    } catch (error) {
        console.error(error)
        return { success: false }
    }
}