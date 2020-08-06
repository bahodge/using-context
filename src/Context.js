import { createContext } from "react";

// Return Object
export const UserContext = createContext([null, () => {}]);

// Return array
export const TodoContext = createContext([[], () => []]);
