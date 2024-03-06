const express = require('express');
const router = express.Router();
const studentController = require('../Student/controller');

router.post('/', studentController.createStudent);

router.get('/', studentController.getAllStudents);

router.get('/:id', studentController.getStudentById);

router.put('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);

router.post('/takeExam', studentController.takeExam);

router.post('/submitAnswers', studentController.submitAnswers);

router.get('/viewResults', studentController.viewResults);

module.exports = router;