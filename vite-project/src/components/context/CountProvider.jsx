import React, { useReducer } from "react";

import CountContext from "./CountContext";
import countReduser from "./CountReducer";

export default function CountProvider({children}) {
  const intialState=0

    const [count,dispatch]= useReducer(countReduser,intialState)
  return (
    <div>
      <CountContext.Provider value={{count,dispatch }}>
        {children}
      </CountContext.Provider>
    </div>
  );
}
