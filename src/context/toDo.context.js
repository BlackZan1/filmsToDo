import { createContext } from "react";

let data = JSON.parse(localStorage.getItem('insomniaData')) || [];

export const toDoContext = createContext({
    data
})