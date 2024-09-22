const mysql = require('mysql2'); // Nag-import sa mysql2 nga library para sa MySQL database
require('dotenv').config(); // Nag-load sa mga environment variables gikan sa .env file

// Naghimo og koneksyon sa MySQL database
const db = mysql.createConnection({
    host: process.env.DB_HOST, // Hostname sa database (kasagaran 'localhost')
    user: process.env.DB_USER, // Username para sa pag-access sa database
    password: process.env.DB_PASSWORD, // Password para sa user
    database: process.env.DB_NAME, // Ngalan sa database nga gamiton
});

// Nag-export sa db connection para magamit sa lain nga bahin sa application
module.exports = db;
