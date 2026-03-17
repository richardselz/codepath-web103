import pool from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const results = await pool.query(
            `SELECT * 
            FROM events 
            ORDER BY id ASC`);        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getEventsByLocationId = async (req, res) => {
    try {
        const results = await pool.query(
            `SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC`,
            [req.params.locationId]
        )
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getEventsById = async (req, res) => {
    try {
        const results = await pool.query(
            `SELECT * FROM events WHERE id = $1`,
            [req.params.eventId]
        )
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
  getEvents,
  getEventsByLocationId,
  getEventsById
}