import React, { useContext } from "react";
import { ThemeContext } from "./state/Context";

const Child = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme({
      ...theme,
      backgroundColor: "#FFF",
    });
  };

  return (
    <button onClick={handleClick}>
      I am a child button: Reset BG to white
    </button>
  );
};

export default Child;
