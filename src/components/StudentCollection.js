import React from 'react';
import Student from './Student.js';

const StudentCollection = () => {
  const students = [
    { fullName: "Ada",        email: "ada-lovelace@ada.com" },
    { fullName: "Katherine",  email: "kat@nasa.gov" },
    { fullName: "Devin",      email: "dmoney@g.mail" },
    { fullName: "Becca",      email: "bmoney@g.mail" },
    { fullName: "Dee",        email: "dee@dee.dee" }
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
