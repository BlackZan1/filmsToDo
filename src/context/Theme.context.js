import { createContext } from "react";

let data = JSON.parse(localStorage.getItem('insomnia_theme')) || {
    leftTheme: 'light',
    rightTheme: 'marina'
};

export const ThemeContext = createContext({ ...data })