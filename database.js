// Importing the required modules using ES6 import syntax
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const insertCourse = async (code, name, department, instructor) => {
    const query = `INSERT INTO courses (code, name, department, instructor) VALUES ($1, $2, $3, $4)`;
    const values = [code, name, department, instructor];

    try {
        await pool.query(query, values);
        console.log('Course inserted successfully');
    } catch (err) {
        console.error(`Error inserting course: ${err.message}`);
    }
};

const getCourseData = async () => {
    try {
        const result = await pool.query('SELECT * FROM courses');
        console.table(result.rows);
    } catch (err) {
        console.error(`Error retrieving data: ${err.message}`);
    }
};

// Function calls
// Uncomment the next line if you need to insert a new course
// insertCourse('CS50', 'Introduction to Computer Science', 'Science and Technology', 'David Malan');

getCourseData();