import pkg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { Client } = pkg;

// Connection details from environment variables
const config = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

// Using .then() chaining to connect and query (this will display the rows in a table format)
function queryWithThen() {
  const client = new Client(config);
  client.connect()
    .then(() => {
      return client.query('SELECT * FROM users');
    })
    .then(res => {
      console.table(res.rows);  // Display the full rows in a table format
    })
    .catch(err => {
      console.error('Error executing query with .then()', err.stack);
    })
    .finally(() => {
      client.end();  // Ensure the connection is closed
    });
}

// Using async/await to connect and query (this will display a different output, e.g., number of rows)
async function queryWithAsyncAwait() {
  const client = new Client(config);
  try {
    await client.connect();  // Wait for connection
    const res = await client.query('SELECT * FROM users');  // Wait for query
    
    // Display something different - e.g., number of rows and the first user's name
    console.log(`Number of rows: ${res.rowCount}`);
    
    if (res.rows.length > 0) {
      console.log(`First user: ${res.rows[0].name}`);  // Display the first user's name
    } else {
      console.log('No users found');
    }
  } catch (err) {
    console.error('Error executing query with async/await', err.stack);
  } finally {
    await client.end();  // Ensure the connection is closed
  }
}

// Call both functions for demonstration
queryWithThen();  // Executes using .then(), displays rows in a table
queryWithAsyncAwait();  // Executes using async/await, displays row count and first user's name