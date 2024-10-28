// Import necessary modules
import express from 'express';
//import { Pool } from 'pg';
import pkg from 'pg';
const {Pool} = pkg;

// Set up the Express app
const app = express();
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Middleware to parse JSON
app.use(express.json());

// Define the server port
const port = process.env.PORT || 3000;

// Define the route for fetching course data
app.get('/courses', async (req, res) => {
    try {
        const result = await pool.query('SELECT details FROM courses'); // Assuming 'details' contains the JSON data
        result.rows.forEach(row => {
            const details = row.details;
            // Print keys to the console using a for loop
            for (const key in details) {
                console.log(`${key}: ${details[key]}`);
            }
        });
        res.send('Data logged to console');
    } catch (err) {
        console.error(`Error retrieving data: ${err.message}`);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});