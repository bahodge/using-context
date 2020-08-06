import React, { useContext } from "react";
import { UserContext } from "./Context";

const Login = () => {
  const [user, setuser] = useContext(UserContext);

  const handleLogin = () => {
    if (user) return;

    const newUser = { name: "Ben" };

    setuser(newUser);
  };

  const handleLogout = () => {
    setuser(null);
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;
