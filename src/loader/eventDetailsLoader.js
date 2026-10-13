import { getEventById } from "../api/events"

export const eventDetailsLoader = async ({ params }) => {
    const event = await getEventById(params.id)

    if (!event) {
        throw new Response('Event not found', { status: 404 })
    }
    return event
}