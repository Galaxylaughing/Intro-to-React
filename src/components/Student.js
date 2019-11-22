import React from 'react';
import './Student.css';

const Student = (props) => {
  const selectStyles = props.person.class.toLowerCase() 
      + ' '
      + ((props.person.present) ? 'present' : 'absent');

  // component functions always return JSX
  return (
    <section className={selectStyles}>
      <h3>{props.person.fullName}</h3>
      <p>{props.person.email}</p>
    </section>
  );
};

export default Student;
