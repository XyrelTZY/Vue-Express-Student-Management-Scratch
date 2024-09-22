const express = require('express'); // Nag-import sa express framework
const { addStudent, getStudents } = require('../controllers/studentController'); // Nag-import sa mga function gikan sa studentController

const router = express.Router(); // Naghimo og router gamit ang express

// Route para sa pagdugang sa estudyante
router.post('/', addStudent); // Kung ang POST request maabot sa '/', tawagon ang addStudent function

// Route para sa pagkuha sa lista sa mga estudyante
router.get('/', getStudents); // Kung ang GET request maabot sa '/', tawagon ang getStudents function

// Nag-export sa router aron magamit sa main server file
module.exports = router;
