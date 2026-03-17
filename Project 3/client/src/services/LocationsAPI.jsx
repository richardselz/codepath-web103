import { useParams } from 'react-router-dom';

const getAllLocations = async () => {
    const response = await fetch('/API/locations');
    const data = await response.json()
    return data;
}

const getLocationById = async () => {
    const { id } = useParams();

    const response = await fetch(`/API/locations/${id}`);
    const data = await response.json()
    return data;
}

export default {
    getAllLocations,
    getLocationById
}