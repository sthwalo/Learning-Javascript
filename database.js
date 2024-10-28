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

// insertCourse('CS50', 'Introduction to Computer Science', 'Science and Technology', 'David Malan');
const getCourseData = async () => {
    try {
        const result = await pool.query('SELECT * FROM courses');
        console.table(result.rows);
    } catch (err) {
        console.error(`Error retrieving data: ${err.message}`);
    }
};

getCourseData();


const productJson = {
    name: 'White T-shirt',
    price: 5.99,
    inventory: [
      { size: 'S', quantity: 100 },
      { size: 'M', quantity: 150 },
      { size: 'L', quantity: 75 }
    ],
    returnable: true,
    brand: { name: 'Luxury', origin: 'Taiwan' },
    customization: null
};
const jsonString = JSON.stringify(productJson);

const insertProductData = async (jsonData) => {
    const query = 'INSERT INTO products(data) VALUES($1)';
    try {
        await pool.query(query, [jsonData]);
        console.log('Product data inserted successfully');
    } catch (err) {
        console.error('Error inserting product data:', err);
    }
};

const getProductData = async () => {
    try {
        const result = await pool.query('SELECT * FROM products');
        console.table(result.rows);  // Display the product data
    } catch (err) {
        console.error(`Error retrieving product data: ${err.message}`);
    }
};

const insertAndDisplayProductData = async () => {
    await insertProductData(jsonString);  // Insert the data
    await getProductData();  // Fetch and display the data
};

insertAndDisplayProductData();