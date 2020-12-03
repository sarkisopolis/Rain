/** @format */

import { Entry } from "./Entry.jsx";
import { Stozo } from "./Stozo.jsx";
import React, { useState } from "react";

export const Renderage = () => {
  const [view, setView] = useState(false);
  const handleTitleChange = (evt) => {
    setView(evt);
  };
  if (view) {
    return <Stozo />;
  } else {
    return <Entry handleTitleChange={handleTitleChange} />;
  }
};
