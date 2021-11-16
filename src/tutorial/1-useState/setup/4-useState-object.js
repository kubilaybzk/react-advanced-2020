import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Kubilay",
    age: 24,
    message: "React değişmemiş hali",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Değişmiş hali" });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
