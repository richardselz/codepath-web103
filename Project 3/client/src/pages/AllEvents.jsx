import { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'

const AllEvents = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            } catch (error) {
                throw error
            }
        })()
    }, [])

    return (
        <div>
            {events.length > 0 ? events.map((event) =>
                <Event
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    image={event.image}
                />
            ) : <h2>No events found.</h2>}
        </div>
    )
}

export default AllEvents
