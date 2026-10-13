import { useEffect, useState } from "react"
import { getEvents } from "../api/events"
import EventCard from "../components/events/EventCard"
import EventHeader from "../components/events/EventHeader"



const Events = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedDivision, setSelectedDivision] = useState('All')
    useEffect(() => {
        const loadEvents = async () => {
            try {
                const data = await getEvents()
                setEvents(data)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        loadEvents()
    }, [])

    const divisions = [...new Set(events.map((event) => event.division))]

    const handleDivisionChange = (division) => {
        setSelectedDivision(division)
    }

    const filteredEvents = selectedDivision === 'All' ? events
        :
        events.filter((event) => event.division === selectedDivision)


    if (loading) return <p>loading...</p>
    if (error) return <p>{error}</p>


    return (
        <div className="bg-[#F1F5F9]">
            <EventHeader totalEvents={events.length} divisions={divisions} selectedDivision={selectedDivision} handleDivisionChange={handleDivisionChange}></EventHeader>

            <div className="w-11/12  mx-auto gap-6 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    filteredEvents.map((event) => <EventCard key={event.id} event={event}></EventCard>)
                }
            </div>
        </div>
    );

}

export default Events