const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();
const path=require('path');
const app = express();

app.use(cors());
app.use(express.static(__dirname));
app.get('/'(req,res) => { res.sendFile(path.join(__dirname, 'index.html'));});
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));
  const studentSchema = new mongoose.Schema({
  name: String,
  dept: String,
  cgpa: Number,
  att: Number,
  back: Number,
  lms: Number,
  apt: Number,
  coding: Number,
  risk: String,
  score: Number
});

const Student = mongoose.model('Student', studentSchema);
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});



// Kottha student add chesi SAVE chesthundi
// Kottha student add chesi SAVE chesthundi
app.post('/students', async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  const students = await Student.find();
  res.json({ message: "Saved", students });
});
// Andari students ni okesari save chesthundi
// Andari students ni okesari save chesthundi
app.post('/students/bulk', async (req, res) => {
  await Student.deleteMany({});
  const students = await Student.insertMany(req.body);
  res.json({ message: "All Saved", count: students.length });
});

app.listen(process.env.PORT ||5000, () => {
  console.log('Backend running on http://localhost:5000/students');
});