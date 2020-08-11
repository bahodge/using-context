import React, { useState } from "react";
import { ThemeContext } from "./Context";

const DEFAULT_STATE = {
  backgroundColor: "#FFF",
  fontWeight: "bold",
  color: "#444444",
};

const ThemeProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_STATE); // initial value

  return (
    <ThemeContext.Provider value={[state, setState]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
