/** @format */

import React, { useState } from "react";
import "./entry.css";

export const FormInput = ({ handleTitleChange }) => {
  const [answer, setanswer] = useState([]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let temp = [...answer];
    temp[parseInt(e.target.name) - 1] = parseInt(e.target.value);
    setanswer(temp);
  };

  const validateData = (y) => {
    let lud = [133, 311, 157, 511, 943, 629];
    if (JSON.stringify(y) === JSON.stringify(lud)) {
      handleTitleChange(true);
    } else {
      console.log("incorrect");
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      validateData(answer);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="1"
          maxLength="3"
          onChange={(e) => handleUpdate(e)}
          onKeyPress={(e) => handleKeypress(e)}
        />
        <input
          type="text"
          name="2"
          maxLength="3"
          onChange={(e) => handleUpdate(e)}
          onKeyPress={(e) => handleKeypress(e)}
        />
        <input
          type="text"
          name="3"
          maxLength="3"
          onChange={(e) => handleUpdate(e)}
          onKeyPress={(e) => handleKeypress(e)}
        />
        <input
          type="text"
          name="4"
          maxLength="3"
          onChange={(e) => handleUpdate(e)}
          onKeyPress={(e) => handleKeypress(e)}
        />
        <input
          type="text"
          name="5"
          maxLength="3"
          onChange={(e) => handleUpdate(e)}
          onKeyPress={(e) => handleKeypress(e)}
        />
        <input
          type="text"
          name="6"
          maxLength="3"
          onChange={(e) => handleUpdate(e)}
          onKeyPress={(e) => handleKeypress(e)}
        />
      </form>
    </div>
  );
};

/*
<input
      type="text"
      value={answer}
      id="soln"
      name="soln"
      value={answer}
      onChange={(e) => setanswer(e.target.value)}
	></input>
	*/
