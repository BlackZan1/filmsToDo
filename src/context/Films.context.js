import { createContext } from "react";

export const FilmsContext = createContext({
    data: [],
    isFetching: true
})