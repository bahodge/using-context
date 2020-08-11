import React, { useContext } from "react";
import "./App.css";

// Contexts
import { ThemeContext } from "./state/Context";

// Providers
import TodoProvider from "./state/TodoProvider";
import UserProvider from "./state/UserProvider";

// Components
import TodoList from "./TodoList";
import Login from "./Login";

const App = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleChangeBackground = () => {
    const getValue = () => Math.floor(Math.random() * 255);
    const valueToHex = (val) => {
      const hex = val.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    const generateHex = () => {
      const r = getValue();
      const g = getValue();
      const b = getValue();

      return `#${valueToHex(r)}${valueToHex(g)}${valueToHex(b)}`;
    };

    setTheme({
      ...theme,
      backgroundColor: generateHex(),
    });
  };

  return (
    <div className="App" style={theme}>
      <UserProvider>
        <Login />
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </UserProvider>
      <button onClick={handleChangeBackground}>Change Background</button>
    </div>
  );
};

export default App;
