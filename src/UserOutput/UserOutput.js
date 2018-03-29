import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>The username is <strong>{props.username}</strong>!</p>
      <p>Hello React!</p>
    </div>
  )
};

export default userOutput;
