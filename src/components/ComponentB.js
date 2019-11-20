// components/ComponentB.js
import React from 'react';

const ComponentB = (props) => {
  return (
    <div>
      <div>The data from props is:</div>
      <ul>
        <li>varName: { props.varName }, </li>
        <li>anotherVar: {props.anotherVar}, </li>
        <li>yetAnotherNewVar: {props.yetAnotherNewVar}</li>
      </ul>
    </div>
  );
};

export default ComponentB;
