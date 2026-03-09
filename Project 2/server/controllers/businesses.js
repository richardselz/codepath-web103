import pool from '../config/database.js'

const getBusinesses = async (req, res) => {
    try {
        console.log("Reaching out to the DB for Businesses");
        const results = await pool.query('SELECT * FROM businesses ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getBusiness = async (req, res) => {
    try {
        console.log("Reaching out to DB for Business")
        const results = await pool.query(`SELECT * FROM businesses where id = ${req}`)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

export default {
  getBusinesses,
  getBusiness
}