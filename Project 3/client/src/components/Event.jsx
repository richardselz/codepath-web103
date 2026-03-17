import { useState, useEffect } from 'react'
import '../css/Event.css'

const Event = (props) => {

    const [remaining, setRemaining] = useState('')

    useEffect(() => {
        try {
            if (!props.date || !props.time) return
            const dateOnly = new Date(props.date).toISOString().split('T')[0]
            const eventDate = new Date(`${dateOnly} ${props.time}`)
            const diff = eventDate - new Date()
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
            const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
            setRemaining(formatter.format(days, 'day'))
        } catch (error) {
            setRemaining('')
        }
    }, [props.date, props.time])

    return (
        <article className='event-information'>
            <img src={props.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {props.date} <br /> {props.time}</p>
                    <p id={`remaining-${props.id}`}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event