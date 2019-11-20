import React from 'react';
import Student from './Student.js';

const StudentCollection = () => {

  const students = [
    {
      fullName: "Ada Lovelace",
      email: "ada-lovelace@ada.com"
    },
    {
      fullName: "Katherine Johnson",
      email: "kat@nasa.gov"
    }
  ];

  const studentComponents = students.map((student, i) => {
    return (
      <li key={i}>
        <Student fullName={student.fullName} email={student.email} />
      </li>
    );
  });

  return (
    <ul className="student-collection">
      {studentComponents}
    </ul>
  );
};

export default StudentCollection;