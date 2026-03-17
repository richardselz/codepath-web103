const getAllLocations = async () => {
    const response = await fetch('/api/locations');
    const data = await response.json()
    return data;
}

const getLocationsById = async (id) => {
    const response = await fetch(`/api/locations/${id}`);
    const data = await response.json()
    return data;
}

export default {
    getAllLocations,
    getLocationsById
}