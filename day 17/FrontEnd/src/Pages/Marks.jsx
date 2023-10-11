import MotionHoc from "./MotionHoc";
import React, { useState } from 'react';
import '../Assets/css/Marks.css';

const MarksComponent = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Mohan Giresh', marks: { math: 90, science: 85, history: 78 } },
    { id: 2, name: 'Nithin', marks: { math: 88, science: 92, history: 80 } },
    { id: 3, name: 'Manas', marks: { math: 75, science: 79, history: 82 } },
    { id: 4, name: 'Keerthi', marks: { math: 90, science: 85, history: 78 } },
    { id: 5, name: 'Hajith', marks: { math: 88, science: 92, history: 80 } },
    { id: 6, name: 'Haaris', marks: { math: 75, science: 79, history: 82 } },
    { id: 7, name: 'Magesh', marks: { math: 90, science: 85, history: 78 } },
    { id: 8, name: 'Pazhani', marks: { math: 88, science: 92, history: 80 } },
    { id: 9, name: 'Pramoth', marks: { math: 75, science: 79, history: 82 } },
    { id: 10, name: 'Vishal', marks: { math: 90, science: 85, history: 78 } },
    { id: 11, name: 'Kashf', marks: { math: 88, science: 92, history: 80 } },
    { id: 12, name: 'Kishore', marks: { math: 75, science: 79, history: 82 } },
    { id: 13, name: 'Prabha', marks: { math: 90, science: 85, history: 78 } },
    { id: 14, name: 'Neeraj', marks: { math: 88, science: 92, history: 80 } },
    { id: 15, name: 'Kavin', marks: { math: 75, science: 79, history: 82 } },
   
  ]);

  const [newMarks, setNewMarks] = useState(students.map(() => ({ subject: '', mark: '' })));

  const handleChange = (e, studentIndex) => {
    const { name, value } = e.target;

    const updatedMarks = [...newMarks];
    updatedMarks[studentIndex] = { ...updatedMarks[studentIndex], [name]: value };
    
    setNewMarks(updatedMarks);
  };

  const addMark = (studentId, studentIndex) => {
    const updatedStudents = students.map((student, index) => {
      if (index === studentIndex) {
        const updatedMarks = { ...student.marks, [newMarks[index].subject]: parseFloat(newMarks[index].mark) };
        return { ...student, marks: updatedMarks };
      }
      return student;
    });

    setStudents(updatedStudents);

    const updatedMarks = [...newMarks];
    updatedMarks[studentIndex] = { subject: '', mark: '' };
    setNewMarks(updatedMarks);
  };

  const calculateAverage = (marks) => {
    const totalMarks = Object.values(marks).reduce((total, mark) => total + mark, 0);
    const numberOfSubjects = Object.keys(marks).length;
    return totalMarks / numberOfSubjects;
  };

  return (
    <div className="marks-container">
      <h1>MARKS MANAGEMENT</h1>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Math</th>
            <th>Science</th>
            <th>History</th>
            <th>Average</th>
            <th>Add Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks.math}</td>
              <td>{student.marks.science}</td>
              <td>{student.marks.history}</td>
              <td>{calculateAverage(student.marks).toFixed(2)}</td>
              <td>
                <input
                  type="text"
                  name="subject"
                  value={newMarks[index].subject}
                  placeholder="Subject"
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="number"
                  name="mark"
                  value={newMarks[index].mark}
                  placeholder="Mark"
                  onChange={(e) => handleChange(e, index)}
                />
                <button onClick={() => addMark(student.id, index)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Marks = MotionHoc(MarksComponent);

export default Marks;
