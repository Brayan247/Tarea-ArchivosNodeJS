const StudentController = require('../controllers/students');
const express = require('express');
const router = express.Router();

router.get("/all", StudentController.findAllStudents);
router.get("/:id", StudentController.findById);
router.post("/add", StudentController.addStudent);

module.exports = router;