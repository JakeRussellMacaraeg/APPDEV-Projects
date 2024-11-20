import React, { useState } from 'react';
import StudentCard from './StudentCard';

var attendance = [];

export default function Form() {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  function handleIdChange(event) {
    setId(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCourseChange(event) {
    setCourse(event.target.value);
  }
  function handleAgeChange(event) {
    setAge(event.target.value);
  }
  function handleGenderChange(event) {
    setGender(event.target.value);
  }
  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function addAttendance() {
    attendance.push({
      id: id,
      name: name,
      course: course,
      age: age,
      gender: gender,
      date: date,
    });
    alert('Attendance added!');
    setId(0);
    setName('');
    setCourse('');
    setAge(0);
    setGender('');
    setDate('');
  }

  return (
    <>
      <h1>Student Attendance</h1>
      <div className="form-section">
        <div className="form-container">
          <h4>Fill in the details:</h4>
          ID Number: <input type="text" value={id} onChange={handleIdChange} />
          Name: <input type="text" value={name} onChange={handleNameChange} />
          Course: <input type="text" value={course} onChange={handleCourseChange} />
          Age: <input type="number" value={age} onChange={handleAgeChange} />
          Gender:
          <div className="gender-container">
            <label>
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={handleGenderChange}
              />
              Female
            </label>
          </div>
          Date: <input type="date" value={date} onChange={handleDateChange} />
          <button onClick={addAttendance}>Submit</button>
        </div>

        <div className="student-list">
          <h4>Students Added:</h4>
          {attendance.length > 0 ? (
            attendance.map((student, index) => (
              <div className="student-card" key={index}>
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Gender:</strong> {student.gender}</p>
                <p><strong>Date:</strong> {student.date}</p>
              </div>
            ))
          ) : (
            <p>No students added.</p>
          )}
        </div>
      </div>
    </>
  );
}
