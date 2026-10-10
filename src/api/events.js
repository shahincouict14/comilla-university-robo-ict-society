import events from '../data/event.json'
export const getEvents = async () => {
    return events
}

export const getEventById = async (id) => {
    return events.find((event) => event.id === Number(id))
}