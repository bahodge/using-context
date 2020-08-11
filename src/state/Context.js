import { createContext } from "react";

// Return Object
export const UserContext = createContext([null, () => {}]);

// Return Array
export const TodoContext = createContext([[], () => []]);

// Return Object
export const ThemeContext = createContext([{}, () => ({})]);
