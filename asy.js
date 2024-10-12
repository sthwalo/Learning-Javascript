import pkg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { Client } = pkg;

// Use environment variables for the PostgreSQL client configuration
const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

async function runQuery() {
  try {
    // Connect to the database
    await client.connect();
    
    // Run a query to fetch all users
    const res = await client.query('SELECT * FROM users');
    
    // Log the retrieved user data in table format
    console.table(res.rows);  // Use console.table for a neat tabular output
  } catch (err) {
    // Handle any errors during connection or query execution
    console.error('Error executing query', err.stack);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Run the query
runQuery();