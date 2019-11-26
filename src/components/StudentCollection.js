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

  // turn array of student object into an array of JSX list items
  buildComponents () {
    return this.state.students.map( ( student, i ) => {
      return (
        <li key={ i }>
          <Student 
            fullName={ student.fullName } 
            email={ student.email } 
            class={ student.class } 
            present={ student.present } 
          />
        </li>
      );
    });
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

StudentCollection.propTypes = {
  people: PropType.arrayOf(PropType.shape({
    fullName: PropType.string.isRequired,
    email: PropType.string,
    class: PropType.string,
    present: PropType.bool,
  })).isRequired
}



export default StudentCollection;
