import React from 'react';
import Student from './Student';

const StudentCollection = (props) => {
  // const students = [
  //   { fullName: "Ada",        email: "ada@lovelace.com" },
  //   { fullName: "Katherine",  email: "kat@nasa.gov" },
  //   { fullName: "Devin",      email: "dmoney@g.mail" },
  //   { fullName: "Becca",      email: "bmoney@g.mail" },
  //   { fullName: "Dee",        email: "dee@dee.dee" }
  // ];

  // turn array of student object into an array of JSX list items
  const studentComponents = props.people.map((student, i) => {
    return (
      <li key={i}>
        <Student fullName={student.fullName} email={student.email} class={student.class} present={student.present} />
        {/* <Student fullName={student.fullName} email={student.email} /> */}
      </li>
    );
  });

  // return all JSX list items in an unordered list
  return (
    <ul className="student-collection">
      {studentComponents}
    </ul>
  );
};

export default StudentCollection;
