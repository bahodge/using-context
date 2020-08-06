import React from "react";
import "./App.css";

// Contexts
import TodoProvider from "./TodoProvider";
import UserProvider from "./UserProvider";

// Components
import TodoList from "./TodoList";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Login />
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </UserProvider>
    </div>
  );
}

export default App;
