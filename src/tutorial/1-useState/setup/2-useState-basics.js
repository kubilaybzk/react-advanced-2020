import React, { useState } from 'react';






const UseStateBasics = () => {

const [text,setText]=useState("title in component");


const handleClick = () => {
  if (text === 'random title') {
    setText('title in component');
  } else {
    setText('random title');
  }
};


return (
  <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={handleClick}>
      change title
    </button>
  </React.Fragment>
);
};

export default UseStateBasics;
