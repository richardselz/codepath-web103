import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'

const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                console.log("locations returned", locationsData);
                setLocations(locationsData)

                setListeners()
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const setListeners = () => {
        const polygons = document.querySelectorAll('polygon')

        polygons.forEach(element => {
            element.addEventListener('mouseover', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`)
                buttonElement.style.opacity = 1;
            })

            element.addEventListener('mouseleave', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`)
                buttonElement.style.opacity = 0;
            })
        })
    }

    return (
        <div className='available-locations'>

            {locations.map((location) => (
                <a key={location.id} href={`/locations/${location.id}`} style={{position: 'relative', display: 'inline-block'}}>
                    <img src={location.image} alt={location.name} />
                    <span style={{position: 'absolute', top: 0, left: 0, width: '100%', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '4px 0'}}>{location.name}</span>
                </a>
            ))}
   
        </div>
    )
}

export default Locations