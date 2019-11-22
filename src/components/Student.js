import React from 'react';
import './Student.css';

const Student = (props) => {

  const buildStyles = () => {
    const selectStyles = props.person.class.toLowerCase() 
      + ' '
      + ((props.person.present) ? 'present' : 'absent');

    return selectStyles;
  }

  // component functions always return JSX
  return (
    <section className={buildStyles()}>
      <h3>{props.person.fullName}</h3>
      <p>{props.person.email}</p>
    </section>
  );
};

export default Student;
