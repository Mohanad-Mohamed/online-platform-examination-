
const Student = require('../Student/model')

exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ success: true, data: newStudent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.status(200).json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.status(200).json({ success: true, data: updatedStudent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.status(200).json({ success: true, data: deletedStudent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.takeExam = async (exam) => {
  try {
    console.log('Exam taken successfully');
  } catch (error) {
    console.error(error.message);
  }
};

exports.submitAnswers = async (exam, answers) => {
  try {
    console.log('Answers submitted successfully');
  } catch (error) {
    console.error(error.message);
  }
};

exports.viewResults = async (examId) => {
  try {
    const examResults = await Result.find({ exam: examId }).populate('student');
    console.log(examResults);
  } catch (error) {
    console.error(error.message);
  }
};
