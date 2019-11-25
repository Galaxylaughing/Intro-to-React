import React from 'react';
import Student from './Student';

// const StudentCollection = (props) => {
//   // turn array of student object into an array of JSX list items
//   const studentComponents = props.people.map((student, i) => {
//     return (
//       <li key={i}>
//         <Student fullName={student.fullName} email={student.email} class={student.class} present={student.present} />
//       </li>
//     );
//   });

//   // return all JSX list items in an unordered list
//   return (
//     <ul className="student-collection">
//       {studentComponents}
//     </ul>
//   );
// };

class StudentCollection extends React.Component {

  // turn array of student object into an array of JSX list items
  buildComponents () {
    return this.props.people.map( ( student, i ) => {
      return (
        <li key={ i }>
          <Student fullName={ student.fullName } email={ student.email } class={ student.class } present={ student.present } />
        </li>
      );
    } );
  }

  // return all JSX list items in an unordered list
  render () {
    return (
      <ul className="student-collection">
        { this.buildComponents() }
      </ul>
    );
  }
};

export default StudentCollection;
