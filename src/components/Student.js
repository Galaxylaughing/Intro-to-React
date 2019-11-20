import React from 'react';

const Student = (props) => {
  // component functions always return JSX
  return (
    <section>
      <h3>{props.person.fullName}</h3>
      <p>{props.person.email}</p>
    </section>
  );
};

export default Student;
