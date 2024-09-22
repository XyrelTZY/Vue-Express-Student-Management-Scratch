const db = require('../config/db'); // Nag-import sa database configuration

class Student {
    // Static method para sa pagdugang sa estudyante
    static addStudent(studentData, callback) {
        const sql = 'INSERT INTO students (name, email) VALUES (?, ?)'; // SQL query para sa pagdugang sa estudyante
        db.query(sql, [studentData.name, studentData.email], (err, results) => {
            if (err) return callback(err); // Kung adunay error, ibalik ang error sa callback
            callback(null, results); // Kung malampuson, ibalik ang resulta
        });
    }

    // Static method para sa pagkuha sa lista sa mga estudyante
    static getStudents(callback) {
        const sql = 'SELECT * FROM students'; // SQL query para sa pagkuha sa tanang estudyante
        db.query(sql, (err, results) => {
            if (err) return callback(err); // Kung adunay error, ibalik ang error sa callback
            callback(null, results); // Kung malampuson, ibalik ang lista sa estudyante
        });
    }
}

// Nag-export sa Student class aron magamit sa uban nga bahin sa application
module.exports = Student;
