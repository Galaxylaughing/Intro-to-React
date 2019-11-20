import React from 'react';

const Student = (props) => {
  // component functions always return JSX
  return (
    <h3>{props.fullName}, {props.email}</h3>
  );
};

export default Student;