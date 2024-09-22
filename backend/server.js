const express = require('express'); // Nag-import sa express framework
const bodyParser = require('body-parser'); // Nag-import sa body-parser para sa pag-parse sa JSON body
const cors = require('cors'); // Nag-import sa CORS para sa cross-origin resource sharing
const studentRoutes = require('./routes/studentroutes'); // Nag-import sa student routes
const db = require('./config/db'); // Nag-import sa database configuration
require('dotenv').config(); // Nag-load sa environment variables gikan sa .env file

const app = express(); // Naghimo og Express application
const PORT = process.env.PORT || 3000; // Nag-set sa port number gikan sa .env o default nga 3000

// Middleware
app.use(cors({
    origin: 'http://localhost:5173' // Nag-allow sa requests gikan sa imong Vue app
}));

app.use(bodyParser.json()); // Nag-enable sa body-parser para sa pag-parse sa JSON request body

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err); // Kung naay error sa koneksyon, ipakita ang error
        return;
    }
    console.log('Connected to MySQL'); // Kung malampuson ang koneksyon, ipakita ang mensahe
});

// API Routes
app.use('/api/students', studentRoutes); // Nag-link sa student routes sa '/api/students'

// Root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Student Management API'); // Optional root route nga nagbalik og mensahe
});

// Nagpaminaw sa mga requests sa giset nga port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // I-display ang mensahe nga nagdagan ang server
});
