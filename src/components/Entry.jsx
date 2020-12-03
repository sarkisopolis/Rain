/** @format */

import React from "react";
import "./entry.css";
import { FormInput } from "./FormInput.jsx";


//Visualization component

export const Entry = ({handleTitleChange}) => {
  return (
    <div>
      <div className="rain">
        <div className="dataEntry">
          <div className="trees">
            The trees fade in the mist
          </div>
          <FormInput handleTitleChange={handleTitleChange}/>
        </div>
      </div>
    </div>
  );
};
