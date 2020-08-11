import React, { useState, useContext } from "react";
import { TodoContext, UserContext } from "./state/Context";

const todoText = {
  marginLeft: "5px",
  marginRight: "5px",
  padding: "5px",
};

const todoItem = {
  listStyle: "none",
  marginBottom: "3px",
};

const TodoList = () => {
  const [value, setValue] = useState("");

  const [todos, setTodos] = useContext(TodoContext);
  const [user] = useContext(UserContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = { value, user };

    setTodos([...todos, newTodo]);
    setValue("");
  };

  const handleRemoveTodo = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx} style={todoItem}>
            <span style={todoText}>
              {todo.value} added by {todo.user?.name || "unknown"}
            </span>
            <button type="button" onClick={() => handleRemoveTodo(todo)}>
              Remove Todo
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Todo..."
          value={value}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoList;
