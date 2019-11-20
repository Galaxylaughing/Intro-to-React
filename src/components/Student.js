import React from 'react';

const Student = (props) => {
  // component functions always return JSX
  return (
    <section>
      <h3>{props.fullName}</h3>
      <p>{props.email}</p>
    </section>
  );
};

export default Student;
