const Student = require('../models/Student'); // Nag-import sa Student model

// Function para sa pagdugang sa estudyante
const addStudent = (req, res) => {
    const studentData = req.body; // Gikuha ang datos sa estudyante gikan sa request body
    Student.addStudent(studentData, (err, results) => {
        if (err) {
            // Kung adunay sayop, nagbalik og 400 nga status code ug mensahe sa sayop
            return res.status(400).json({ message: err.message });
        }
        // Kung malampuson, nagbalik og 201 nga status code ug mensahe nga nadugang ang estudyante
        res.status(201).json({ message: 'Student added successfully!', results });
    });
};

// Function para sa pagkuha sa lista sa mga estudyante
const getStudents = (req, res) => {
    Student.getStudents((err, students) => {
        if (err) {
            // Kung adunay sayop, nagbalik og 500 nga status code ug mensahe sa sayop
            return res.status(500).json({ message: err.message });
        }
        // Kung malampuson, nagbalik og 200 nga status code ug ang lista sa mga estudyante
        res.status(200).json(students);
    });
};

// Nag-export sa mga function aron magamit sa mga routes
module.exports = {
    addStudent,
    getStudents,
};
