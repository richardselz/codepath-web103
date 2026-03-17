import { useParams } from 'react-router-dom';

const getAllEvents = async () => {
    const response = await fetch('/API/events');
    const data = await response.json()
    return data;
}

const getEventsById = async (id) => {
    const response = await fetch(`/API/events/${id}`);
    const data = await response.json()
    return data;
}

export default {
    getAllEvents,
    getEventsById
}