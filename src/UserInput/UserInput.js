import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <div className="userInput">
      <input onChange={props.changed} type="text" value={props.username} />
    </div>
  )
};

export default userInput;
