import React, { useState } from "react";
import { TodoContext } from "./Context";

const TodoProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <TodoContext.Provider value={[state, setState]}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
