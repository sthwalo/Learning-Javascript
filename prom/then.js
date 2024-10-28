/* // Simulate fetching user data
const getUser = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "John Doe", role: "admin" };
      console.log("User data fetched:", user);
      resolve(user);  // Resolve with user data
    }, 1000); // Simulate 1 second delay
  });
  
  // Simulate fetching permissions based on role
  const getPermissions = (user) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.role === "admin") {
        const permissions = ["read", "write", "delete"];
        console.log("Permissions fetched for", user.name, ":", permissions);
        resolve(permissions);  // Resolve with permissions
      } else {
        reject("User does not have sufficient privileges");
      }
    }, 1000); // Simulate 1 second delay
  });
  
  // Simulate logging user activity
  const logActivity = (permissions) => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User activity logged: Permissions were fetched:", permissions);
      resolve("Activity logged successfully");
    }, 500); // Simulate 0.5 second delay
  });
  
  // Now let's chain these promises
  getUser()
    .then(user => getPermissions(user))  // Pass user data to the next step
    .then(permissions => logActivity(permissions))  // Pass permissions to log activity
    .then(result => console.log(result))  // Final log of the activity result
    .catch(error => console.error("Error:", error));  // Handle any errors */


    import pkg from 'pg';
    import dotenv from 'dotenv';
    
    // Load environment variables from .env file
    dotenv.config();
    
    const { Client } = pkg;
    
    const client = new Client({
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
    });
    
    // Using .then() chaining to connect and query
    client.connect()
      .then(() => {
        return client.query('SELECT * FROM users');
      })
      .then(res => {
        console.table(res.rows);  // Display data in table format
      })
      .catch(err => {
        console.error('Error executing query', err.stack);
      })
      .finally(() => {
        client.end();  // Ensure the connection is closed
      });  