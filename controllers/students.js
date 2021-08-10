const mongoose = require('mongoose');
const Student = require('../models/Student');

const findAllStudents = (req, res) => {
    Student.find((err, students) => {
        err&& res.send(500).send(err.message);
        res.status(200).json(students);
    })
}

const findById = (req, res) => {
    Student.findById(req / params.id, (err, students) => {
        err && res.send(500).send(err.message);
        res.status(200).json(students);
    })
}

const addStudent = (req, res) => {
    let student = new Student({
    identificationCard: req.body.identificationCard,
    names: req.body.names,
    surnames: req.body.surnames,
    career: req.body.career,
    semester: req.body.semester
    })
    student.save((err, std) => {
        err && res.status(500).send(err.message);
        res.status(200).json(std);
    })
}

module.exports = { findAllStudents, findById, addStudent };