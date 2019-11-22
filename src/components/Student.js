import React from 'react';
import './Student.css';
import PropTypes from 'prop-types';

const Student = (props) => {

  const buildStyles = () => {
    const selectStyles = ((props.class) ? props.class.toLowerCase() : '')
      + ' '
      + ((props.present) ? 'present' : 'absent');

    return selectStyles;
  }

  // component functions always return JSX
  return (
    <section className={buildStyles()}>
      <h3>{props.fullName}</h3>
      <p>{props.email}</p>
    </section>
  );
};

Student.propTypes = {
  // person: PropTypes.object.isRequired,
  fullName: PropTypes.string.isRequired,
  class: PropTypes.string,
  email: PropTypes.string,
  present: PropTypes.bool.isRequired
};

// // You can also set default values for some or all of your props with a defaultProps static attribute:
Student.defaultProps = {
  class: 'no-class',
  email: 'no email on file',
}

export default Student;
