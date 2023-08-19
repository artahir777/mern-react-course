import { createContext } from "react";

// Context API i a built-in feature for managing state on a higher level.

// It consists of
    // - Context Object -> stores state.
            // - has a provider component used for accessing that state/data
    // - Consumer Component -> The place we want to use our data/state

export const MyContext = createContext("This is some value");
