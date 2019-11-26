import React from 'react';
import PropType from 'prop-types';

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



// class StudentCollection extends React.Component {

//   // turn array of student object into an array of JSX list items
//   buildComponents () {
//     return this.props.people.map( ( student, i ) => {
//       return (
//         <li key={ i }>
//           <Student 
//             fullName={ student.fullName } 
//             email={ student.email } 
//             class={ student.class } 
//             present={ student.present } 
//           />
//         </li>
//       );
//     } );
//   }

//   // return all JSX list items in an unordered list
//   render () {
//     return (
//       <ul className="student-collection">
//         { this.buildComponents() }
//       </ul>
//     );
//   }
// };



class StudentCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: props.people,
    }
  }

  togglePresent = (studentEmail) => {
    // get everything that's saved in the key 'students'
    // and put it into the variable 'students'
    const { students } = this.state;

    // find student
    const studentToUpdate = students.find((student) => student.email === studentEmail);
    // change student data
    studentToUpdate.present = !studentToUpdate.present;
    // update state and re-render 
    this.setState( { students: students } );
  }

  deleteStudent = (studentEmail) => {
    const { students } = this.state;
    const filteredStudents = students.filter(student => student.email !== studentEmail);
    this.setState( { students: filteredStudents } );
  }

  // turn array of student object into an array of JSX list items
  buildComponents () {
    return this.state.students.map( ( student, i ) => {
      return (
        <Student 
          fullName={ student.fullName } 
          email={ student.email } 
          class={ student.class } 
          present={ student.present } 
          key={ i }
          togglePresentCallback={ this.togglePresent }
          deleteStudentCallback={ this.deleteStudent }
        />
      );
    });
  }

  // return all JSX list items in an unordered list
  render () {
    return (
      <div className="student-collection">
        { this.buildComponents() }
      </div>
    );
  }
};

StudentCollection.propTypes = {
  people: PropType.arrayOf(PropType.shape({
    fullName: PropType.string.isRequired,
    email: PropType.string.isRequired,
    class: PropType.string,
    present: PropType.bool,
  })).isRequired
}



export default StudentCollection;
