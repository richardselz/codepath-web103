import pool from './database.js'
import './dotenv.js'
import businessesData from '../data/businesses.js'

const createBusinessesTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS businesses;

        CREATE TABLE IF NOT EXISTS businesses (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            type VARCHAR(25) NOT NULL,
            profitability VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 businesses table created successfully')
    } catch (err) {
        console.error('⚠️ error creating businesses table', err)
    }
}

const seedBusinessesTable = async () => {
    await createBusinessesTable()

    businessesData.forEach((business) => {
        const insertQuery = {
            text: 'INSERT INTO businesses (name, type, profitability, location) VALUES ($1, $2, $3, $4)'
        }

        const values = [
            business.name,
            business.type,
            business.profitability,
            business.location
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting business', err)
                return
            }

            console.log(`✅ ${business.name} added successfully`)
        })
    })
}

seedBusinessesTable()