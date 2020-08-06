import React, { useState } from "react";
import { UserContext } from "./Context";

const UserProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
